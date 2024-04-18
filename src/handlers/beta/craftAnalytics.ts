import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, craftTableName, debug, region} from "./lib/env";
import {DynamoDBClient, BatchGetItemCommand, UpdateItemCommand} from "@aws-sdk/client-dynamodb";

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

    const output = await client.send(batchGet(partitionKey))
    if (output.Responses && output.Responses[craftTableName].length > 0) {
        return callExternalResponse(200, JSON.stringify({
            error: 'already exists',
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

    const items: Record<number, number> = {};

    const output = await client.send(batchGet(partitionKey))
    if (debug) {
        console.info('queryCommandOutput.ConsumedCapacity:', output.ConsumedCapacity)
    }
    if (output.Responses && output.Responses[craftTableName]) {
        for (const record of output.Responses[craftTableName]) {
            if (record.SortKey.N && record.Count.N) {
                const timing = Number.parseInt(record.SortKey.N)
                const count = Number.parseInt(record.Count.N)
                items[timing] = count
            }
        }
    }
    //exclusiveStartKey = queryCommandOutput.LastEvaluatedKey

    return callExternalResponse(200, JSON.stringify(items))
}

function batchGet(partitionKey: string) {

    //const filter = [1, 4, 9, 25, 64, 159, 441] // fibonacci ^2 -> 73.5 min

    // 計測間隔15秒を単位とし、それぞれの訪問者が、そのN回目の時点まで滞在していた累計数を表示します。
    // N : {1, 4, 9, 25, 64, 159, 441}
    // →　これによって、入室から｛15秒後／1分後／2分15秒後／6分15秒後／16分後／39分45秒後／110分15秒後｝まで滞在していたユーザーの累計人数を知ることができます。

    return new BatchGetItemCommand({
        RequestItems: {
            [craftTableName]: {
                Keys: [
                    {PartitionKey: {S: partitionKey}, SortKey: {N: "1"}},
                    {PartitionKey: {S: partitionKey}, SortKey: {N: "4"}},
                    {PartitionKey: {S: partitionKey}, SortKey: {N: "9"}},
                    {PartitionKey: {S: partitionKey}, SortKey: {N: "25"}},
                    {PartitionKey: {S: partitionKey}, SortKey: {N: "64"}},
                    {PartitionKey: {S: partitionKey}, SortKey: {N: "159"}},
                    {PartitionKey: {S: partitionKey}, SortKey: {N: "441"}},
                ]
            }
        },
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
