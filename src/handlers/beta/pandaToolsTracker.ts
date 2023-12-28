import {APIGatewayProxyEventV2} from "aws-lambda";
import {DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";
import {atomicCountUp} from "../lib/counter";
import {callExternalResponse, debug, region, tableName} from "./lib/env";

export default async function pandaToolsTracker(event: APIGatewayProxyEventV2, data: any) {
    const time = event.requestContext.time
    const timeEpoch = event.requestContext.timeEpoch

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
                const count = updateItemOutput.Attributes?.Count?.N
                if (count) {
                    return callExternalResponse(200, count)
                }
            }
        }
    }

    return callExternalResponse(200, 'tracked')
}
