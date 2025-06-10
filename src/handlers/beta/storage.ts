import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, storageTableName, region} from "./lib/env";
import {
    DynamoDBClient,
    PutItemCommand,
    GetItemCommand
} from "@aws-sdk/client-dynamodb";

const META_PUT = 'PUT'
const META_GET = 'GET'

type PutData = {
    key: string
    value: any
}
type GetData = {
    key: string
}

export default async function storage(event: APIGatewayProxyEventV2, data: any) {

    if (data[META_PUT]) {
        return await processPut(data[META_PUT] as PutData)
    }

    if (data[META_GET]) {
        return await processGet(data[META_GET] as GetData)
    }

    console.info('data:', data)

    return callExternalResponse(200, JSON.stringify({
        result: false,
    }))
}

function newClient() {
    return new DynamoDBClient({
        region: region,
    })
}

async function processPut(putData: PutData) {
    console.info('putData:', putData)

    const sendable = putData.value
    const serialized = JSON.stringify(sendable)

    const _ = await newClient().send(new PutItemCommand({
        TableName: storageTableName,
        Item: {
            Key: {S: putData.key},
            Value: {S: serialized},
        },
    }))
    return callExternalResponse(200, JSON.stringify({result: true}))
}

async function processGet(getData: GetData) {
    console.info('getData:', getData)

    const output = await newClient().send(new GetItemCommand({
        TableName: storageTableName,
        Key: {
            Key: {S: getData.key},
        },
    }))
    if (output.Item && output.Item.Value && output.Item.Value.S) {
        const serialized = output.Item.Value.S
        const sendable = JSON.parse(serialized)

        return callExternalResponse(200, JSON.stringify({
            result: true,
            key: getData.key,
            value: sendable,
        }))
    }
    return callExternalResponse(200, JSON.stringify({result: false}))
}
