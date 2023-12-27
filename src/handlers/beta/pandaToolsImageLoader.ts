import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse} from "./lib/env";

export default function pandaToolsImageLoader(event: APIGatewayProxyEventV2, data: any) {

    const url = data.arg

    return callExternalResponse(200, '');
}
