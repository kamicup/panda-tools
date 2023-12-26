import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, debug} from "./lib/env";
import Jimp from "jimp";

export default async function pandaToolsImagePanel(event: APIGatewayProxyEventV2, data: any) {

    const arg = data.arg //{url: argUrl, x: pos.x, y: pos.y},

    const arr = new Uint8Array(22*22*3/2)
    const arrSet = (uint8:number, i:number) => {
        const v = uint8 / 255 * 15
        if (i%2) {
            arr[i/2] |= v
        } else {
            arr[i/2] |= v<<4
        }
    }

    const image = await Jimp.read('https://assets.st-note.com/production/uploads/images/86872191/profile_9fe8e505a6b16e6b1c38b047f66485dd.png?width=104&height=104&dpr=2&crop=1:1,smart');
    image.resize(22,22).scan(0, 0, 22, 22, function (x, y, i) {
        // x, y is the position of this pixel on the image
        // idx is the position start position of this rgba tuple in the bitmap Buffer
        // this is the image
        const r = this.bitmap.data[i]
        const g = this.bitmap.data[i + 1]
        const b = this.bitmap.data[i + 2]
        const a = this.bitmap.data[i + 3]
        arrSet(r, i)
        arrSet(g, i+1)
        arrSet(b, i+2)
    });
    const b64 = Buffer.from(arr).toString("base64");

    if (debug) {
        console.info('b64:', b64)
    }

    return callExternalResponse(200, b64);
}
