import {DynamoDBClient, QueryCommand, QueryCommandInput} from '@aws-sdk/client-dynamodb'
import {APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda'
import * as crypto from 'crypto'

// 環境変数
const region = process.env.DDB_REGION
const tableName = process.env.DDB_TABLE!
const salt = process.env.SALT!
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
            ExpressionAttributeValues: {
                ":wid": {S: wid},
            }
        }
        if (sensor && sensor.length) {
            input.FilterExpression = "Sensor = :sensor"
            input.ExpressionAttributeValues![":sensor"] = {S: sensor}
        } else if (sourceIp && sourceIp.length) {
            input.FilterExpression = "SourceIp = :sourceIp"
            input.ExpressionAttributeValues![":sourceIp"] = {S: sourceIp}
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
                SourceIpHash: generateHash(value.SourceIp?.S, 'SourceIp'),
                UserAgentHash: generateHash(value.UserAgent?.S, 'UserAgent'),
            }
        })

        return {
            statusCode: 200,
            body: JSON.stringify({
                Items: safeItems,
                Count: queryCommandOutput.Count,
                ScannedCount: queryCommandOutput.ScannedCount,
            }),
        }
    }


    return {
        statusCode: 400,
        body: "missing wid"
    }
}

const generateHash = (source: string|undefined, sugar: string) => {
    if (!source) {
        return undefined
    }
    const hash = crypto.createHash('sha256')
    hash.update(sugar)
    hash.update(source)
    hash.update(salt)
    return hash.digest('hex')
}
