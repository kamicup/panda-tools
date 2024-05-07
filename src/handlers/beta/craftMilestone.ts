import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, craftMilestoneTableName, debug, region} from "./lib/env";
import {DynamoDBClient, PutItemCommand, QueryCommand} from "@aws-sdk/client-dynamodb";

const META_MILESTONE = 'MILESTONE'

type MilestoneData = {
    owner: string
    pass: string
    input: undefined | {
        idfc: string
        name: string
        text: string
    }
}

export default async function craftMilestone(event: APIGatewayProxyEventV2, data: any) {

    if (data[META_MILESTONE]) {
        return await processMilestone(data[META_MILESTONE] as MilestoneData)
    }
    return errorResponse(META_MILESTONE + ' undefined')
}

const errorResponse = (message: string) => {
    return callExternalResponse(200, JSON.stringify({result: false, message: message}));
}

function newClient() {
    return new DynamoDBClient({
        region: region,
    })
}

async function processMilestone(data: MilestoneData) {
    if (debug) {
        console.info('data:', data)
    }

    const client = newClient()

    const partitionKey = data.owner + '_' + data.pass

    if (data.input) {
        const now = Date.now()
        const sortKey = now + '_' + data.input.idfc

        const output = await client.send(new PutItemCommand({
            TableName: craftMilestoneTableName,
            Item: {
                PartitionKey: {S: partitionKey},
                SortKey: {S: sortKey},
                Time: {N: String(now)},
                Idfc: {S: data.input.idfc},
                Name: {S: data.input.name},
                Text: {S: data.input.text},
            },
        }))
        if (debug) {
            console.info('output:', output)
        }
    }

    const output = await client.send(new QueryCommand({
        TableName: craftMilestoneTableName,
        KeyConditionExpression: "PartitionKey = :pk",
        ExpressionAttributeValues: {":pk": {S: partitionKey}},
        ScanIndexForward: false,
        ReturnConsumedCapacity: "TOTAL",
        Limit: 10,
    }))
    if (debug) {
        console.info('output:', output)
    }
    const items = []
    if (output.Items) {
        for (const item of output.Items) {
            items.push({
                time: Number(item.Time.N),
                idfc: item.Idfc.S,
                name: item.Name.S,
                text: item.Text.S,
            })
        }
    }

    return callExternalResponse(200, JSON.stringify({
        items: items,
    }))
}
