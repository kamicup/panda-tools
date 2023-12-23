import {AttributeValue, DynamoDBClient, PutItemCommand} from '@aws-sdk/client-dynamodb'
import {APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda'

// 環境変数
const region = process.env.DDB_REGION
const tableName = process.env.DDB_TABLE!
const debug = process.env.DEBUG === '1'

export async function handler(event: APIGatewayProxyEventV2, context: Context, callback: APIGatewayProxyCallbackV2)
    : Promise<APIGatewayProxyResultV2> {

    if (debug) {
        console.info('event:', event);
    }

    const time = event.requestContext.time
    const timeEpoch = event.requestContext.timeEpoch
    const sourceIp = event.requestContext.http.sourceIp
    const userAgent = event.requestContext.http.userAgent

    const wid = event.queryStringParameters?.wid
    const sensor = event.queryStringParameters?.sensor
    const timing = event.queryStringParameters?.timing
    const direct = event.queryStringParameters?.direct

    if (wid) {
        const client = new DynamoDBClient({
            region: region,
        })
        const item : Record<string, AttributeValue> = {
            "PartitionKey": {S: wid},
            "SortKey": {S: timeEpoch + "-" + sourceIp},
            "Received": {S: time}, // for human-readability
            "TimeEpoch": {N: String(timeEpoch)},
            "SourceIp": {S: sourceIp},
            "UserAgent": {S: userAgent},
            "Sensor": sensor ? {S: sensor} : {NULL: true},
            "Timing": timing ? {N: timing} : {NULL: true},
        }
        const putItemOutput = await client.send(new PutItemCommand({
            TableName: tableName,
            Item: item,
        }))
        if (debug) {
            console.info('putItemOutput:', putItemOutput)
        }
    }

    if (direct) {
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "video/mp4", //"application/octet-stream"
            },
            body: b64mp4(),
            isBase64Encoded: true,
        }
    } else {
        return {
            statusCode: 302,
            headers: {
                Location: "https://github.com/kamicup/panda-tools/raw/main/resources/h264-cbp.mp4",
                "Content-Type": "application/octet-stream",
            },
            body: "",
        }
    }
}

/**
 * resources/h264-cbp.mp4 の base64 エンコード表現
 */
const b64mp4 = () => {
    return "AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAvVtZGF0AAACcQYF//9t3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE2NCByMzA5NSBiYWVlNDAwIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAyMiAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTAgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0wIHdlaWdodHA9MCBrZXlpbnQ9MjUwIGtleWludF9taW49MTAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAaZYiED/EYoAAm+xwABHBjgACrlJyddddddeAAAAAGQZo4H+KgAAAABkGaVAf4qAAAAAZBmmA/xUAAAAAGQZqAP8VAAAAABkGaoD/FQAAAAAZBmsA/xUAAAAAGQZrgP8VAAAAABkGbADvFQAAAAAZBmyA3xUAAAAM9bW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAAA+gAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAmh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+gAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAADAAAAAwAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPoAAAAAAABAAAAAAHgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAAoAAAAKABVxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABi21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAUtzdGJsAAAAq3N0c2QAAAAAAAAAAQAAAJthdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAADAAMABIAAAASAAAAAAAAAABFExhdmM2MC4zLjEwMCBsaWJ4MjY0AAAAAAAAAAAAAAAAGP//AAAAMWF2Y0MBQsAK/+EAGWdCwArZDemoCBASAAADAAIAAAMAKB4kTJABAAVoy4PLIAAAABRidHJ0AAAAAAAAF2gAABdoAAAAGHN0dHMAAAAAAAAAAQAAAAoAAAQAAAAAFHN0c3MAAAAAAAAAAQAAAAEAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAoAAAABAAAAPHN0c3oAAAAAAAAAAAAAAAoAAAKTAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAFHN0Y28AAAAAAAAAAQAAADAAAABhdWR0YQAAAFltZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACxpbHN0AAAAJKl0b28AAAAcZGF0YQAAAAEAAAAATGF2ZjYwLjMuMTAw"
}
