import {AttributeValue, DynamoDBClient, PutItemCommand} from '@aws-sdk/client-dynamodb'
import {APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda'

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
    const sourceIp = event.requestContext.http.sourceIp
    // const userAgent = event.requestContext.http.userAgent

    const body = JSON.parse(event.body!)
    //  body: '{"request":"{\\"WID\\":\\"test_test\\",\\"Sensor\\":\\"1_1_0\\",\\"Series\\":\\"c8f39aa7-963d-400f-9758-1427b2d7db9d:1703225266603,\\"}"}',

    const wid = body.request?.WID as string
    const sensor = body.request?.Sensor as string
    const series = body.request?.Series as string

    if (wid) {
        const client = new DynamoDBClient({
            region: region,
        })
        for (const entry of series.split(',')) {
            const [userID, timestamp] = entry.split(':')
            const item : Record<string, AttributeValue> = {
                "PartitionKey": {S: wid},
                "SortKey": {S: timeEpoch + "-" + sourceIp},
                "Received": {S: time}, // for human-readability
                "Timestamp": {N: timestamp},
                "UserID": {S: userID},
                "Sensor": sensor ? {S: sensor} : {NULL: true},
            }
            const putItemOutput = await client.send(new PutItemCommand({
                TableName: tableName,
                Item: item,
            }))
            if (debug) {
                console.info('putItemOutput:', putItemOutput)
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
