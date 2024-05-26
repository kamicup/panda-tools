import {APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda'
import pandaToolsTracker from "./beta/pandaToolsTracker";
import {debug} from "./beta/lib/env";
import pandaToolsTotp from "./beta/pandaToolsTotp";
import pandaToolsImagePanel from "./beta/pandaToolsImagePanel";
import craftAnalytics from "./beta/craftAnalytics";
import craftGate from "./beta/craftGate";
import craftMilestone from "./beta/craftMilestone";
import craftRespawn from "./beta/craftRespawn";

export async function handler(event: APIGatewayProxyEventV2, context: Context, callback: APIGatewayProxyCallbackV2)
    : Promise<APIGatewayProxyResultV2> {

    if (debug) {
        console.info('event:', event);
    }

    const body = JSON.parse(event.body!)
    if (debug) {
        console.info('body:', body)
    }
    const data = JSON.parse(body.request)

    if ('cmd' in data && data.cmd === 'craftAnalytics') {
        return await craftAnalytics(event, data)
    }
    if ('cmd' in data && data.cmd === 'craftGate') {
        return await craftGate(event, data)
    }
    if ('cmd' in data && data.cmd === 'craftRespawn') {
        return await craftRespawn(event, data)
    }
    if ('cmd' in data && data.cmd === 'craftMilestone') {
        return await craftMilestone(event, data)
    }
    if ('cmd' in data && data.cmd === 'totp') {
        return pandaToolsTotp(event, data)
    }
    if ('cmd' in data && data.cmd === 'imagePanel') {
        return await pandaToolsImagePanel(event, data)
    }
    return await pandaToolsTracker(event, data)
}
