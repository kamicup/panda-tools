import {DynamoDBClient, QueryCommand, QueryCommandInput} from '@aws-sdk/client-dynamodb'
import {APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda'
import * as crypto from 'crypto'

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

    const wid = event.queryStringParameters?.wid
    const sensor = event.queryStringParameters?.sensor
    const sourceIp = event.queryStringParameters?.sourceIp

    if (wid) {
        const input : QueryCommandInput = {
            TableName: tableName,
            KeyConditionExpression: "PartitionKey = :wid",
            ExpressionAttributeNames: {},
            ExpressionAttributeValues: {":wid": {S: wid}}
        }
        const filters: string[] = []
        if (sensor && sensor.length) {
            filters.push("#sensor = :sensor")
            input.ExpressionAttributeNames!["#sensor"] = "Sensor"
            input.ExpressionAttributeValues![":sensor"] = {S: sensor}
        }
        if (sourceIp && sourceIp.length) {
            try {
                const decrypted = decrypt(sourceIp)
                filters.push("#sourceIp = :sourceIp")
                input.ExpressionAttributeNames!["#sourceIp"] = "SourceIp"
                input.ExpressionAttributeValues![":sourceIp"] = {S: decrypted}
            } catch (e) {
                return errorJsonResponse('invalid sourceIp')
            }
        }
        if (filters.length) {
            input.FilterExpression = filters.join(' and ')
        }

        const client = new DynamoDBClient({
            region: region,
        })
        const queryCommandOutput = await client.send(new QueryCommand(input))
        if (debug) {
            console.info('queryCommandOutput:', queryCommandOutput)
        }

        const safeItems = queryCommandOutput.Items?.map((value) => {
            return {
                WID: value.PartitionKey?.S,
                Sensor: value.Sensor?.S,
                Time: value.Time?.S,
                TimeEpoch: value.TimeEpoch?.N,
                SourceIp: encrypt(value.SourceIp?.S),
                UserAgentHash: hash(value.UserAgent?.S),
            }
        })

        return jsonResponse(200, {
            Items: safeItems,
            Count: queryCommandOutput.Count,
            ScannedCount: queryCommandOutput.ScannedCount,
        })
    }
    return errorJsonResponse('missing wid')
}

const errorJsonResponse = (message: string) => {
    return jsonResponse(400, {error: message})
}

const jsonResponse = (statusCode: number, body: any) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body),
    }
}

const hash = (source: string|undefined) => {
    if (!source) {
        return undefined
    }
    const hash = crypto.createHash('sha256')
    hash.update(source)
    hash.update(salt)
    return hash.digest('hex')
}

function encrypt(text: string|undefined) {
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
