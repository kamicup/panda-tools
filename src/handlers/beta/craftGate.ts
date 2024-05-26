import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, craftGateTableName, debug, region} from "./lib/env";
import {DynamoDBClient, GetItemCommand, UpdateItemCommand, PutItemCommand} from "@aws-sdk/client-dynamodb";

const META_REPORT = 'REPORT'

type ReportData = {
    owner: string
    group: string
    gate: string
    list?: string[]
    position?: Position,
    rotation?: Rotation,
}
type Position = {
    x: number
    y: number
    z: number
}
type Rotation = {
    x: number
    y: number
    z: number
    w: number
}

export default async function craftGate(event: APIGatewayProxyEventV2, data: any) {

    if (data[META_REPORT]) {
        return await processReport(data[META_REPORT] as ReportData)
    }
    return errorResponse(META_REPORT + ' undefined')
}

const errorResponse = (message: string) => {
    return callExternalResponse(200, JSON.stringify({result: false, message: message}));
}

function newClient() {
    return new DynamoDBClient({
        region: region,
    })
}

async function processReport(data: ReportData) {
    if (debug) {
        console.info('data:', data)
    }
    const owner = data.owner
    const group = data.group
    const gate = data.gate
    const list = data.list

    const client = newClient()
    const partitionKey = owner + '_' + group

    if (list) {
        for (const idfc of list) {
            // ゲート＆個人単位のカウントアップ
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
                    // ゲート単位のカウントアップ（各個人の初回のみ）
                    const output = await client.send(
                        atomicCountUp(craftGateTableName, partitionKey, 'gates', gate)
                    )
                    if (debug) {
                        console.info('output:', output)
                    }
                }
            }

            if (data.position && data.rotation) {
                //個人単位の最終通過ゲート記録
                const individualSortKey = 'individual_' + idfc
                const individualOutput = await client.send(
                    individualPut(craftGateTableName, partitionKey, individualSortKey, gate, data.position, data.rotation)
                )
                if (debug) {
                    console.log('individualOutput:', individualOutput)
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
    let max = 0
    let count = 0
    if (getItemOutput.Item) {
        for (const itemKey in getItemOutput.Item) {
            const v = getItemOutput.Item[itemKey]
            if (v.N) {
                max = Math.max(max, Number(v.N))
            }
            if (itemKey === gate) {
                count = Number(v.N)
            }
        }
    }
    return callExternalResponse(200, JSON.stringify({
        count: count,
        max: max,
    }))
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

function individualPut(tableName: string, partitionKey: string, sortKey: string, gate: string, position: Position, rotation: Rotation) {
    return new PutItemCommand({
        TableName: tableName,
        Item: {
            PartitionKey: {S: partitionKey},
            SortKey: {S: sortKey},
            Gate: {S: gate},
            Position: {M: {
                    X: {N: String(position.x)},
                    Y: {N: String(position.y)},
                    Z: {N: String(position.z)},
                }},
            Rotation: {M: {
                    X: {N: String(rotation.x)},
                    Y: {N: String(rotation.y)},
                    Z: {N: String(rotation.z)},
                    W: {N: String(rotation.w)},
                }},
        }
    });
}
