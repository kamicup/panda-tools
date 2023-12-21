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
    const userAgent = event.requestContext.http.userAgent

    // const wid = event.queryStringParameters?.wid
    // const sensor = event.queryStringParameters?.sensor
    // const timing = event.queryStringParameters?.timing
    // const direct = event.queryStringParameters?.direct
    //
    // if (wid) {
    //     const client = new DynamoDBClient({
    //         region: region,
    //     })
    //     const item : Record<string, AttributeValue> = {
    //         "PartitionKey": {S: wid},
    //         "SortKey": {S: timeEpoch + "-" + sourceIp},
    //         "Time": {S: time}, // for human-readability
    //         "TimeEpoch": {N: String(timeEpoch)},
    //         "SourceIp": {S: sourceIp},
    //         "UserAgent": {S: userAgent},
    //         "Sensor": sensor ? {S: sensor} : {NULL: true},
    //         "Timing": timing ? {N: timing} : {NULL: true},
    //     }
    //     const putItemOutput = await client.send(new PutItemCommand({
    //         TableName: tableName,
    //         Item: item,
    //     }))
    //     if (debug) {
    //         console.info('putItemOutput:', putItemOutput)
    //     }
    // }

    return {
        statusCode: 200,
        body: JSON.stringify({
            verify: verify,
            response: "ok",
        }),
    }
}
