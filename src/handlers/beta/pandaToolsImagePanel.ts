import {APIGatewayProxyEventV2} from "aws-lambda";
import {callExternalResponse, debug} from "./lib/env";
import Jimp from "jimp";

export default async function pandaToolsImagePanel(event: APIGatewayProxyEventV2, data: any) {
    const LENGTH = 22

    const arg = data.arg //{url: argUrl},
    if (debug) {
        console.info('arg.url:', arg.url)
    }
    let url = arg.url
    if (!url || url === 'http://') {
        url = 'https://assets.st-note.com/production/uploads/images/86872191/profile_9fe8e505a6b16e6b1c38b047f66485dd.png?width=104&height=104&dpr=2&crop=1:1,smart'
    }

    const arr = new Uint8Array(LENGTH * LENGTH * 3 / 2)
    const arrSet = (uint8: number, i: number) => {
        const v = Math.floor(uint8 / 255 * 15)
        const idx = Math.floor(i / 2)
        arr[idx] |= (i % 2) ? v : v << 4
    }

    const image = await Jimp.read(url);
    image.resize(LENGTH, LENGTH, Jimp.RESIZE_HERMITE)
        .scan(0, 0, LENGTH, LENGTH, function (x, y, i) {
            // x, y is the position of this pixel on the image
            // idx is the position start position of this rgba tuple in the bitmap Buffer
            // this is the image
            const r = this.bitmap.data[i]
            const g = this.bitmap.data[i + 1]
            const b = this.bitmap.data[i + 2]
            const a = this.bitmap.data[i + 3]
            const p = (x + LENGTH * y) * 3
            arrSet(r, p)
            arrSet(g, p + 1)
            arrSet(b, p + 2)
        });
    const b64 = Buffer.from(arr).toString("base64");

    if (debug) {
        console.info('b64:', b64)
    }

    return callExternalResponse(200, b64);
}
