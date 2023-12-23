import {UpdateItemCommand} from "@aws-sdk/client-dynamodb";

export function atomicCountUp(tableName: string, wid: string, sensor: string) {
    return new UpdateItemCommand({
        TableName: tableName,
        ReturnValues: "ALL_NEW",
        Key: {
            PartitionKey: {S: 'CNT_' + wid},
            SortKey: {S: sensor},
        },
        UpdateExpression: 'ADD #count :q',
        ExpressionAttributeNames: {'#count': 'Count'},
        ExpressionAttributeValues: {':q': {N: '1'}},
    })
}
