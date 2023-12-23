import {DynamoDBClient, PutItemCommand} from '@aws-sdk/client-dynamodb'
import {APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda'
import {atomicCountUp} from "./lib/commands";

// 環境変数
const region = process.env.DDB_REGION
const tableName = process.env.DDB_TABLE!
const debug = process.env.DEBUG === '1'
const verify = process.env.VERIFY_TOKEN!

export async function handler(event: APIGatewayProxyEventV2, context: Context, callback: APIGatewayProxyCallbackV2)
    : Promise<APIGatewayProxyResultV2> {

    if (debug) {
        console.info('event:', event);
    }

    const time = event.requestContext.time
    const timeEpoch = event.requestContext.timeEpoch

    const body = JSON.parse(event.body!)
    if (debug) {
        console.info('body:', body)
    }
    const data = JSON.parse(body.request)
    const wid = data.WID as string
    const sensor = data.Sensor as string
    const timing = data.Timing as string
    const series = data.Series as string

    if (wid) {
        const client = new DynamoDBClient({
            region: region,
        })
        for (const entry of series.split(',')) {
            if (entry === "") continue
            const [userID, timestamp] = entry.split(':')
            const putItemOutput = await client.send(new PutItemCommand({
                TableName: tableName,
                Item: {
                    "PartitionKey": {S: wid},
                    "SortKey": {S: timeEpoch + "-" + userID},
                    "Received": {S: time}, // for human-readability
                    "Timestamp": {N: timestamp},
                    "UserID": {S: userID},
                    "Sensor": sensor ? {S: sensor} : {NULL: true},
                    "Timing": timing ? {N: timing} : {NULL: true},
                },
            }))
            if (debug) {
                console.info('putItemOutput:', putItemOutput)
            }
            if (sensor) {
                const updateItemOutput = await client.send(atomicCountUp(tableName, wid, sensor))
                if (debug) {
                    console.info('updateItemOutput:', updateItemOutput)
                }
            }
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            verify: verify,
            response: "ok",
        }),
    }
}
