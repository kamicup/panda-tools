import {APIGatewayProxyEventV2} from "aws-lambda"
import {callExternalResponse, debug} from "./lib/env"
import totp from 'totp-generator'

export default function pandaToolsTotp(event: APIGatewayProxyEventV2, data: any) {
    const token = totp("SpreadPandasAcrossTheWorld");

    const result = data.arg === token

    if (debug) {
        console.info('data.arg:', data.arg)
        console.info('token:', token)
    }

    return callExternalResponse(200, JSON.stringify({
        result: result
    }));
}
