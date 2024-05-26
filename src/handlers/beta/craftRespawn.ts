import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, craftGateTableName, debug, region} from "./lib/env";
import {DynamoDBClient, GetItemCommand, UpdateItemCommand, PutItemCommand} from "@aws-sdk/client-dynamodb";

const META_RESPAWN = 'RESPAWN'

type RespawnData = {
    owner: string
    group: string
    player: string
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

export default async function craftRespawn(event: APIGatewayProxyEventV2, data: any) {

    if (data[META_RESPAWN]) {
        return await processRespawn(data[META_RESPAWN] as RespawnData)
    }
    return errorResponse(META_RESPAWN + ' undefined')
}

const errorResponse = (message: string) => {
    return callExternalResponse(200, JSON.stringify({result: false, message: message}));
}

function newClient() {
    return new DynamoDBClient({
        region: region,
    })
}

async function processRespawn(data: RespawnData) {
    if (debug) {
        console.info('data:', data)
    }
    const owner = data.owner
    const group = data.group
    const player = data.player

    const client = newClient()
    const partitionKey = owner + '_' + group
    const sortKey = 'individual_' + player

    const getItemOutput = await client.send(
        new GetItemCommand({
            TableName: craftGateTableName,
            Key: {
                PartitionKey: {S: partitionKey},
                SortKey: {S: sortKey},
            }
        })
    )
    if (debug) {
        console.info('getItemOutput:', getItemOutput)
    }
    if (getItemOutput.Item) {
        const posMap = getItemOutput.Item.Position.M!
        const rotMap = getItemOutput.Item.Rotation.M!
        const pos: Position = {
            x: Number(posMap.X.N),
            y: Number(posMap.Y.N),
            z: Number(posMap.Z.N),
        }
        const rot: Rotation = {
            x: Number(rotMap.X.N),
            y: Number(rotMap.Y.N),
            z: Number(rotMap.Z.N),
            w: Number(rotMap.W.N),
        }
        return callExternalResponse(200, JSON.stringify({
            result: true,
            position: pos,
            rotation: rot,
        }))
    }
    return errorResponse('Item not found')
}
