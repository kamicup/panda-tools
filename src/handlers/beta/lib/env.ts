// 環境変数
const region = process.env.DDB_REGION
const tableName = process.env.DDB_TABLE!
const craftTableName = process.env.DDB_TABLE_CRAFT!
const craftGateTableName = process.env.DDB_TABLE_CRAFT_GATE!
const craftMilestoneTableName = process.env.DDB_TABLE_CRAFT_MILESTONE!
const debug = process.env.DEBUG === '1'
const verify = process.env.VERIFY_TOKEN!

function callExternalResponse(statusCode: number, response: string) {
    return {
        statusCode: statusCode,
        body: JSON.stringify({
            verify: verify,
            response: response,
        }),
    }
}

export {region, tableName, craftTableName, craftGateTableName, craftMilestoneTableName, debug, verify, callExternalResponse}
