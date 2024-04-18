import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, craftGateTableName, debug, region} from "./lib/env";
import {DynamoDBClient, GetItemCommand, UpdateItemCommand} from "@aws-sdk/client-dynamodb";

const META_REPORT = 'REPORT'

type ReportData = {
    owner: string
    group: string
    gate: string
    list?: string[]
}

export default async function craftGate(event: APIGatewayProxyEventV2, data: any) {

    if (data[META_REPORT]) {
        return await processReport(data[META_REPORT] as ReportData)
    }
    return errorResponse()
}

const errorResponse = () => {
    return callExternalResponse(200, JSON.stringify({result: false}));
}

function newClient() {
    return new DynamoDBClient({
        region: region,
    })
}

async function processReport(data: ReportData) {
    const owner = data.owner
    const group = data.group
    const gate = data.gate
    const list = data.list

    const client = newClient()
    const partitionKey = owner + '_' + group

    if (list) {
        for (const idfc of list) {
            const sortKey = 'gate_' + gate + '_' + idfc

            const updateItemOutput = await client.send(
                atomicCountUp(craftGateTableName, partitionKey, sortKey, 'Count')
            )
            if (debug) {
                console.info('updateItemOutput:', updateItemOutput)
            }
            const ownCount = updateItemOutput.Attributes?.Count?.N
            if (ownCount) {
                const n = Number(ownCount)
                if (n === 1) {
                    const output = await client.send(
                        atomicCountUp(craftGateTableName, partitionKey, 'gates', gate)
                    )
                    if (debug) {
                        console.info('output:', output)
                    }
                }
            }
        }
    }

    const getItemOutput = await client.send(
        new GetItemCommand({
            TableName: craftGateTableName,
            Key: {
                PartitionKey: {S: partitionKey},
                SortKey: {S: 'gates'},
            }
        })
    )
    if (debug) {
        console.info('getItemOutput:', getItemOutput)
    }
    if (getItemOutput.Item) {
        let max = 0
        let count = 0
        for (const itemKey in getItemOutput.Item) {
            const v = getItemOutput.Item[itemKey]
            if (v.N) {
                max = Math.max(max, Number(v.N))
            }
            if (itemKey === gate) {
                count = Number(v.N)
            }
        }
        return callExternalResponse(200, JSON.stringify({
            count: count,
            max: max,
        }))
    }
    return errorResponse()
}

function atomicCountUp(tableName: string, partitionKey: string, sortKey: string, attribute: string) {
    return new UpdateItemCommand({
        TableName: craftGateTableName,
        ReturnValues: "ALL_NEW",
        Key: {
            PartitionKey: {S: partitionKey},
            SortKey: {S: sortKey},
        },
        UpdateExpression: 'ADD #count :q',
        ExpressionAttributeNames: {'#count': attribute},
        ExpressionAttributeValues: {':q': {N: '1'}},
    })
}
