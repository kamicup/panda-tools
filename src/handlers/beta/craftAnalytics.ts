import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, craftTableName, debug, region} from "./lib/env";
import {DynamoDBClient, QueryCommand, UpdateItemCommand} from "@aws-sdk/client-dynamodb";

const META_SET_PASS = 'SET_PASS'
const META_REPORT = 'REPORT'
const META_AUTH_PASS = 'AUTH_PASS'

type ReportData = {
    pass: string,
    list: Record<string, number>,
    interval: number,
}

type SetPassData = {
    interval: number,
    text: string,
}

type AuthPassData = {
    interval: number,
    text: string,
}

export default async function craftAnalytics(event: APIGatewayProxyEventV2, data: any) {

    if (data[META_SET_PASS]) {
        return await processSetPass(data[META_SET_PASS] as SetPassData)
    }

    if (data[META_REPORT]) {
        return await processReport(data[META_REPORT] as ReportData)
    }

    if (data[META_AUTH_PASS]) {
        return await processAuthPass(data[META_AUTH_PASS] as AuthPassData)
    }

    return callExternalResponse(200, JSON.stringify({
        result: false,
    }))
}

function newClient() {
    return new DynamoDBClient({
        region: region,
    })
}

async function processSetPass(data: SetPassData) {
    const pass = data.text
    const interval = data.interval

    const client = newClient()
    const partitionKey = pass + '_' + interval

    const queryCommandOutput = await client.send(query(partitionKey))
    if (queryCommandOutput.Items && queryCommandOutput.Items.length > 0) {
        return callExternalResponse(200, JSON.stringify({
            //result: false
        }))
    }

    return callExternalResponse(200, JSON.stringify({
        pass: pass
    }))
}

async function processReport(data: ReportData) {
    const pass = data.pass
    const interval = data.interval
    const list = data.list

    const client = newClient()
    const partitionKey = pass + '_' + interval

    for (const tmpUserId in list) {
        const rangeKey = list[tmpUserId]

        const updateItemOutput = await client.send(
            atomicCountUp(craftTableName, partitionKey, rangeKey)
        )
        if (debug) {
            console.info('updateItemOutput:', updateItemOutput)
        }
        // const count = updateItemOutput.Attributes?.Count?.N
    }
    return callExternalResponse(200, JSON.stringify({}))
}

async function processAuthPass(data: AuthPassData) {
    const pass = data.text
    const interval = data.interval

    const client = newClient()
    const partitionKey = pass + '_' + interval

    // 本来はページングが必要だけど、レコード量が限られてるのでサボってる

    const lines: string[] = [];

    const queryCommandOutput = await client.send(query(partitionKey))
    if (debug) {
        console.info('queryCommandOutput.ConsumedCapacity:', queryCommandOutput.ConsumedCapacity)
        console.info('queryCommandOutput.LastEvaluatedKey:', queryCommandOutput.LastEvaluatedKey)
    }
    if (queryCommandOutput.Items) {
        for (const item of queryCommandOutput.Items) {
            const timing = item.SortKey.N
            const count = item.Count.N
            lines.push(timing + ' : ' + count)
        }
    }
    //exclusiveStartKey = queryCommandOutput.LastEvaluatedKey

    const plainText = lines.join("\n")

    return callExternalResponse(200, plainText)
}

function query(partitionKey: string) {
    return new QueryCommand({
        TableName: craftTableName,
        KeyConditionExpression: "PartitionKey = :key",
        ExpressionAttributeValues: {":key": {S: partitionKey}},
        ReturnConsumedCapacity: "TOTAL",
    })
}

function atomicCountUp(tableName: string, partitionKey: string, sortKey: number) {
    return new UpdateItemCommand({
        TableName: craftTableName,
        ReturnValues: "ALL_NEW",
        Key: {
            PartitionKey: {S: partitionKey},
            SortKey: {N: String(sortKey)},
        },
        UpdateExpression: 'ADD #count :q',
        ExpressionAttributeNames: {'#count': 'Count'},
        ExpressionAttributeValues: {':q': {N: '1'}},
    })
}
