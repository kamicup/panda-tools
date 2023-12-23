import {AttributeValue, DynamoDBClient, QueryCommand, QueryCommandInput} from '@aws-sdk/client-dynamodb'
import {APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda'
import * as crypto from 'crypto'
import {atomicCountSet} from "./lib/commands";

// 環境変数
const region = process.env.DDB_REGION
const tableName = process.env.DDB_TABLE!
const salt = process.env.SALT!
const key = new Buffer(process.env.CIPHER_KEY!, 'base64'); // 32バイトの鍵
const iv = new Buffer(process.env.CIPHER_IV!, 'base64'); // 16バイトの初期化ベクトル
const debug = process.env.DEBUG === '1'

export async function handler(event: APIGatewayProxyEventV2, context: Context, callback: APIGatewayProxyCallbackV2)
    : Promise<APIGatewayProxyResultV2> {

    if (debug) {
        console.info('event:', event);
    }

    const analyze = event.queryStringParameters?.analyze
    const wid = event.queryStringParameters?.wid
    const sensor = event.queryStringParameters?.sensor
    const sourceIp = event.queryStringParameters?.sourceIp
    const userId = event.queryStringParameters?.userId

    if (!wid) {
        return errorJsonResponse('missing wid')
    }

    if (analyze === 'individualSensorCounter') {
        return await individualSensorCounter(wid)
    } else if (analyze === 'individualSensorCounts') {
        return await individualSensorCounts(wid)
    } else {
        return await simpleQuery(wid, sensor, sourceIp, userId)
    }
}

async function individualSensorCounter(wid: string) {
    const client = new DynamoDBClient({
        region: region,
    })
    const items = await queryAll(client, {
        TableName: tableName,
        KeyConditionExpression: "PartitionKey = :key",
        ExpressionAttributeValues: {":key": {S: 'CNT_' + wid}},
        ReturnConsumedCapacity: "TOTAL",
    })

    const individualSensorCounts = []
    for (const item of items) {
        const count = item.Count?.N
        individualSensorCounts.push({
            Sensor: item.SortKey?.S,
            Count: count ? Number.parseInt(count) : undefined,
        })
    }
    return jsonResponse(200, {
        IndividualSensorCounts: individualSensorCounts,
    });
}

async function individualSensorCounts(wid: string) {
    const client = new DynamoDBClient({
        region: region,
    })
    const items = await queryAll(client, {
        TableName: tableName,
        KeyConditionExpression: "PartitionKey = :wid",
        ExpressionAttributeValues: {":wid": {S: wid}},
        ProjectionExpression: "SortKey, Sensor",
        ReturnConsumedCapacity: "TOTAL",
    })

    let minTimeEpoch = Number.MAX_VALUE
    let maxTimeEpoch = 0
    const summary = items.reduce((carry: Record<string, number>, value, idx, arr) => {
        const sortKey = value.SortKey?.S
        const sensor = value.Sensor?.S
        if (sortKey && sensor) {
            if (sensor in carry) {
                carry[sensor] = carry[sensor] + 1
            } else {
                carry[sensor] = 1
            }
            const timeEpoch = Number.parseInt(sortKey.split('-')[0])
            minTimeEpoch = Math.min(minTimeEpoch, timeEpoch)
            maxTimeEpoch = Math.max(maxTimeEpoch, timeEpoch)
        }
        return carry
    }, {})

    const individualSensorCounts = []
    for (const sensor in summary) {
        individualSensorCounts.push({Sensor: sensor, Count: summary[sensor]})
        // ついでに更新
        atomicCountSet(tableName, wid, sensor, summary[sensor])
    }

    return jsonResponse(200, {
        IndividualSensorCounts: individualSensorCounts,
        MaxTimeEpoch: maxTimeEpoch,
        MinTimeEpoch: minTimeEpoch,
    });
}

async function simpleQuery(wid: string, sensor: string | undefined, sourceIp: string | undefined, userId: string | undefined) {
    const input: QueryCommandInput = {
        TableName: tableName,
        KeyConditionExpression: "PartitionKey = :wid",
        ExpressionAttributeValues: {":wid": {S: wid}},
        ScanIndexForward: false,
        ReturnConsumedCapacity: "TOTAL",
    }
    const filters: string[] = []
    const eaNames: Record<string, string> = {}
    if (sensor && sensor.length) {
        filters.push("#sensor = :sensor")
        eaNames["#sensor"] = "Sensor"
        input.ExpressionAttributeValues![":sensor"] = {S: sensor}
    }
    if (userId && userId.length) {
        filters.push("#userId = :userId")
        eaNames["#userId"] = "UserID"
        input.ExpressionAttributeValues![":userId"] = {S: userId}
    }
    if (sourceIp && sourceIp.length) {
        try {
            const decrypted = decrypt(sourceIp)
            filters.push("#sourceIp = :sourceIp")
            eaNames["#sourceIp"] = "SourceIp"
            input.ExpressionAttributeValues![":sourceIp"] = {S: decrypted}
        } catch (e) {
            return errorJsonResponse('invalid sourceIp')
        }
    }
    if (filters.length) {
        input.FilterExpression = filters.join(' and ')
        input.ExpressionAttributeNames = eaNames
    }

    const client = new DynamoDBClient({
        region: region,
    })
    const items = await queryAll(client, input, undefined)

    const safeItems = items.map((value: Record<string, AttributeValue>) => {
        return {
            WID: value.PartitionKey?.S,
            Time: value.Time?.S,
            TimeEpoch: value.TimeEpoch?.N,
            Sensor: value.Sensor?.S,
            Timing: value.Timing?.N,
            SourceIp: encrypt(value.SourceIp?.S),
            UserAgentHash: hash(value.UserAgent?.S),
        }
    })

    return jsonResponse(200, {Items: safeItems})
}

const errorJsonResponse = (message: string) => {
    return jsonResponse(400, {error: message})
}

const jsonResponse = (statusCode: number, body: any) => {
    return {statusCode: statusCode, body: JSON.stringify(body)}
}

async function queryAll(client: DynamoDBClient, input: QueryCommandInput, exclusiveStartKey: undefined | Record<string, AttributeValue> = undefined) {
    if (exclusiveStartKey) {
        input.ExclusiveStartKey = exclusiveStartKey
    }
    const queryCommandOutput = await client.send(new QueryCommand(input))
    if (debug) {
        console.info('queryCommandOutput.ConsumedCapacity:', queryCommandOutput.ConsumedCapacity)
        console.info('queryCommandOutput.LastEvaluatedKey:', queryCommandOutput.LastEvaluatedKey)
    }
    const items = queryCommandOutput.Items ?? []
    if (queryCommandOutput.LastEvaluatedKey) {
        const nextItems = await queryAll(client, input, queryCommandOutput.LastEvaluatedKey)
        items.push(...nextItems)
    }
    return items
}

const hash = (source: string | undefined) => {
    if (!source) {
        return undefined
    }
    const hash = crypto.createHash('sha256')
    hash.update(source)
    hash.update(salt)
    return hash.digest('hex')
}

function encrypt(text: string | undefined) {
    if (!text) {
        return undefined
    }
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encrypted: string) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
