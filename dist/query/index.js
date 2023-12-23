/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = void 0;
var tslib_1 = __webpack_require__(717);
var util_1 = __webpack_require__(658);
var index_1 = __webpack_require__(79);
var AwsCrc32 = /** @class */ (function () {
    function AwsCrc32() {
        this.crc32 = new index_1.Crc32();
    }
    AwsCrc32.prototype.update = function (toHash) {
        if ((0, util_1.isEmptyData)(toHash))
            return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, (0, util_1.numToUint8)(this.crc32.digest())];
            });
        });
    };
    AwsCrc32.prototype.reset = function () {
        this.crc32 = new index_1.Crc32();
    };
    return AwsCrc32;
}());
exports.AwsCrc32 = AwsCrc32;
//# sourceMappingURL=aws_crc32.js.map

/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
var tslib_1 = __webpack_require__(717);
var util_1 = __webpack_require__(658);
function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ (function () {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function (data) {
        var e_1, _a;
        try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var byte = data_1_1.value;
                this.checksum =
                    (this.checksum >>> 8) ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Crc32.prototype.digest = function () {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}());
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,
];
var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
var aws_crc32_1 = __webpack_require__(446);
Object.defineProperty(exports, "AwsCrc32", ({ enumerable: true, get: function () { return aws_crc32_1.AwsCrc32; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __webpack_require__(84);
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer;
//# sourceMappingURL=convertToBuffer.js.map

/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __webpack_require__(106);
Object.defineProperty(exports, "convertToBuffer", ({ enumerable: true, get: function () { return convertToBuffer_1.convertToBuffer; } }));
var isEmptyData_1 = __webpack_require__(304);
Object.defineProperty(exports, "isEmptyData", ({ enumerable: true, get: function () { return isEmptyData_1.isEmptyData; } }));
var numToUint8_1 = __webpack_require__(174);
Object.defineProperty(exports, "numToUint8", ({ enumerable: true, get: function () { return numToUint8_1.numToUint8; } }));
var uint32ArrayFrom_1 = __webpack_require__(558);
Object.defineProperty(exports, "uint32ArrayFrom", ({ enumerable: true, get: function () { return uint32ArrayFrom_1.uint32ArrayFrom; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 304:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;
//# sourceMappingURL=isEmptyData.js.map

/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
exports.numToUint8 = numToUint8;
//# sourceMappingURL=numToUint8.js.map

/***/ }),

/***/ 558:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom;
//# sourceMappingURL=uint32ArrayFrom.js.map

/***/ }),

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $Command: () => (/* reexport */ Command),
  AttributeAction: () => (/* reexport */ AttributeAction),
  AttributeValue: () => (/* reexport */ AttributeValue),
  BackupInUseException: () => (/* reexport */ BackupInUseException),
  BackupNotFoundException: () => (/* reexport */ BackupNotFoundException),
  BackupStatus: () => (/* reexport */ BackupStatus),
  BackupType: () => (/* reexport */ BackupType),
  BackupTypeFilter: () => (/* reexport */ BackupTypeFilter),
  BatchExecuteStatementCommand: () => (/* reexport */ BatchExecuteStatementCommand),
  BatchGetItemCommand: () => (/* reexport */ BatchGetItemCommand),
  BatchStatementErrorCodeEnum: () => (/* reexport */ BatchStatementErrorCodeEnum),
  BatchWriteItemCommand: () => (/* reexport */ BatchWriteItemCommand),
  BillingMode: () => (/* reexport */ BillingMode),
  ComparisonOperator: () => (/* reexport */ ComparisonOperator),
  ConditionalCheckFailedException: () => (/* reexport */ ConditionalCheckFailedException),
  ConditionalOperator: () => (/* reexport */ ConditionalOperator),
  ContinuousBackupsStatus: () => (/* reexport */ ContinuousBackupsStatus),
  ContinuousBackupsUnavailableException: () => (/* reexport */ ContinuousBackupsUnavailableException),
  ContributorInsightsAction: () => (/* reexport */ ContributorInsightsAction),
  ContributorInsightsStatus: () => (/* reexport */ ContributorInsightsStatus),
  CreateBackupCommand: () => (/* reexport */ CreateBackupCommand),
  CreateGlobalTableCommand: () => (/* reexport */ CreateGlobalTableCommand),
  CreateTableCommand: () => (/* reexport */ CreateTableCommand),
  DeleteBackupCommand: () => (/* reexport */ DeleteBackupCommand),
  DeleteItemCommand: () => (/* reexport */ DeleteItemCommand),
  DeleteTableCommand: () => (/* reexport */ DeleteTableCommand),
  DescribeBackupCommand: () => (/* reexport */ DescribeBackupCommand),
  DescribeContinuousBackupsCommand: () => (/* reexport */ DescribeContinuousBackupsCommand),
  DescribeContributorInsightsCommand: () => (/* reexport */ DescribeContributorInsightsCommand),
  DescribeEndpointsCommand: () => (/* reexport */ DescribeEndpointsCommand),
  DescribeExportCommand: () => (/* reexport */ DescribeExportCommand),
  DescribeGlobalTableCommand: () => (/* reexport */ DescribeGlobalTableCommand),
  DescribeGlobalTableSettingsCommand: () => (/* reexport */ DescribeGlobalTableSettingsCommand),
  DescribeImportCommand: () => (/* reexport */ DescribeImportCommand),
  DescribeKinesisStreamingDestinationCommand: () => (/* reexport */ DescribeKinesisStreamingDestinationCommand),
  DescribeLimitsCommand: () => (/* reexport */ DescribeLimitsCommand),
  DescribeTableCommand: () => (/* reexport */ DescribeTableCommand),
  DescribeTableReplicaAutoScalingCommand: () => (/* reexport */ DescribeTableReplicaAutoScalingCommand),
  DescribeTimeToLiveCommand: () => (/* reexport */ DescribeTimeToLiveCommand),
  DestinationStatus: () => (/* reexport */ DestinationStatus),
  DisableKinesisStreamingDestinationCommand: () => (/* reexport */ DisableKinesisStreamingDestinationCommand),
  DuplicateItemException: () => (/* reexport */ DuplicateItemException),
  DynamoDB: () => (/* reexport */ DynamoDB),
  DynamoDBClient: () => (/* reexport */ DynamoDBClient),
  DynamoDBServiceException: () => (/* reexport */ DynamoDBServiceException),
  EnableKinesisStreamingDestinationCommand: () => (/* reexport */ EnableKinesisStreamingDestinationCommand),
  ExecuteStatementCommand: () => (/* reexport */ ExecuteStatementCommand),
  ExecuteTransactionCommand: () => (/* reexport */ ExecuteTransactionCommand),
  ExportConflictException: () => (/* reexport */ ExportConflictException),
  ExportFormat: () => (/* reexport */ ExportFormat),
  ExportNotFoundException: () => (/* reexport */ ExportNotFoundException),
  ExportStatus: () => (/* reexport */ ExportStatus),
  ExportTableToPointInTimeCommand: () => (/* reexport */ ExportTableToPointInTimeCommand),
  ExportType: () => (/* reexport */ ExportType),
  ExportViewType: () => (/* reexport */ ExportViewType),
  GetItemCommand: () => (/* reexport */ GetItemCommand),
  GlobalTableAlreadyExistsException: () => (/* reexport */ GlobalTableAlreadyExistsException),
  GlobalTableNotFoundException: () => (/* reexport */ GlobalTableNotFoundException),
  GlobalTableStatus: () => (/* reexport */ GlobalTableStatus),
  IdempotentParameterMismatchException: () => (/* reexport */ IdempotentParameterMismatchException),
  ImportConflictException: () => (/* reexport */ ImportConflictException),
  ImportNotFoundException: () => (/* reexport */ ImportNotFoundException),
  ImportStatus: () => (/* reexport */ ImportStatus),
  ImportTableCommand: () => (/* reexport */ ImportTableCommand),
  IndexNotFoundException: () => (/* reexport */ IndexNotFoundException),
  IndexStatus: () => (/* reexport */ IndexStatus),
  InputCompressionType: () => (/* reexport */ InputCompressionType),
  InputFormat: () => (/* reexport */ InputFormat),
  InternalServerError: () => (/* reexport */ InternalServerError),
  InvalidEndpointException: () => (/* reexport */ InvalidEndpointException),
  InvalidExportTimeException: () => (/* reexport */ InvalidExportTimeException),
  InvalidRestoreTimeException: () => (/* reexport */ InvalidRestoreTimeException),
  ItemCollectionSizeLimitExceededException: () => (/* reexport */ ItemCollectionSizeLimitExceededException),
  KeyType: () => (/* reexport */ KeyType),
  LimitExceededException: () => (/* reexport */ LimitExceededException),
  ListBackupsCommand: () => (/* reexport */ ListBackupsCommand),
  ListContributorInsightsCommand: () => (/* reexport */ ListContributorInsightsCommand),
  ListExportsCommand: () => (/* reexport */ ListExportsCommand),
  ListGlobalTablesCommand: () => (/* reexport */ ListGlobalTablesCommand),
  ListImportsCommand: () => (/* reexport */ ListImportsCommand),
  ListTablesCommand: () => (/* reexport */ ListTablesCommand),
  ListTagsOfResourceCommand: () => (/* reexport */ ListTagsOfResourceCommand),
  PointInTimeRecoveryStatus: () => (/* reexport */ PointInTimeRecoveryStatus),
  PointInTimeRecoveryUnavailableException: () => (/* reexport */ PointInTimeRecoveryUnavailableException),
  ProjectionType: () => (/* reexport */ ProjectionType),
  ProvisionedThroughputExceededException: () => (/* reexport */ ProvisionedThroughputExceededException),
  PutItemCommand: () => (/* reexport */ PutItemCommand),
  QueryCommand: () => (/* reexport */ QueryCommand),
  ReplicaAlreadyExistsException: () => (/* reexport */ ReplicaAlreadyExistsException),
  ReplicaNotFoundException: () => (/* reexport */ ReplicaNotFoundException),
  ReplicaStatus: () => (/* reexport */ ReplicaStatus),
  RequestLimitExceeded: () => (/* reexport */ RequestLimitExceeded),
  ResourceInUseException: () => (/* reexport */ ResourceInUseException),
  ResourceNotFoundException: () => (/* reexport */ ResourceNotFoundException),
  RestoreTableFromBackupCommand: () => (/* reexport */ RestoreTableFromBackupCommand),
  RestoreTableToPointInTimeCommand: () => (/* reexport */ RestoreTableToPointInTimeCommand),
  ReturnConsumedCapacity: () => (/* reexport */ ReturnConsumedCapacity),
  ReturnItemCollectionMetrics: () => (/* reexport */ ReturnItemCollectionMetrics),
  ReturnValue: () => (/* reexport */ ReturnValue),
  ReturnValuesOnConditionCheckFailure: () => (/* reexport */ ReturnValuesOnConditionCheckFailure),
  S3SseAlgorithm: () => (/* reexport */ S3SseAlgorithm),
  SSEStatus: () => (/* reexport */ SSEStatus),
  SSEType: () => (/* reexport */ SSEType),
  ScalarAttributeType: () => (/* reexport */ ScalarAttributeType),
  ScanCommand: () => (/* reexport */ ScanCommand),
  Select: () => (/* reexport */ Select),
  StreamViewType: () => (/* reexport */ StreamViewType),
  TableAlreadyExistsException: () => (/* reexport */ TableAlreadyExistsException),
  TableClass: () => (/* reexport */ TableClass),
  TableInUseException: () => (/* reexport */ TableInUseException),
  TableNotFoundException: () => (/* reexport */ TableNotFoundException),
  TableStatus: () => (/* reexport */ TableStatus),
  TagResourceCommand: () => (/* reexport */ TagResourceCommand),
  TimeToLiveStatus: () => (/* reexport */ TimeToLiveStatus),
  TransactGetItemsCommand: () => (/* reexport */ TransactGetItemsCommand),
  TransactWriteItemsCommand: () => (/* reexport */ TransactWriteItemsCommand),
  TransactionCanceledException: () => (/* reexport */ TransactionCanceledException),
  TransactionConflictException: () => (/* reexport */ TransactionConflictException),
  TransactionInProgressException: () => (/* reexport */ TransactionInProgressException),
  UntagResourceCommand: () => (/* reexport */ UntagResourceCommand),
  UpdateContinuousBackupsCommand: () => (/* reexport */ UpdateContinuousBackupsCommand),
  UpdateContributorInsightsCommand: () => (/* reexport */ UpdateContributorInsightsCommand),
  UpdateGlobalTableCommand: () => (/* reexport */ UpdateGlobalTableCommand),
  UpdateGlobalTableSettingsCommand: () => (/* reexport */ UpdateGlobalTableSettingsCommand),
  UpdateItemCommand: () => (/* reexport */ UpdateItemCommand),
  UpdateTableCommand: () => (/* reexport */ UpdateTableCommand),
  UpdateTableReplicaAutoScalingCommand: () => (/* reexport */ UpdateTableReplicaAutoScalingCommand),
  UpdateTimeToLiveCommand: () => (/* reexport */ UpdateTimeToLiveCommand),
  __Client: () => (/* reexport */ Client),
  paginateListContributorInsights: () => (/* reexport */ paginateListContributorInsights),
  paginateListExports: () => (/* reexport */ paginateListExports),
  paginateListImports: () => (/* reexport */ paginateListImports),
  paginateListTables: () => (/* reexport */ paginateListTables),
  paginateQuery: () => (/* reexport */ paginateQuery),
  paginateScan: () => (/* reexport */ paginateScan),
  waitForTableExists: () => (/* reexport */ waitForTableExists),
  waitForTableNotExists: () => (/* reexport */ waitForTableNotExists),
  waitUntilTableExists: () => (/* reexport */ waitUntilTableExists),
  waitUntilTableNotExists: () => (/* reexport */ waitUntilTableNotExists)
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/configurations.js
const ENV_ENDPOINT_DISCOVERY = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"];
const CONFIG_ENDPOINT_DISCOVERY = "endpoint_discovery_enabled";
const isFalsy = (value) => ["false", "0"].indexOf(value) >= 0;
const NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        for (let i = 0; i < ENV_ENDPOINT_DISCOVERY.length; i++) {
            const envKey = ENV_ENDPOINT_DISCOVERY[i];
            if (envKey in env) {
                const value = env[envKey];
                if (value === "") {
                    throw Error(`Environment variable ${envKey} can't be empty of undefined, got "${value}"`);
                }
                return !isFalsy(value);
            }
        }
    },
    configFileSelector: (profile) => {
        if (CONFIG_ENDPOINT_DISCOVERY in profile) {
            const value = profile[CONFIG_ENDPOINT_DISCOVERY];
            if (value === undefined) {
                throw Error(`Shared config entry ${CONFIG_ENDPOINT_DISCOVERY} can't be undefined, got "${value}"`);
            }
            return !isFalsy(value);
        }
    },
    default: undefined,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler(handler) {
            httpHandler = handler;
        },
        httpHandler() {
            return httpHandler;
        },
        updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
        },
    };
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/extensions/index.js


;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
(function (HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/auth/index.js







;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
(function (AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));
const checksum_getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.SHA256,
            checksumConstructor: () => runtimeConfig.sha256,
        });
    }
    if (runtimeConfig.md5 != undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.MD5,
            checksumConstructor: () => runtimeConfig.md5,
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const checksum_resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js

const getDefaultClientConfiguration = (runtimeConfig) => {
    return {
        ...getChecksumConfiguration(runtimeConfig),
    };
};
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...resolveChecksumRuntimeConfig(config),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/extensions/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/http.js
var http_FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(http_FieldPosition || (http_FieldPosition = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/middleware.js
const SMITHY_CONTEXT_KEY = "__smithy_context";

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
(function (IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
(function (RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/index.js





































;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/Field.js

class Field {
    constructor({ name, kind = FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
    }
    get() {
        return this.values;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/httpRequest.js
class httpRequest_HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new httpRequest_HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/httpResponse.js
class httpResponse_HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js









;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/updateDiscoveredEndpointInCache.js
const requestQueue = {};
const updateDiscoveredEndpointInCache_updateDiscoveredEndpointInCache = async (config, options) => new Promise((resolve, reject) => {
    const { endpointCache } = config;
    const { cacheKey, commandName, identifiers } = options;
    const endpoints = endpointCache.get(cacheKey);
    if (endpoints && endpoints.length === 1 && endpoints[0].Address === "") {
        if (options.isDiscoveredEndpointRequired) {
            if (!requestQueue[cacheKey])
                requestQueue[cacheKey] = [];
            requestQueue[cacheKey].push({ resolve, reject });
        }
        else {
            resolve();
        }
    }
    else if (endpoints && endpoints.length > 0) {
        resolve();
    }
    else {
        const placeholderEndpoints = [{ Address: "", CachePeriodInMinutes: 1 }];
        endpointCache.set(cacheKey, placeholderEndpoints);
        const command = new options.endpointDiscoveryCommandCtor({
            Operation: commandName.slice(0, -7),
            Identifiers: identifiers,
        });
        const handler = command.resolveMiddleware(options.clientStack, config, options.options);
        handler(command)
            .then((result) => {
            endpointCache.set(cacheKey, result.output.Endpoints);
            if (requestQueue[cacheKey]) {
                requestQueue[cacheKey].forEach(({ resolve }) => {
                    resolve();
                });
                delete requestQueue[cacheKey];
            }
            resolve();
        })
            .catch((error) => {
            endpointCache.delete(cacheKey);
            const errorToThrow = Object.assign(new Error(`The operation to discover endpoint failed.` +
                ` Please retry, or provide a custom endpoint and disable endpoint discovery to proceed.`), { reason: error });
            if (requestQueue[cacheKey]) {
                requestQueue[cacheKey].forEach(({ reject }) => {
                    reject(errorToThrow);
                });
                delete requestQueue[cacheKey];
            }
            if (options.isDiscoveredEndpointRequired) {
                reject(errorToThrow);
            }
            else {
                endpointCache.set(cacheKey, placeholderEndpoints);
                resolve();
            }
        });
    }
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/endpointDiscoveryMiddleware.js



const endpointDiscoveryMiddleware_endpointDiscoveryMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
    if (config.isCustomEndpoint) {
        if (config.isClientEndpointDiscoveryEnabled) {
            throw new Error(`Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.`);
        }
        return next(args);
    }
    const { endpointDiscoveryCommandCtor } = config;
    const { isDiscoveredEndpointRequired, identifiers } = middlewareConfig;
    const clientName = context.clientName;
    const commandName = context.commandName;
    const isEndpointDiscoveryEnabled = await config.endpointDiscoveryEnabled();
    const cacheKey = await getCacheKey(commandName, config, { identifiers });
    if (isDiscoveredEndpointRequired) {
        if (isEndpointDiscoveryEnabled === false) {
            throw new Error(`Endpoint Discovery is disabled but ${commandName} on ${clientName} requires it.` +
                ` Please check your configurations.`);
        }
        await updateDiscoveredEndpointInCache(config, {
            ...middlewareConfig,
            commandName,
            cacheKey,
            endpointDiscoveryCommandCtor,
        });
    }
    else if (isEndpointDiscoveryEnabled) {
        updateDiscoveredEndpointInCache(config, {
            ...middlewareConfig,
            commandName,
            cacheKey,
            endpointDiscoveryCommandCtor,
        });
    }
    const { request } = args;
    if (cacheKey && HttpRequest.isInstance(request)) {
        const endpoint = config.endpointCache.getEndpoint(cacheKey);
        if (endpoint) {
            request.hostname = endpoint;
        }
    }
    return next(args);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getEndpointDiscoveryPlugin.js

const endpointDiscoveryMiddlewareOptions = {
    name: "endpointDiscoveryMiddleware",
    step: "build",
    tags: ["ENDPOINT_DISCOVERY"],
    override: true,
};
const getEndpointDiscoveryPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (commandStack) => {
        commandStack.add(endpointDiscoveryMiddleware(pluginConfig, middlewareConfig), endpointDiscoveryMiddlewareOptions);
    },
});
const getEndpointDiscoveryRequiredPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (commandStack) => {
        commandStack.add(endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: true }), endpointDiscoveryMiddlewareOptions);
    },
});
const getEndpointDiscoveryOptionalPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (commandStack) => {
        commandStack.add(endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: false }), endpointDiscoveryMiddlewareOptions);
    },
});

// EXTERNAL MODULE: ./node_modules/mnemonist/lru-cache.js
var lru_cache = __webpack_require__(675);
var lru_cache_default = /*#__PURE__*/__webpack_require__.n(lru_cache);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js

class EndpointCache {
    constructor(capacity) {
        this.cache = new (lru_cache_default())(capacity);
    }
    getEndpoint(key) {
        const endpointsWithExpiry = this.get(key);
        if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
            return undefined;
        }
        const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
        return endpoints[Math.floor(Math.random() * endpoints.length)];
    }
    get(key) {
        if (!this.has(key)) {
            return;
        }
        const value = this.cache.get(key);
        if (!value) {
            return;
        }
        const now = Date.now();
        const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
        if (endpointsWithExpiry.length === 0) {
            this.delete(key);
            return undefined;
        }
        return endpointsWithExpiry;
    }
    set(key, endpoints) {
        const now = Date.now();
        this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
            Address,
            Expires: now + CachePeriodInMinutes * 60 * 1000,
        })));
    }
    delete(key) {
        this.cache.set(key, []);
    }
    has(key) {
        if (!this.cache.has(key)) {
            return false;
        }
        const endpoints = this.cache.peek(key);
        if (!endpoints) {
            return false;
        }
        return endpoints.length > 0;
    }
    clear() {
        this.cache.clear();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/endpoint-cache/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js

const resolveEndpointDiscoveryConfig = (input, { endpointDiscoveryCommandCtor }) => ({
    ...input,
    endpointDiscoveryCommandCtor,
    endpointCache: new EndpointCache(input.endpointCacheSize ?? 1000),
    endpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== undefined
        ? () => Promise.resolve(input.endpointDiscoveryEnabled)
        : input.endpointDiscoveryEnabledProvider,
    isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== undefined,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!httpRequest_HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    }
    else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
            host += `:${request.port}`;
        request.headers["host"] = host;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!httpRequest_HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
const addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/memoize.js
const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};

// EXTERNAL MODULE: ./node_modules/@aws-crypto/crc32/build/index.js
var build = __webpack_require__(79);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-hex-encoding/dist-es/index.js
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/Int64.js

class Int64 {
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js


class HeaderMarshaller_HeaderMarshaller {
    constructor(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
    parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
                case 0:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case 1:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case 2:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case 3:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case 4:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case 5:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),
                    };
                    position += 8;
                    break;
                case 6:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),
                    };
                    position += binaryLength;
                    break;
                case 7:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),
                    };
                    position += 8;
                    break;
                case 9:
                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`,
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }
        return out;
    }
}
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js

const PRELUDE_MEMBER_LENGTH = 4;
const PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
const CHECKSUM_LENGTH = 4;
const MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage_splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH)),
    };
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js



class EventStreamCodec {
    constructor(toUtf8, fromUtf8) {
        this.headerMarshaller = new HeaderMarshaller(toUtf8, fromUtf8);
        this.messageBuffer = [];
        this.isEndOfStream = false;
    }
    feed(message) {
        this.messageBuffer.push(this.decode(message));
    }
    endOfStream() {
        this.isEndOfStream = true;
    }
    getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessage() {
                return message;
            },
            isEndOfStream() {
                return isEndOfStream;
            },
        };
    }
    getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessages() {
                return messages;
            },
            isEndOfStream() {
                return isEndOfStream;
            },
        };
    }
    encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    }
    decode(message) {
        const { headers, body } = splitMessage(message);
        return { headers: this.headerMarshaller.parse(headers), body };
    }
    formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
class MessageDecoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const bytes of this.options.inputStream) {
            const decoded = this.options.decoder.decode(bytes);
            yield decoded;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
class MessageEncoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const msg of this.options.messageStream) {
            const encoded = this.options.encoder.encode(msg);
            yield encoded;
        }
        if (this.options.includeEndFrame) {
            yield new Uint8Array(0);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
class SmithyMessageDecoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const message of this.options.messageStream) {
            const deserialized = await this.options.deserializer(message);
            if (deserialized === undefined)
                continue;
            yield deserialized;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
class SmithyMessageEncoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const chunk of this.options.inputStream) {
            const payloadBuf = this.options.serializer(chunk);
            yield payloadBuf;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/eventstream-codec/dist-es/index.js









;// CONCATENATED MODULE: ./node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js

const getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

;// CONCATENATED MODULE: ./node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
const normalizeProvider_normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/is-array-buffer/dist-es/index.js
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

;// CONCATENATED MODULE: external "buffer"
const external_buffer_namespaceObject = require("buffer");
;// CONCATENATED MODULE: ./node_modules/@smithy/util-buffer-from/dist-es/index.js


const dist_es_fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return external_buffer_namespaceObject.Buffer.from(input, offset, length);
};
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? external_buffer_namespaceObject.Buffer.from(input, encoding) : external_buffer_namespaceObject.Buffer.from(input);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js

const fromUtf8 = (input) => {
    const buf = fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/toUtf8.js

const toUtf8 = (input) => dist_es_fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");

;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/constants.js
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = (/* unused pure expression or super */ null && ([/^proxy-/i, /^sec-/i]));
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js



const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(toUint8Array(data));
    return hash.digest();
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js


const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .reduce((encoded, value) => encoded.concat([`${escapeUri(key)}=${escapeUri(value)}`]), [])
                .sort()
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js




const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/headerUtil.js
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneRequest_cloneQuery(query) : undefined,
});
const cloneRequest_cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/prepareRequest.js


const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/utilDate.js
const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/SignatureV4.js













class SignatureV4_SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.headerMarshaller = new HeaderMarshaller_HeaderMarshaller(toUtf8, fromUtf8);
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider_normalizeProvider(region);
        this.credentialProvider = normalizeProvider_normalizeProvider(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerMarshaller.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] =
            `${ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/index.js








;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js



const CREDENTIAL_EXPIRE_WINDOW = 300000;
const resolveAwsAuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider_normalizeProvider(input.signer);
    }
    else if (input.regionInfoProvider) {
        signer = () => normalizeProvider_normalizeProvider(input.region)()
            .then(async (region) => [
            (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            input.signingRegion = input.signingRegion || signingRegion || region;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || SignatureV4_SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: input.signingName || input.defaultSigningName,
                signingRegion: await normalizeProvider_normalizeProvider(input.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            input.signingRegion = input.signingRegion || signingRegion;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || SignatureV4_SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const resolveSigV4AuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else {
        signer = normalizeProvider(new SignatureV4({
            credentials: normalizedCreds,
            region: input.region,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
        }));
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const normalizeCredentialProvider = (credentials) => {
    if (typeof credentials === "function") {
        return memoize(credentials, (credentials) => credentials.expiration !== undefined &&
            credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials) => credentials.expiration !== undefined);
    }
    return normalizeProvider_normalizeProvider(credentials);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js



const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!httpRequest_HttpRequest.isInstance(args.request))
        return next(args);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;
    const signer = await options.signer(authScheme);
    let signedRequest;
    const signingOptions = {
        signingDate: getSkewCorrectedDate(options.systemClockOffset),
        signingRegion: multiRegionOverride || context["signing_region"],
        signingService: context["signing_service"],
    };
    if (context.s3ExpressIdentity) {
        const sigV4MultiRegion = signer;
        signedRequest = await sigV4MultiRegion.signWithCredentials(args.request, context.s3ExpressIdentity, signingOptions);
        if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
            throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
        }
    }
    else {
        signedRequest = await signer.sign(args.request, signingOptions);
    }
    const output = await next({
        ...args,
        request: signedRequest,
    }).catch((error) => {
        const serverTime = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
            options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader(output.response);
    if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
    }
    return output;
};
const getDateHeader = (response) => httpResponse_HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
const awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
});
const getSigV4AuthPlugin = (/* unused pure expression or super */ null && (getAwsAuthPlugin));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
const customEndpointFunctions = {};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
const debugId = "endpoints";

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
const booleanEquals = (value1, value2) => value1 === value2;

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js


const getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
const isSet = (value) => value != null;

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/not.js
const not = (value) => !value;

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js


const DEFAULT_PORTS = {
    [EndpointURLScheme.HTTP]: 80,
    [EndpointURLScheme.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(EndpointURLScheme).includes(scheme)) {
        return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
const stringEquals = (value1, value2) => value1 === value2;

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/index.js










;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js

const endpointFunctions = {
    booleanEquals: booleanEquals,
    getAttr: getAttr,
    isSet: isSet,
    isValidHostLabel: isValidHostLabel,
    not: not,
    parseURL: parseURL,
    stringEquals: stringEquals,
    substring: substring,
    uriEncode: uriEncode,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        }
        else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js




const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
    }
    else if (obj["fn"]) {
        return callFunction(obj, options);
    }
    else if (obj["ref"]) {
        return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js



const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
    const fnSegments = fn.split(".");
    if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
    }
    return endpointFunctions[fn](...evaluatedArgs);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js



const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(fnArgs, options);
    options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js


const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js


const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js



const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return evaluateTemplate(property, options);
        case "object":
            if (property === null) {
                throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return getEndpointProperties(property, options);
        case "boolean":
            return property;
        default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: getEndpointProperty(propertyVal, options),
}), {});

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js


const getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js





const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: getEndpointHeaders(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: getEndpointProperties(properties, endpointRuleOptions),
        }),
        url: getEndpointUrl(url, endpointRuleOptions),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js



const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js


const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js




const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = evaluateEndpointRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            evaluateErrorRule(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = evaluateTreeRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new EndpointError(`Rules evaluation failed`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js



const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
    if (options.endpointParams?.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/index.js






;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js


const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!isValidHostLabel(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if (isIpAddress(value)) {
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
const parseArn = (value) => {
    const segments = value.split(":");
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourceId] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourceId[0] === "")
        return null;
    return {
        partition,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
const partitions_namespaceObject = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}');
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js

let selectedPartitionsInfo = partitions_namespaceObject;
let selectedUserAgentPrefix = "";
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
const useDefaultPartitionInfo = () => {
    setPartitionInfo(partitionsInfo, "");
};
const getUserAgentPrefix = () => selectedUserAgentPrefix;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/aws.js




const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: isVirtualHostableS3Bucket,
    parseArn: parseArn,
    partition: partition,
};
customEndpointFunctions.aws = awsEndpointFunctions;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js







;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js






;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
const UA_ESCAPE_CHAR = "-";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js



const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!httpRequest_HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const prefix = getUserAgentPrefix();
    const sdkUserAgentValue = (prefix ? [prefix] : [])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT]
                ? `${headers[USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0]
        .split(UA_NAME_SEPARATOR)
        .map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR))
        .join(UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
        switch (index) {
            case 0:
                return item;
            case 1:
                return `${acc}/${item}`;
            default:
                return `${acc}#${item}`;
        }
    }, "");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-config-provider/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG),
    default: false,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const DEFAULT_USE_FIPS_ENDPOINT = false;
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
    default: false,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js

const resolveCustomEndpointsConfig = (input) => {
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js


const resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = normalizeProvider(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: endpoint
            ? normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js





;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js

const getRealRegion = (region) => isFipsRegion(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return getRealRegion(region);
            }
            const providedRegion = await region();
            return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-content-length/dist-es/index.js

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (httpRequest_HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = [arn, partition, service, account, typeOrId].filter(Boolean).length === 5;
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/ProviderError.js
class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/chain.js

const chain = (...providers) => async () => {
    if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
    }
    let lastProviderError;
    for (const provider of providers) {
        try {
            const credentials = await provider();
            return credentials;
        }
        catch (err) {
            lastProviderError = err;
            if (err?.tryNextLink) {
                continue;
            }
            throw err;
        }
    }
    throw lastProviderError;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js

class CredentialsProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/fromEnv.js

const fromEnv = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};

;// CONCATENATED MODULE: external "os"
const external_os_namespaceObject = require("os");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js


const homeDirCache = {};
const getHomeDirCacheKey = () => {
    if (process && process.geteuid) {
        return `${process.geteuid()}`;
    }
    return "DEFAULT";
};
const getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${external_path_namespaceObject.sep}` } = process.env;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
    const homeDirCacheKey = getHomeDirCacheKey();
    if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0,external_os_namespaceObject.homedir)();
    return homeDirCache[homeDirCacheKey];
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
const ENV_PROFILE = "AWS_PROFILE";
const DEFAULT_PROFILE = "default";
const getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(663);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js



const getSSOTokenFilepath = (id) => {
    const hasher = (0,external_crypto_.createHash)("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return (0,external_path_namespaceObject.join)(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
};

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js


const { readFile } = external_fs_namespaceObject.promises;
const getSSOTokenFromFile = async (id) => {
    const ssoTokenFilepath = getSSOTokenFilepath(id);
    const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js


const getConfigData = (data) => Object.entries(data)
    .filter(([key]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    if (indexOfSeparator === -1) {
        return false;
    }
    return Object.values(IniSectionType).includes(key.substring(0, indexOfSeparator));
})
    .reduce((acc, [key, value]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    const updatedKey = key.substring(0, indexOfSeparator) === IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
    acc[updatedKey] = value;
    return acc;
}, {
    ...(data.default && { default: data.default }),
});

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js


const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || (0,external_path_namespaceObject.join)(getHomeDir(), ".aws", "config");

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js


const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || (0,external_path_namespaceObject.join)(getHomeDir(), ".aws", "credentials");

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js


const prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    let currentSubSection;
    for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
            currentSection = undefined;
            currentSubSection = undefined;
            const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
            const matches = prefixKeyRegex.exec(sectionName);
            if (matches) {
                const [, prefix, , name] = matches;
                if (Object.values(IniSectionType).includes(prefix)) {
                    currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
                }
            }
            else {
                currentSection = sectionName;
            }
            if (profileNameBlockList.includes(sectionName)) {
                throw new Error(`Found invalid profile name "${sectionName}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = trimmedLine.indexOf("=");
            if (![0, -1].includes(indexOfEqualsSign)) {
                const [name, value] = [
                    trimmedLine.substring(0, indexOfEqualsSign).trim(),
                    trimmedLine.substring(indexOfEqualsSign + 1).trim(),
                ];
                if (value === "") {
                    currentSubSection = name;
                }
                else {
                    if (currentSubSection && iniLine.trimStart() === iniLine) {
                        currentSubSection = undefined;
                    }
                    map[currentSection] = map[currentSection] || {};
                    const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
                    map[currentSection][key] = value;
                }
            }
        }
    }
    return map;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js

const { readFile: slurpFile_readFile } = external_fs_namespaceObject.promises;
const filePromisesHash = {};
const slurpFile = (path, options) => {
    if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = slurpFile_readFile(path, "utf8");
    }
    return filePromisesHash[path];
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js





const swallowError = () => ({});
const CONFIG_PREFIX_SEPARATOR = ".";
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const parsedFiles = await Promise.all([
        slurpFile(configFilepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .then(getConfigData)
            .catch(swallowError),
        slurpFile(filepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js


const getSsoSessionData = (data) => Object.entries(data)
    .filter(([key]) => key.startsWith(IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR))
    .reduce((acc, [key, value]) => ({ ...acc, [key.split(CONFIG_PREFIX_SEPARATOR)[1]]: value }), {});

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js




const loadSsoSessionData_swallowError = () => ({});
const loadSsoSessionData = async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath())
    .then(parseIni)
    .then(getSsoSessionData)
    .catch(loadSsoSessionData_swallowError);

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
const mergeConfigFiles = (...files) => {
    const merged = {};
    for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
            if (merged[key] !== undefined) {
                Object.assign(merged[key], values);
            }
            else {
                merged[key] = values;
            }
        }
    }
    return merged;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js


const parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js









;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js


const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = getProfileName(init);
    const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new CredentialsProviderError(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/fromStatic.js
const fromStatic = (staticValue) => () => Promise.resolve(staticValue);

;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/fromStatic.js

const isFunction = (func) => typeof func === "function";
const fromStatic_fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue);

;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/configLoader.js




const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic_fromStatic(defaultValue)));

;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
const getEndpointUrlConfig = (serviceId) => ({
    environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
            return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    configFileSelector: (profile, config) => {
        if (config && profile.services) {
            const servicesSection = config[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
            if (servicesSection) {
                const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
                const endpointUrl = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
                if (endpointUrl)
                    return endpointUrl;
            }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    default: undefined,
});

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js


const getEndpointFromConfig = async (serviceId) => loadConfig(getEndpointUrlConfig(serviceId))();

;// CONCATENATED MODULE: ./node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}

;// CONCATENATED MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = parseQueryString(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return parseUrl(endpoint.url);
        }
        return endpoint;
    }
    return parseUrl(endpoint);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js




const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    if (!clientConfig.endpoint) {
        const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
        if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
    }
    return endpointParams;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js


const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        const endpoint = await getEndpointFromInstructions(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = getSmithyContext(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
                httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                    signing_region: authScheme.signingRegion,
                    signingRegion: authScheme.signingRegion,
                    signing_service: authScheme.signingName,
                    signingName: authScheme.signingName,
                    signingRegionSet: authScheme.signingRegionSet,
                }, authScheme.properties);
            }
        }
        return next({
            ...args,
        });
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
        }
        throw error;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpoint = context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js


const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        },
    };
}

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js


const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js


const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider_normalizeProvider(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider_normalizeProvider(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider_normalizeProvider(input.useFipsEndpoint ?? false),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/index.js






;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/config.js
var config_RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(config_RETRY_MODES || (config_RETRY_MODES = {}));
const config_DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = config_RETRY_MODES.STANDARD;

;// CONCATENATED MODULE: ./node_modules/@smithy/service-error-classification/dist-es/constants.js
const constants_CLOCK_SKEW_ERROR_CODES = (/* unused pure expression or super */ null && ([
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
]));
const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

;// CONCATENATED MODULE: ./node_modules/@smithy/service-error-classification/dist-es/index.js

const isRetryableByTrait = (error) => error.$retryable !== undefined;
const isClockSkewError = (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name);
const dist_es_isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error) => TRANSIENT_ERROR_CODES.includes(error.name) ||
    NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js

class DefaultRateLimiter_DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (dist_es_isThrottlingError(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/constants.js
const constants_DEFAULT_RETRY_DELAY_BASE = 100;
const constants_MAXIMUM_RETRY_DELAY = 20 * 1000;
const constants_THROTTLING_RETRY_DELAY_BASE = 500;
const constants_INITIAL_RETRY_TOKENS = 500;
const constants_RETRY_COST = 5;
const constants_TIMEOUT_RETRY_COST = 10;
const constants_NO_RETRY_INCREMENT = 1;
const constants_INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const constants_REQUEST_HEADER = "amz-sdk-request";

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js

const getDefaultRetryBackoffStrategy = () => {
    let delayBase = constants_DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(constants_MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js

const createDefaultRetryToken = ({ retryDelay, retryCount, retryCost, }) => {
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => Math.min(constants_MAXIMUM_RETRY_DELAY, retryDelay);
    const getRetryCost = () => retryCost;
    return {
        getRetryCount,
        getRetryDelay,
        getRetryCost,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js




class StandardRetryStrategy_StandardRetryStrategy {
    constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = config_RETRY_MODES.STANDARD;
        this.capacity = constants_INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
            retryDelay: constants_DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0,
        });
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? constants_THROTTLING_RETRY_DELAY_BASE : constants_DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint
                ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
                : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return createDefaultRetryToken({
                retryDelay,
                retryCount: token.getRetryCount() + 1,
                retryCost: capacityCost,
            });
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.capacity = Math.max(constants_INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? constants_NO_RETRY_INCREMENT));
    }
    getCapacity() {
        return this.capacity;
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${config_DEFAULT_MAX_ATTEMPTS}`);
            return config_DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return (attempts < maxAttempts &&
            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? constants_TIMEOUT_RETRY_COST : constants_RETRY_COST;
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js



class AdaptiveRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter_DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy_StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js


class ConfiguredRetryStrategy extends (/* unused pure expression or super */ null && (StandardRetryStrategy)) {
    constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        }
        else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/index.js








;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js

const defaultRetryQuota_getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = options?.noRetryIncrement ?? NO_RETRY_INCREMENT;
    const retryCost = options?.retryCost ?? RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/delayDecider.js

const delayDecider_defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js








class dist_es_StandardRetryStrategy_StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.STANDARD;
        this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (HttpRequest.isInstance(request)) {
            request.headers[INVOCATION_ID_HEADER] = v4();
        }
        while (true) {
            try {
                if (HttpRequest.isInstance(request)) {
                    request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options?.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options?.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = asSdkError(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delayFromDecider = this.delayDecider(isThrottlingError(err) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE, attempts);
                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
const getDelayFromRetryAfterHeader = (response) => {
    if (!HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1000;
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate.getTime() - Date.now();
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js


class AdaptiveRetryStrategy_AdaptiveRetryStrategy extends (/* unused pure expression or super */ null && (StandardRetryStrategy)) {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.mode = RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/configurations.js


const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: config_DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = normalizeProvider_normalizeProvider(input.maxAttempts ?? config_DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await normalizeProvider_normalizeProvider(input.retryMode)();
            if (retryMode === config_RETRY_MODES.ADAPTIVE) {
                return new AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy_StandardRetryStrategy(maxAttempts);
        },
    };
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: DEFAULT_RETRY_MODE,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js


const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
        delete request.headers[INVOCATION_ID_HEADER];
        delete request.headers[REQUEST_HEADER];
    }
    return next(args);
};
const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
const getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases) {
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` +
                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +
                        `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` +
                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +
                                `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` +
                                `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` +
                                `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                                `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` +
                                `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases) {
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                const step = mw.step ??
                    mw.relation +
                        " " +
                        mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
                identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-stack/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/client.js

class Client {
    constructor(config) {
        this.middlewareStack = constructStack();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-base64/dist-es/fromBase64.js

const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input) => {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = fromString(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-base64/dist-es/toBase64.js

const toBase64 = (input) => dist_es_fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");

;// CONCATENATED MODULE: ./node_modules/@smithy/util-base64/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/blob/transforms.js



function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
        return toBase64(payload);
    }
    return toUtf8(payload);
}
function transformFromString(str, encoding) {
    if (encoding === "base64") {
        return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
    }
    return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js

class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
            case "string":
                return transformFromString(source, encoding);
            default:
                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
    }
}

;// CONCATENATED MODULE: external "stream"
const external_stream_namespaceObject = require("stream");
;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js

const getAwsChunkedEncodingStream = (readableStream, options) => {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined &&
        checksumAlgorithmFn !== undefined &&
        checksumLocationName !== undefined &&
        streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
    const awsChunkedEncodingStream = new Readable({ read: () => { } });
    readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r\n`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
    });
    readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r\n`);
        if (checksumRequired) {
            const checksum = base64Encoder(await digest);
            awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r\n`);
            awsChunkedEncodingStream.push(`\r\n`);
        }
        awsChunkedEncodingStream.push(null);
    });
    return awsChunkedEncodingStream;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/querystring-builder/dist-es/index.js

function dist_es_buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = escapeUri(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${escapeUri(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${escapeUri(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}

;// CONCATENATED MODULE: external "http"
const external_http_namespaceObject = require("http");
;// CONCATENATED MODULE: external "https"
const external_https_namespaceObject = require("https");
;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/constants.js
const constants_NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
const get_transformed_headers_getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};


;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    const timeoutId = setTimeout(() => {
        request.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError",
        }));
    }, timeoutInMs);
    request.on("socket", (socket) => {
        if (socket.connecting) {
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
        else {
            clearTimeout(timeoutId);
        }
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
const setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }) => {
    if (keepAlive !== true) {
        return;
    }
    request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/write-request-body.js

const MIN_WAIT_TIME = 1000;
async function write_request_body_writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
    const headers = request.headers ?? {};
    const expect = headers["Expect"] || headers["expect"];
    let timeoutId = -1;
    let hasError = false;
    if (expect === "100-continue") {
        await Promise.race([
            new Promise((resolve) => {
                timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
            }),
            new Promise((resolve) => {
                httpRequest.on("continue", () => {
                    clearTimeout(timeoutId);
                    resolve();
                });
                httpRequest.on("error", () => {
                    hasError = true;
                    clearTimeout(timeoutId);
                    resolve();
                });
            }),
        ]);
    }
    if (!hasError) {
        writeBody(httpRequest, request.body);
    }
}
function writeBody(httpRequest, body) {
    if (body instanceof external_stream_namespaceObject.Readable) {
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js










const DEFAULT_REQUEST_TIMEOUT = 0;
class NodeHttpHandler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttpHandler(instanceOrOptions);
    }
    constructor(options) {
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            requestTimeout: requestTimeout ?? socketTimeout,
            httpAgent: httpAgent || new external_http_namespaceObject.Agent({ keepAlive, maxSockets }),
            httpsAgent: httpsAgent || new external_https_namespaceObject.Agent({ keepAlive, maxSockets }),
        };
    }
    destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        return new Promise((_resolve, _reject) => {
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal?.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request.protocol === "https:";
            const queryString = dist_es_buildQueryString(request.query || {});
            let auth = undefined;
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}`;
            }
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path,
                port: request.port,
                agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
                auth,
            };
            const requestFunc = isSSL ? external_https_namespaceObject.request : external_http_namespaceObject.request;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new httpResponse_HttpResponse({
                    statusCode: res.statusCode || -1,
                    reason: res.statusMessage,
                    headers: get_transformed_headers_getTransformedHeaders(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (constants_NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            setConnectionTimeout(req, reject, this.config.connectionTimeout);
            setSocketTimeout(req, reject, this.config.requestTimeout);
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.abort();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            const httpAgent = nodeHttpsOptions.agent;
            if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
                setSocketKeepAlive(req, {
                    keepAlive: httpAgent.keepAlive,
                    keepAliveMsecs: httpAgent.keepAliveMsecs,
                });
            }
            writeRequestBodyPromise = write_request_body_writeRequestBody(req, request, this.config.requestTimeout).catch(_reject);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}

;// CONCATENATED MODULE: external "http2"
const external_http2_namespaceObject = require("http2");
;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
class node_http2_connection_pool_NodeHttp2ConnectionPool {
    constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions ?? [];
    }
    poll() {
        if (this.sessions.length > 0) {
            return this.sessions.shift();
        }
    }
    offerLast(session) {
        this.sessions.push(session);
    }
    contains(session) {
        return this.sessions.includes(session);
    }
    remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
    }
    [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
    }
    destroy(connection) {
        for (const session of this.sessions) {
            if (session === connection) {
                if (!session.destroyed) {
                    session.destroy();
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js


class node_http2_connection_manager_NodeHttp2ConnectionManager {
    constructor(config) {
        this.sessionCache = new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrency must be greater than zero.");
        }
    }
    lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
            const existingSession = existingPool.poll();
            if (existingSession && !this.config.disableConcurrency) {
                return existingSession;
            }
        }
        const session = http2.connect(url);
        if (this.config.maxConcurrency) {
            session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
                if (err) {
                    throw new Error("Fail to set maxConcurrentStreams to " +
                        this.config.maxConcurrency +
                        "when creating new session for " +
                        requestContext.destination.toString());
                }
            });
        }
        session.unref();
        const destroySessionCb = () => {
            session.destroy();
            this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
    }
    deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
            return;
        }
        if (!existingConnectionPool.contains(session)) {
            return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
    }
    release(requestContext, session) {
        const cacheKey = this.getUrlString(requestContext);
        this.sessionCache.get(cacheKey)?.offerLast(session);
    }
    destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
            for (const session of connectionPool) {
                if (!session.destroyed) {
                    session.destroy();
                }
                connectionPool.remove(session);
            }
            this.sessionCache.delete(key);
        }
    }
    setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
    }
    setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
    }
    getUrlString(request) {
        return request.destination.toString();
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js






class NodeHttp2Handler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttp2Handler(instanceOrOptions);
    }
    constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((opts) => {
                    resolve(opts || {});
                })
                    .catch(reject);
            }
            else {
                resolve(options || {});
            }
        });
    }
    destroy() {
        this.connectionManager.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
            this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
            if (this.config.maxConcurrentStreams) {
                this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
            }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
            let fulfilled = false;
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (abortSignal?.aborted) {
                fulfilled = true;
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const { hostname, method, port, protocol, query } = request;
            let auth = "";
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}@`;
            }
            const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
            const requestContext = { destination: new URL(authority) };
            const session = this.connectionManager.lease(requestContext, {
                requestTimeout: this.config?.sessionTimeout,
                disableConcurrentStreams: disableConcurrentStreams || false,
            });
            const rejectWithDestroy = (err) => {
                if (disableConcurrentStreams) {
                    this.destroySession(session);
                }
                fulfilled = true;
                reject(err);
            };
            const queryString = buildQueryString(query || {});
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const req = session.request({
                ...request.headers,
                [constants.HTTP2_HEADER_PATH]: path,
                [constants.HTTP2_HEADER_METHOD]: method,
            });
            session.ref();
            req.on("response", (headers) => {
                const httpResponse = new HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: getTransformedHeaders(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
                if (disableConcurrentStreams) {
                    session.close();
                    this.connectionManager.deleteSession(authority, session);
                }
            });
            if (requestTimeout) {
                req.setTimeout(requestTimeout, () => {
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    rejectWithDestroy(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.close();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    rejectWithDestroy(abortError);
                };
            }
            req.on("frameError", (type, code, id) => {
                rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", rejectWithDestroy);
            req.on("aborted", () => {
                rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
            });
            req.on("close", () => {
                session.unref();
                if (disableConcurrentStreams) {
                    session.destroy();
                }
                if (!fulfilled) {
                    rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            writeRequestBodyPromise = writeRequestBody(req, request, requestTimeout);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
    destroySession(session) {
        if (!session.destroyed) {
            session.destroy();
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js

class Collector extends external_stream_namespaceObject.Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js

const stream_collector_streamCollector = (stream) => new Promise((resolve, reject) => {
    const collector = new Collector();
    stream.pipe(collector);
    stream.on("error", (err) => {
        collector.end();
        reject(err);
    });
    collector.on("error", reject);
    collector.on("finish", function () {
        const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
        resolve(bytes);
    });
});

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js




;// CONCATENATED MODULE: external "util"
const external_util_namespaceObject = require("util");
;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js




const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
    if (!(stream instanceof Readable)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await streamCollector(stream);
    };
    return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === undefined || Buffer.isEncoding(encoding)) {
                return fromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
            }
            else {
                const decoder = new TextDecoder(encoding);
                return decoder.decode(buf);
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            if (stream.readableFlowing !== null) {
                throw new Error("The stream has been consumed by other callbacks.");
            }
            if (typeof Readable.toWeb !== "function") {
                throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
            }
            transformed = true;
            return Readable.toWeb(stream);
        },
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js

const collect_stream_body_collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
        return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return Uint8ArrayBlobAdapter.mutate(await fromContext);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/command.js

class Command {
    constructor() {
        this.middlewareStack = constructStack();
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/constants.js
const constants_SENSITIVE_STRING = "***SensitiveInformation***";

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
const createAggregatedClient = (commands, Client) => {
    for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = async function (args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            }
            else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object")
                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            }
            else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/parse-utils.js
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt = (/* unused pure expression or super */ null && (expectLong));
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = (/* unused pure expression or super */ null && (strictParseDouble));
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = (/* unused pure expression or super */ null && (limitedParseDouble));
const limitedParseFloat = (/* unused pure expression or super */ null && (limitedParseDouble));
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = (/* unused pure expression or super */ null && (strictParseLong));
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const parse_utils_strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/date-utils.js

const DAYS = (/* unused pure expression or super */ null && (["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]));
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = (/* unused pure expression or super */ null && (new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/)));
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = parse_utils_strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE = (/* unused pure expression or super */ null && (new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/)));
const RFC_850_DATE = (/* unused pure expression or super */ null && (new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/)));
const ASC_TIME = (/* unused pure expression or super */ null && (new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/)));
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = (/* unused pure expression or super */ null && (50 * 365 * 24 * 60 * 60 * 1000));
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = strictParseByte(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return strictParseFloat32("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/exceptions.js
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/default-error-handler.js

const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw decorateServiceException(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js


const extensions_checksum_getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in AlgorithmId) {
        const algorithmId = AlgorithmId[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId],
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const extensions_checksum_resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
const getRetryConfiguration = (runtimeConfig) => {
    let _retryStrategy = runtimeConfig.retryStrategy;
    return {
        setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
        },
        retryStrategy() {
            return _retryStrategy;
        },
    };
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js


const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return {
        ...extensions_checksum_getChecksumConfiguration(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig),
    };
};
const defaultExtensionConfiguration_getDefaultClientConfiguration = (/* unused pure expression or super */ null && (getDefaultExtensionConfiguration));
const defaultExtensionConfiguration_resolveDefaultRuntimeConfig = (config) => {
    return {
        ...extensions_checksum_resolveChecksumRuntimeConfig(config),
        ...resolveRetryRuntimeConfig(config),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/index.js


;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/lazy-json.js
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
class LazyJsonString extends (/* unused pure expression or super */ null && (StringWrapper)) {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function object_mapping_map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
const object_mapping_take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
const mapWithFilter = (target, filter, instructions) => {
    return object_mapping_map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [, instruction];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        }
        else if (customFilterPassed) {
            target[targetKey] = value();
        }
    }
    else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/ser-utils.js
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/serde-json.js
const serde_json_json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(serde_json_json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = serde_json_json(obj[key]);
        }
        return target;
    }
    return obj;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js























;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/rng.js

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_node_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_node_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v4.js



function v4_v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_node_stringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4_v4);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js

const isStreamingPayload = (request) => request?.body instanceof external_stream_namespaceObject.Readable ||
    (typeof ReadableStream !== "undefined" && request?.body instanceof ReadableStream);

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/util.js
const util_asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js







const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = httpRequest_HttpRequest.isInstance(request);
        if (isRequest) {
            request.headers[constants_INVOCATION_ID_HEADER] = esm_node_v4();
        }
        while (true) {
            try {
                if (isRequest) {
                    request.headers[constants_REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetryErrorInfo(e);
                lastError = util_asSdkError(e);
                if (isRequest && isStreamingPayload(request)) {
                    (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                    throw lastError;
                }
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
    }
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetryErrorInfo = (error) => {
    const errorInfo = {
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if (dist_es_isThrottlingError(error))
        return "THROTTLING";
    if (isTransientError(error))
        return "TRANSIENT";
    if (isServerError(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});
const getRetryAfterHint = (response) => {
    if (!httpResponse_HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1000);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/index.js








;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/protocols/json/awsExpectUnion.js

const awsExpectUnion = (value) => {
    if (value == null) {
        return undefined;
    }
    if (typeof value === "object" && "__type" in value) {
        delete value.__type;
    }
    return expectUnion(value);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js


class DynamoDBServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, DynamoDBServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js

const AttributeAction = {
    ADD: "ADD",
    DELETE: "DELETE",
    PUT: "PUT",
};
const ScalarAttributeType = {
    B: "B",
    N: "N",
    S: "S",
};
const BackupStatus = {
    AVAILABLE: "AVAILABLE",
    CREATING: "CREATING",
    DELETED: "DELETED",
};
const BackupType = {
    AWS_BACKUP: "AWS_BACKUP",
    SYSTEM: "SYSTEM",
    USER: "USER",
};
const BillingMode = {
    PAY_PER_REQUEST: "PAY_PER_REQUEST",
    PROVISIONED: "PROVISIONED",
};
const KeyType = {
    HASH: "HASH",
    RANGE: "RANGE",
};
const ProjectionType = {
    ALL: "ALL",
    INCLUDE: "INCLUDE",
    KEYS_ONLY: "KEYS_ONLY",
};
const SSEType = {
    AES256: "AES256",
    KMS: "KMS",
};
const SSEStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
    UPDATING: "UPDATING",
};
const StreamViewType = {
    KEYS_ONLY: "KEYS_ONLY",
    NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
    NEW_IMAGE: "NEW_IMAGE",
    OLD_IMAGE: "OLD_IMAGE",
};
const TimeToLiveStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
};
class BackupInUseException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "BackupInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "BackupInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BackupInUseException.prototype);
    }
}
class BackupNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "BackupNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "BackupNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BackupNotFoundException.prototype);
    }
}
const BackupTypeFilter = {
    ALL: "ALL",
    AWS_BACKUP: "AWS_BACKUP",
    SYSTEM: "SYSTEM",
    USER: "USER",
};
const ReturnConsumedCapacity = {
    INDEXES: "INDEXES",
    NONE: "NONE",
    TOTAL: "TOTAL",
};
const ReturnValuesOnConditionCheckFailure = {
    ALL_OLD: "ALL_OLD",
    NONE: "NONE",
};
const BatchStatementErrorCodeEnum = {
    AccessDenied: "AccessDenied",
    ConditionalCheckFailed: "ConditionalCheckFailed",
    DuplicateItem: "DuplicateItem",
    InternalServerError: "InternalServerError",
    ItemCollectionSizeLimitExceeded: "ItemCollectionSizeLimitExceeded",
    ProvisionedThroughputExceeded: "ProvisionedThroughputExceeded",
    RequestLimitExceeded: "RequestLimitExceeded",
    ResourceNotFound: "ResourceNotFound",
    ThrottlingError: "ThrottlingError",
    TransactionConflict: "TransactionConflict",
    ValidationError: "ValidationError",
};
class InternalServerError extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InternalServerError",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerError";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
class RequestLimitExceeded extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "RequestLimitExceeded",
            $fault: "client",
            ...opts,
        });
        this.name = "RequestLimitExceeded";
        this.$fault = "client";
        Object.setPrototypeOf(this, RequestLimitExceeded.prototype);
    }
}
class InvalidEndpointException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InvalidEndpointException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidEndpointException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidEndpointException.prototype);
        this.Message = opts.Message;
    }
}
class ProvisionedThroughputExceededException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ProvisionedThroughputExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ProvisionedThroughputExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
    }
}
class ResourceNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
const ReturnItemCollectionMetrics = {
    NONE: "NONE",
    SIZE: "SIZE",
};
class ItemCollectionSizeLimitExceededException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ItemCollectionSizeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ItemCollectionSizeLimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ItemCollectionSizeLimitExceededException.prototype);
    }
}
const ComparisonOperator = {
    BEGINS_WITH: "BEGINS_WITH",
    BETWEEN: "BETWEEN",
    CONTAINS: "CONTAINS",
    EQ: "EQ",
    GE: "GE",
    GT: "GT",
    IN: "IN",
    LE: "LE",
    LT: "LT",
    NE: "NE",
    NOT_CONTAINS: "NOT_CONTAINS",
    NOT_NULL: "NOT_NULL",
    NULL: "NULL",
};
const ConditionalOperator = {
    AND: "AND",
    OR: "OR",
};
const ContinuousBackupsStatus = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
const PointInTimeRecoveryStatus = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
class ContinuousBackupsUnavailableException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ContinuousBackupsUnavailableException",
            $fault: "client",
            ...opts,
        });
        this.name = "ContinuousBackupsUnavailableException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ContinuousBackupsUnavailableException.prototype);
    }
}
const ContributorInsightsAction = {
    DISABLE: "DISABLE",
    ENABLE: "ENABLE",
};
const ContributorInsightsStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
    FAILED: "FAILED",
};
class LimitExceededException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
class TableInUseException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TableInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "TableInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TableInUseException.prototype);
    }
}
class TableNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TableNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "TableNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TableNotFoundException.prototype);
    }
}
const GlobalTableStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
const ReplicaStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    CREATION_FAILED: "CREATION_FAILED",
    DELETING: "DELETING",
    INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
    REGION_DISABLED: "REGION_DISABLED",
    UPDATING: "UPDATING",
};
const TableClass = {
    STANDARD: "STANDARD",
    STANDARD_INFREQUENT_ACCESS: "STANDARD_INFREQUENT_ACCESS",
};
class GlobalTableAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "GlobalTableAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "GlobalTableAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, GlobalTableAlreadyExistsException.prototype);
    }
}
const IndexStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
const TableStatus = {
    ACTIVE: "ACTIVE",
    ARCHIVED: "ARCHIVED",
    ARCHIVING: "ARCHIVING",
    CREATING: "CREATING",
    DELETING: "DELETING",
    INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
    UPDATING: "UPDATING",
};
class ResourceInUseException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
const ReturnValue = {
    ALL_NEW: "ALL_NEW",
    ALL_OLD: "ALL_OLD",
    NONE: "NONE",
    UPDATED_NEW: "UPDATED_NEW",
    UPDATED_OLD: "UPDATED_OLD",
};
class TransactionConflictException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TransactionConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "TransactionConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TransactionConflictException.prototype);
    }
}
const ExportFormat = {
    DYNAMODB_JSON: "DYNAMODB_JSON",
    ION: "ION",
};
const ExportStatus = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const ExportType = {
    FULL_EXPORT: "FULL_EXPORT",
    INCREMENTAL_EXPORT: "INCREMENTAL_EXPORT",
};
const ExportViewType = {
    NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
    NEW_IMAGE: "NEW_IMAGE",
};
const S3SseAlgorithm = {
    AES256: "AES256",
    KMS: "KMS",
};
class ExportNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ExportNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExportNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExportNotFoundException.prototype);
    }
}
class GlobalTableNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "GlobalTableNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "GlobalTableNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, GlobalTableNotFoundException.prototype);
    }
}
const ImportStatus = {
    CANCELLED: "CANCELLED",
    CANCELLING: "CANCELLING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const InputCompressionType = {
    GZIP: "GZIP",
    NONE: "NONE",
    ZSTD: "ZSTD",
};
const InputFormat = {
    CSV: "CSV",
    DYNAMODB_JSON: "DYNAMODB_JSON",
    ION: "ION",
};
class ImportNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ImportNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ImportNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ImportNotFoundException.prototype);
    }
}
const DestinationStatus = {
    ACTIVE: "ACTIVE",
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLE_FAILED: "ENABLE_FAILED",
    ENABLING: "ENABLING",
};
class DuplicateItemException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "DuplicateItemException",
            $fault: "client",
            ...opts,
        });
        this.name = "DuplicateItemException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DuplicateItemException.prototype);
    }
}
class IdempotentParameterMismatchException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "IdempotentParameterMismatchException",
            $fault: "client",
            ...opts,
        });
        this.name = "IdempotentParameterMismatchException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
        this.Message = opts.Message;
    }
}
class TransactionInProgressException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TransactionInProgressException",
            $fault: "client",
            ...opts,
        });
        this.name = "TransactionInProgressException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TransactionInProgressException.prototype);
        this.Message = opts.Message;
    }
}
class ExportConflictException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ExportConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExportConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExportConflictException.prototype);
    }
}
class InvalidExportTimeException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InvalidExportTimeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidExportTimeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidExportTimeException.prototype);
    }
}
class PointInTimeRecoveryUnavailableException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "PointInTimeRecoveryUnavailableException",
            $fault: "client",
            ...opts,
        });
        this.name = "PointInTimeRecoveryUnavailableException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PointInTimeRecoveryUnavailableException.prototype);
    }
}
class ImportConflictException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ImportConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ImportConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ImportConflictException.prototype);
    }
}
const Select = {
    ALL_ATTRIBUTES: "ALL_ATTRIBUTES",
    ALL_PROJECTED_ATTRIBUTES: "ALL_PROJECTED_ATTRIBUTES",
    COUNT: "COUNT",
    SPECIFIC_ATTRIBUTES: "SPECIFIC_ATTRIBUTES",
};
class TableAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TableAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TableAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TableAlreadyExistsException.prototype);
    }
}
class InvalidRestoreTimeException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InvalidRestoreTimeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRestoreTimeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRestoreTimeException.prototype);
    }
}
class ReplicaAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ReplicaAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "ReplicaAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ReplicaAlreadyExistsException.prototype);
    }
}
class ReplicaNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ReplicaNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ReplicaNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ReplicaNotFoundException.prototype);
    }
}
class IndexNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "IndexNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "IndexNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IndexNotFoundException.prototype);
    }
}
var AttributeValue;
(function (AttributeValue) {
    AttributeValue.visit = (value, visitor) => {
        if (value.S !== undefined)
            return visitor.S(value.S);
        if (value.N !== undefined)
            return visitor.N(value.N);
        if (value.B !== undefined)
            return visitor.B(value.B);
        if (value.SS !== undefined)
            return visitor.SS(value.SS);
        if (value.NS !== undefined)
            return visitor.NS(value.NS);
        if (value.BS !== undefined)
            return visitor.BS(value.BS);
        if (value.M !== undefined)
            return visitor.M(value.M);
        if (value.L !== undefined)
            return visitor.L(value.L);
        if (value.NULL !== undefined)
            return visitor.NULL(value.NULL);
        if (value.BOOL !== undefined)
            return visitor.BOOL(value.BOOL);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(AttributeValue || (AttributeValue = {}));
class ConditionalCheckFailedException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ConditionalCheckFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConditionalCheckFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConditionalCheckFailedException.prototype);
        this.Item = opts.Item;
    }
}
class TransactionCanceledException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TransactionCanceledException",
            $fault: "client",
            ...opts,
        });
        this.name = "TransactionCanceledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TransactionCanceledException.prototype);
        this.Message = opts.Message;
        this.CancellationReasons = opts.CancellationReasons;
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js






const se_BatchExecuteStatementCommand = async (input, context) => {
    const headers = sharedHeaders("BatchExecuteStatement");
    let body;
    body = JSON.stringify(se_BatchExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_BatchGetItemCommand = async (input, context) => {
    const headers = sharedHeaders("BatchGetItem");
    let body;
    body = JSON.stringify(se_BatchGetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_BatchWriteItemCommand = async (input, context) => {
    const headers = sharedHeaders("BatchWriteItem");
    let body;
    body = JSON.stringify(se_BatchWriteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateBackupCommand = async (input, context) => {
    const headers = sharedHeaders("CreateBackup");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateGlobalTableCommand = async (input, context) => {
    const headers = sharedHeaders("CreateGlobalTable");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateTableCommand = async (input, context) => {
    const headers = sharedHeaders("CreateTable");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteBackupCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteBackup");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteItemCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteItem");
    let body;
    body = JSON.stringify(se_DeleteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteTableCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteTable");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeBackupCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeBackup");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeContinuousBackupsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeContinuousBackups");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeContributorInsightsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeContributorInsights");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeEndpointsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEndpoints");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeExportCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeExport");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeGlobalTableCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeGlobalTable");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeGlobalTableSettingsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeGlobalTableSettings");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeImportCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeImport");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeKinesisStreamingDestination");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeLimitsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeLimits");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeTableCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeTable");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeTableReplicaAutoScaling");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeTimeToLiveCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeTimeToLive");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DisableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DisableKinesisStreamingDestination");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_EnableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("EnableKinesisStreamingDestination");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ExecuteStatementCommand = async (input, context) => {
    const headers = sharedHeaders("ExecuteStatement");
    let body;
    body = JSON.stringify(se_ExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ExecuteTransactionCommand = async (input, context) => {
    const headers = sharedHeaders("ExecuteTransaction");
    let body;
    body = JSON.stringify(se_ExecuteTransactionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ExportTableToPointInTimeCommand = async (input, context) => {
    const headers = sharedHeaders("ExportTableToPointInTime");
    let body;
    body = JSON.stringify(se_ExportTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetItemCommand = async (input, context) => {
    const headers = sharedHeaders("GetItem");
    let body;
    body = JSON.stringify(se_GetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ImportTableCommand = async (input, context) => {
    const headers = sharedHeaders("ImportTable");
    let body;
    body = JSON.stringify(se_ImportTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListBackupsCommand = async (input, context) => {
    const headers = sharedHeaders("ListBackups");
    let body;
    body = JSON.stringify(se_ListBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListContributorInsightsCommand = async (input, context) => {
    const headers = sharedHeaders("ListContributorInsights");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListExportsCommand = async (input, context) => {
    const headers = sharedHeaders("ListExports");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListGlobalTablesCommand = async (input, context) => {
    const headers = sharedHeaders("ListGlobalTables");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListImportsCommand = async (input, context) => {
    const headers = sharedHeaders("ListImports");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListTablesCommand = async (input, context) => {
    const headers = sharedHeaders("ListTables");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListTagsOfResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsOfResource");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_PutItemCommand = async (input, context) => {
    const headers = sharedHeaders("PutItem");
    let body;
    body = JSON.stringify(se_PutItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_QueryCommand = async (input, context) => {
    const headers = sharedHeaders("Query");
    let body;
    body = JSON.stringify(se_QueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_RestoreTableFromBackupCommand = async (input, context) => {
    const headers = sharedHeaders("RestoreTableFromBackup");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_RestoreTableToPointInTimeCommand = async (input, context) => {
    const headers = sharedHeaders("RestoreTableToPointInTime");
    let body;
    body = JSON.stringify(se_RestoreTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ScanCommand = async (input, context) => {
    const headers = sharedHeaders("Scan");
    let body;
    body = JSON.stringify(se_ScanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TransactGetItemsCommand = async (input, context) => {
    const headers = sharedHeaders("TransactGetItems");
    let body;
    body = JSON.stringify(se_TransactGetItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TransactWriteItemsCommand = async (input, context) => {
    const headers = sharedHeaders("TransactWriteItems");
    let body;
    body = JSON.stringify(se_TransactWriteItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateContinuousBackupsCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateContinuousBackups");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateContributorInsightsCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateContributorInsights");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateGlobalTableCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateGlobalTable");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateGlobalTableSettingsCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateGlobalTableSettings");
    let body;
    body = JSON.stringify(se_UpdateGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateItemCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateItem");
    let body;
    body = JSON.stringify(se_UpdateItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateTableCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateTable");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateTableReplicaAutoScaling");
    let body;
    body = JSON.stringify(se_UpdateTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateTimeToLiveCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateTimeToLive");
    let body;
    body = JSON.stringify(serde_json_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_BatchExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_BatchExecuteStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_BatchExecuteStatementOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_BatchExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_BatchGetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_BatchGetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_BatchGetItemOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_BatchGetItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_BatchWriteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_BatchWriteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_BatchWriteItemOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_BatchWriteItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateBackupOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupInUseException":
        case "com.amazonaws.dynamodb#BackupInUseException":
            throw await de_BackupInUseExceptionRes(parsedOutput, context);
        case "ContinuousBackupsUnavailableException":
        case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
            throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "TableInUseException":
        case "com.amazonaws.dynamodb#TableInUseException":
            throw await de_TableInUseExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateGlobalTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableAlreadyExistsException":
        case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
            throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteBackupOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupInUseException":
        case "com.amazonaws.dynamodb#BackupInUseException":
            throw await de_BackupInUseExceptionRes(parsedOutput, context);
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb#BackupNotFoundException":
            throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteItemOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            throw await de_TransactionConflictExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeBackupOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb#BackupNotFoundException":
            throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeContinuousBackupsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeContinuousBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeContributorInsightsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return Aws_json1_0_throwDefaultError({
        output,
        parsedBody,
        errorCode,
    });
};
const de_DescribeExportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeExportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeExportOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExportNotFoundException":
        case "com.amazonaws.dynamodb#ExportNotFoundException":
            throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeGlobalTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeGlobalTableSettingsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeGlobalTableSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeImportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeImportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeImportOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeImportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ImportNotFoundException":
        case "com.amazonaws.dynamodb#ImportNotFoundException":
            throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeTableReplicaAutoScalingOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeTableReplicaAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeTimeToLiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DisableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DisableKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DisableKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_EnableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_EnableKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_EnableKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ExecuteStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ExecuteStatementOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
        case "DuplicateItemException":
        case "com.amazonaws.dynamodb#DuplicateItemException":
            throw await de_DuplicateItemExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            throw await de_TransactionConflictExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ExecuteTransactionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ExecuteTransactionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ExecuteTransactionOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ExecuteTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
            throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb#TransactionCanceledException":
            throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
        case "TransactionInProgressException":
        case "com.amazonaws.dynamodb#TransactionInProgressException":
            throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ExportTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ExportTableToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ExportTableToPointInTimeOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ExportTableToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExportConflictException":
        case "com.amazonaws.dynamodb#ExportConflictException":
            throw await de_ExportConflictExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidExportTimeException":
        case "com.amazonaws.dynamodb#InvalidExportTimeException":
            throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "PointInTimeRecoveryUnavailableException":
        case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
            throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetItemOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ImportTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ImportTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ImportTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ImportTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ImportConflictException":
        case "com.amazonaws.dynamodb#ImportConflictException":
            throw await de_ImportConflictExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListBackupsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListExportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListExportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListExportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListGlobalTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListGlobalTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListGlobalTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListImportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListImportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListImportsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListImportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListTagsOfResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsOfResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTagsOfResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PutItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_PutItemOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            throw await de_TransactionConflictExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_QueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_QueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_QueryOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_QueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RestoreTableFromBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RestoreTableFromBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_RestoreTableFromBackupOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_RestoreTableFromBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupInUseException":
        case "com.amazonaws.dynamodb#BackupInUseException":
            throw await de_BackupInUseExceptionRes(parsedOutput, context);
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb#BackupNotFoundException":
            throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "TableAlreadyExistsException":
        case "com.amazonaws.dynamodb#TableAlreadyExistsException":
            throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
        case "TableInUseException":
        case "com.amazonaws.dynamodb#TableInUseException":
            throw await de_TableInUseExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RestoreTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RestoreTableToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_RestoreTableToPointInTimeOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_RestoreTableToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "InvalidRestoreTimeException":
        case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
            throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "PointInTimeRecoveryUnavailableException":
        case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
            throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
        case "TableAlreadyExistsException":
        case "com.amazonaws.dynamodb#TableAlreadyExistsException":
            throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
        case "TableInUseException":
        case "com.amazonaws.dynamodb#TableInUseException":
            throw await de_TableInUseExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ScanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ScanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ScanOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ScanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    await collect_stream_body_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
    };
    return response;
};
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_TransactGetItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TransactGetItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_TransactGetItemsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TransactGetItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb#TransactionCanceledException":
            throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_TransactWriteItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TransactWriteItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_TransactWriteItemsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TransactWriteItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
            throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb#TransactionCanceledException":
            throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
        case "TransactionInProgressException":
        case "com.amazonaws.dynamodb#TransactionInProgressException":
            throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    await collect_stream_body_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
    };
    return response;
};
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateContinuousBackupsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateContinuousBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContinuousBackupsUnavailableException":
        case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
            throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateGlobalTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ReplicaAlreadyExistsException":
        case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
            throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
        case "ReplicaNotFoundException":
        case "com.amazonaws.dynamodb#ReplicaNotFoundException":
            throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateGlobalTableSettingsOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateGlobalTableSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
        case "IndexNotFoundException":
        case "com.amazonaws.dynamodb#IndexNotFoundException":
            throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ReplicaNotFoundException":
        case "com.amazonaws.dynamodb#ReplicaNotFoundException":
            throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateItemOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            throw await de_TransactionConflictExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateTableOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateTableReplicaAutoScalingOutput(data, context);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateTableReplicaAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = serde_json_json(data);
    const response = {
        $metadata: Aws_json1_0_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateTimeToLiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_json1_0_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_BackupInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new BackupInUseException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_BackupNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new BackupNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ConditionalCheckFailedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConditionalCheckFailedException(body, context);
    const exception = new ConditionalCheckFailedException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ContinuousBackupsUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ContinuousBackupsUnavailableException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_DuplicateItemExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new DuplicateItemException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ExportConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ExportConflictException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ExportNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ExportNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_GlobalTableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new GlobalTableAlreadyExistsException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_GlobalTableNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new GlobalTableNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_IdempotentParameterMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new IdempotentParameterMismatchException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ImportConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ImportConflictException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ImportNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ImportNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_IndexNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new IndexNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_InternalServerErrorRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new InternalServerError({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_InvalidEndpointExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new InvalidEndpointException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_InvalidExportTimeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new InvalidExportTimeException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_InvalidRestoreTimeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new InvalidRestoreTimeException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ItemCollectionSizeLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ItemCollectionSizeLimitExceededException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new LimitExceededException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_PointInTimeRecoveryUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new PointInTimeRecoveryUnavailableException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ProvisionedThroughputExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ProvisionedThroughputExceededException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ReplicaAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ReplicaAlreadyExistsException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ReplicaNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ReplicaNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_RequestLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new RequestLimitExceeded({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ResourceInUseException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new ResourceNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_TableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new TableAlreadyExistsException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_TableInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new TableInUseException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_TableNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new TableNotFoundException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_TransactionCanceledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TransactionCanceledException(body, context);
    const exception = new TransactionCanceledException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_TransactionConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new TransactionConflictException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_TransactionInProgressExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = serde_json_json(body);
    const exception = new TransactionInProgressException({
        $metadata: Aws_json1_0_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const se_AttributeUpdates = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValueUpdate(value, context);
        return acc;
    }, {});
};
const se_AttributeValue = (input, context) => {
    return AttributeValue.visit(input, {
        B: (value) => ({ B: context.base64Encoder(value) }),
        BOOL: (value) => ({ BOOL: value }),
        BS: (value) => ({ BS: se_BinarySetAttributeValue(value, context) }),
        L: (value) => ({ L: se_ListAttributeValue(value, context) }),
        M: (value) => ({ M: se_MapAttributeValue(value, context) }),
        N: (value) => ({ N: value }),
        NS: (value) => ({ NS: serde_json_json(value) }),
        NULL: (value) => ({ NULL: value }),
        S: (value) => ({ S: value }),
        SS: (value) => ({ SS: serde_json_json(value) }),
        _: (name, value) => ({ name: value }),
    });
};
const se_AttributeValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_AttributeValue(entry, context);
    });
};
const se_AttributeValueUpdate = (input, context) => {
    return object_mapping_take(input, {
        Action: [],
        Value: (_) => se_AttributeValue(_, context),
    });
};
const se_AutoScalingPolicyUpdate = (input, context) => {
    return object_mapping_take(input, {
        PolicyName: [],
        TargetTrackingScalingPolicyConfiguration: (_) => se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(_, context),
    });
};
const se_AutoScalingSettingsUpdate = (input, context) => {
    return object_mapping_take(input, {
        AutoScalingDisabled: [],
        AutoScalingRoleArn: [],
        MaximumUnits: [],
        MinimumUnits: [],
        ScalingPolicyUpdate: (_) => se_AutoScalingPolicyUpdate(_, context),
    });
};
const se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (input, context) => {
    return object_mapping_take(input, {
        DisableScaleIn: [],
        ScaleInCooldown: [],
        ScaleOutCooldown: [],
        TargetValue: serializeFloat,
    });
};
const se_BatchExecuteStatementInput = (input, context) => {
    return object_mapping_take(input, {
        ReturnConsumedCapacity: [],
        Statements: (_) => se_PartiQLBatchRequest(_, context),
    });
};
const se_BatchGetItemInput = (input, context) => {
    return object_mapping_take(input, {
        RequestItems: (_) => se_BatchGetRequestMap(_, context),
        ReturnConsumedCapacity: [],
    });
};
const se_BatchGetRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_KeysAndAttributes(value, context);
        return acc;
    }, {});
};
const se_BatchStatementRequest = (input, context) => {
    return object_mapping_take(input, {
        ConsistentRead: [],
        Parameters: (_) => se_PreparedStatementParameters(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        Statement: [],
    });
};
const se_BatchWriteItemInput = (input, context) => {
    return object_mapping_take(input, {
        RequestItems: (_) => se_BatchWriteItemRequestMap(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
    });
};
const se_BatchWriteItemRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_WriteRequests(value, context);
        return acc;
    }, {});
};
const se_BinarySetAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return context.base64Encoder(entry);
    });
};
const se_Condition = (input, context) => {
    return object_mapping_take(input, {
        AttributeValueList: (_) => se_AttributeValueList(_, context),
        ComparisonOperator: [],
    });
};
const se_ConditionCheck = (input, context) => {
    return object_mapping_take(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_Delete = (input, context) => {
    return object_mapping_take(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_DeleteItemInput = (input, context) => {
    return object_mapping_take(input, {
        ConditionExpression: [],
        ConditionalOperator: [],
        Expected: (_) => se_ExpectedAttributeMap(_, context),
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        ReturnValues: [],
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_DeleteRequest = (input, context) => {
    return object_mapping_take(input, {
        Key: (_) => se_Key(_, context),
    });
};
const se_ExecuteStatementInput = (input, context) => {
    return object_mapping_take(input, {
        ConsistentRead: [],
        Limit: [],
        NextToken: [],
        Parameters: (_) => se_PreparedStatementParameters(_, context),
        ReturnConsumedCapacity: [],
        ReturnValuesOnConditionCheckFailure: [],
        Statement: [],
    });
};
const se_ExecuteTransactionInput = (input, context) => {
    return object_mapping_take(input, {
        ClientRequestToken: [true, (_) => _ ?? esm_node_v4()],
        ReturnConsumedCapacity: [],
        TransactStatements: (_) => se_ParameterizedStatements(_, context),
    });
};
const se_ExpectedAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_ExpectedAttributeValue(value, context);
        return acc;
    }, {});
};
const se_ExpectedAttributeValue = (input, context) => {
    return object_mapping_take(input, {
        AttributeValueList: (_) => se_AttributeValueList(_, context),
        ComparisonOperator: [],
        Exists: [],
        Value: (_) => se_AttributeValue(_, context),
    });
};
const se_ExportTableToPointInTimeInput = (input, context) => {
    return object_mapping_take(input, {
        ClientToken: [true, (_) => _ ?? esm_node_v4()],
        ExportFormat: [],
        ExportTime: (_) => Math.round(_.getTime() / 1000),
        ExportType: [],
        IncrementalExportSpecification: (_) => se_IncrementalExportSpecification(_, context),
        S3Bucket: [],
        S3BucketOwner: [],
        S3Prefix: [],
        S3SseAlgorithm: [],
        S3SseKmsKeyId: [],
        TableArn: [],
    });
};
const se_ExpressionAttributeValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_FilterConditionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_Condition(value, context);
        return acc;
    }, {});
};
const se_Get = (input, context) => {
    return object_mapping_take(input, {
        ExpressionAttributeNames: serde_json_json,
        Key: (_) => se_Key(_, context),
        ProjectionExpression: [],
        TableName: [],
    });
};
const se_GetItemInput = (input, context) => {
    return object_mapping_take(input, {
        AttributesToGet: serde_json_json,
        ConsistentRead: [],
        ExpressionAttributeNames: serde_json_json,
        Key: (_) => se_Key(_, context),
        ProjectionExpression: [],
        ReturnConsumedCapacity: [],
        TableName: [],
    });
};
const se_GlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return object_mapping_take(input, {
        IndexName: [],
        ProvisionedWriteCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    });
};
const se_GlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_GlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
const se_GlobalTableGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return object_mapping_take(input, {
        IndexName: [],
        ProvisionedWriteCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ProvisionedWriteCapacityUnits: [],
    });
};
const se_GlobalTableGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
const se_ImportTableInput = (input, context) => {
    return object_mapping_take(input, {
        ClientToken: [true, (_) => _ ?? esm_node_v4()],
        InputCompressionType: [],
        InputFormat: [],
        InputFormatOptions: serde_json_json,
        S3BucketSource: serde_json_json,
        TableCreationParameters: serde_json_json,
    });
};
const se_IncrementalExportSpecification = (input, context) => {
    return object_mapping_take(input, {
        ExportFromTime: (_) => Math.round(_.getTime() / 1000),
        ExportToTime: (_) => Math.round(_.getTime() / 1000),
        ExportViewType: [],
    });
};
const se_Key = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_KeyConditions = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_Condition(value, context);
        return acc;
    }, {});
};
const se_KeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_Key(entry, context);
    });
};
const se_KeysAndAttributes = (input, context) => {
    return object_mapping_take(input, {
        AttributesToGet: serde_json_json,
        ConsistentRead: [],
        ExpressionAttributeNames: serde_json_json,
        Keys: (_) => se_KeyList(_, context),
        ProjectionExpression: [],
    });
};
const se_ListAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_AttributeValue(entry, context);
    });
};
const se_ListBackupsInput = (input, context) => {
    return object_mapping_take(input, {
        BackupType: [],
        ExclusiveStartBackupArn: [],
        Limit: [],
        TableName: [],
        TimeRangeLowerBound: (_) => Math.round(_.getTime() / 1000),
        TimeRangeUpperBound: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_MapAttributeValue = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_ParameterizedStatement = (input, context) => {
    return object_mapping_take(input, {
        Parameters: (_) => se_PreparedStatementParameters(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        Statement: [],
    });
};
const se_ParameterizedStatements = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ParameterizedStatement(entry, context);
    });
};
const se_PartiQLBatchRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_BatchStatementRequest(entry, context);
    });
};
const se_PreparedStatementParameters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_AttributeValue(entry, context);
    });
};
const se_Put = (input, context) => {
    return object_mapping_take(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Item: (_) => se_PutItemInputAttributeMap(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_PutItemInput = (input, context) => {
    return object_mapping_take(input, {
        ConditionExpression: [],
        ConditionalOperator: [],
        Expected: (_) => se_ExpectedAttributeMap(_, context),
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Item: (_) => se_PutItemInputAttributeMap(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        ReturnValues: [],
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_PutItemInputAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_PutRequest = (input, context) => {
    return object_mapping_take(input, {
        Item: (_) => se_PutItemInputAttributeMap(_, context),
    });
};
const se_QueryInput = (input, context) => {
    return object_mapping_take(input, {
        AttributesToGet: serde_json_json,
        ConditionalOperator: [],
        ConsistentRead: [],
        ExclusiveStartKey: (_) => se_Key(_, context),
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        FilterExpression: [],
        IndexName: [],
        KeyConditionExpression: [],
        KeyConditions: (_) => se_KeyConditions(_, context),
        Limit: [],
        ProjectionExpression: [],
        QueryFilter: (_) => se_FilterConditionMap(_, context),
        ReturnConsumedCapacity: [],
        ScanIndexForward: [],
        Select: [],
        TableName: [],
    });
};
const se_ReplicaAutoScalingUpdate = (input, context) => {
    return object_mapping_take(input, {
        RegionName: [],
        ReplicaGlobalSecondaryIndexUpdates: (_) => se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList(_, context),
        ReplicaProvisionedReadCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    });
};
const se_ReplicaAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaAutoScalingUpdate(entry, context);
    });
};
const se_ReplicaGlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return object_mapping_take(input, {
        IndexName: [],
        ProvisionedReadCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    });
};
const se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
const se_ReplicaGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return object_mapping_take(input, {
        IndexName: [],
        ProvisionedReadCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ProvisionedReadCapacityUnits: [],
    });
};
const se_ReplicaGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
const se_ReplicaSettingsUpdate = (input, context) => {
    return object_mapping_take(input, {
        RegionName: [],
        ReplicaGlobalSecondaryIndexSettingsUpdate: (_) => se_ReplicaGlobalSecondaryIndexSettingsUpdateList(_, context),
        ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ReplicaProvisionedReadCapacityUnits: [],
        ReplicaTableClass: [],
    });
};
const se_ReplicaSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaSettingsUpdate(entry, context);
    });
};
const se_RestoreTableToPointInTimeInput = (input, context) => {
    return object_mapping_take(input, {
        BillingModeOverride: [],
        GlobalSecondaryIndexOverride: serde_json_json,
        LocalSecondaryIndexOverride: serde_json_json,
        ProvisionedThroughputOverride: serde_json_json,
        RestoreDateTime: (_) => Math.round(_.getTime() / 1000),
        SSESpecificationOverride: serde_json_json,
        SourceTableArn: [],
        SourceTableName: [],
        TargetTableName: [],
        UseLatestRestorableTime: [],
    });
};
const se_ScanInput = (input, context) => {
    return object_mapping_take(input, {
        AttributesToGet: serde_json_json,
        ConditionalOperator: [],
        ConsistentRead: [],
        ExclusiveStartKey: (_) => se_Key(_, context),
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        FilterExpression: [],
        IndexName: [],
        Limit: [],
        ProjectionExpression: [],
        ReturnConsumedCapacity: [],
        ScanFilter: (_) => se_FilterConditionMap(_, context),
        Segment: [],
        Select: [],
        TableName: [],
        TotalSegments: [],
    });
};
const se_TransactGetItem = (input, context) => {
    return object_mapping_take(input, {
        Get: (_) => se_Get(_, context),
    });
};
const se_TransactGetItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_TransactGetItem(entry, context);
    });
};
const se_TransactGetItemsInput = (input, context) => {
    return object_mapping_take(input, {
        ReturnConsumedCapacity: [],
        TransactItems: (_) => se_TransactGetItemList(_, context),
    });
};
const se_TransactWriteItem = (input, context) => {
    return object_mapping_take(input, {
        ConditionCheck: (_) => se_ConditionCheck(_, context),
        Delete: (_) => se_Delete(_, context),
        Put: (_) => se_Put(_, context),
        Update: (_) => se_Update(_, context),
    });
};
const se_TransactWriteItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_TransactWriteItem(entry, context);
    });
};
const se_TransactWriteItemsInput = (input, context) => {
    return object_mapping_take(input, {
        ClientRequestToken: [true, (_) => _ ?? esm_node_v4()],
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        TransactItems: (_) => se_TransactWriteItemList(_, context),
    });
};
const se_Update = (input, context) => {
    return object_mapping_take(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
        UpdateExpression: [],
    });
};
const se_UpdateGlobalTableSettingsInput = (input, context) => {
    return object_mapping_take(input, {
        GlobalTableBillingMode: [],
        GlobalTableGlobalSecondaryIndexSettingsUpdate: (_) => se_GlobalTableGlobalSecondaryIndexSettingsUpdateList(_, context),
        GlobalTableName: [],
        GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        GlobalTableProvisionedWriteCapacityUnits: [],
        ReplicaSettingsUpdate: (_) => se_ReplicaSettingsUpdateList(_, context),
    });
};
const se_UpdateItemInput = (input, context) => {
    return object_mapping_take(input, {
        AttributeUpdates: (_) => se_AttributeUpdates(_, context),
        ConditionExpression: [],
        ConditionalOperator: [],
        Expected: (_) => se_ExpectedAttributeMap(_, context),
        ExpressionAttributeNames: serde_json_json,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        ReturnValues: [],
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
        UpdateExpression: [],
    });
};
const se_UpdateTableReplicaAutoScalingInput = (input, context) => {
    return object_mapping_take(input, {
        GlobalSecondaryIndexUpdates: (_) => se_GlobalSecondaryIndexAutoScalingUpdateList(_, context),
        ProvisionedWriteCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ReplicaUpdates: (_) => se_ReplicaAutoScalingUpdateList(_, context),
        TableName: [],
    });
};
const se_WriteRequest = (input, context) => {
    return object_mapping_take(input, {
        DeleteRequest: (_) => se_DeleteRequest(_, context),
        PutRequest: (_) => se_PutRequest(_, context),
    });
};
const se_WriteRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_WriteRequest(entry, context);
    });
};
const de_ArchivalSummary = (output, context) => {
    return object_mapping_take(output, {
        ArchivalBackupArn: expectString,
        ArchivalDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ArchivalReason: expectString,
    });
};
const de_AttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_AttributeValue = (output, context) => {
    if (output.B != null) {
        return {
            B: context.base64Decoder(output.B),
        };
    }
    if (expectBoolean(output.BOOL) !== undefined) {
        return { BOOL: expectBoolean(output.BOOL) };
    }
    if (output.BS != null) {
        return {
            BS: de_BinarySetAttributeValue(output.BS, context),
        };
    }
    if (output.L != null) {
        return {
            L: de_ListAttributeValue(output.L, context),
        };
    }
    if (output.M != null) {
        return {
            M: de_MapAttributeValue(output.M, context),
        };
    }
    if (expectString(output.N) !== undefined) {
        return { N: expectString(output.N) };
    }
    if (output.NS != null) {
        return {
            NS: serde_json_json(output.NS),
        };
    }
    if (expectBoolean(output.NULL) !== undefined) {
        return { NULL: expectBoolean(output.NULL) };
    }
    if (expectString(output.S) !== undefined) {
        return { S: expectString(output.S) };
    }
    if (output.SS != null) {
        return {
            SS: serde_json_json(output.SS),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const de_AutoScalingPolicyDescription = (output, context) => {
    return object_mapping_take(output, {
        PolicyName: expectString,
        TargetTrackingScalingPolicyConfiguration: (_) => de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription(_, context),
    });
};
const de_AutoScalingPolicyDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AutoScalingPolicyDescription(entry, context);
    });
    return retVal;
};
const de_AutoScalingSettingsDescription = (output, context) => {
    return object_mapping_take(output, {
        AutoScalingDisabled: expectBoolean,
        AutoScalingRoleArn: expectString,
        MaximumUnits: expectLong,
        MinimumUnits: expectLong,
        ScalingPolicies: (_) => de_AutoScalingPolicyDescriptionList(_, context),
    });
};
const de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (output, context) => {
    return object_mapping_take(output, {
        DisableScaleIn: expectBoolean,
        ScaleInCooldown: expectInt32,
        ScaleOutCooldown: expectInt32,
        TargetValue: limitedParseDouble,
    });
};
const de_BackupDescription = (output, context) => {
    return object_mapping_take(output, {
        BackupDetails: (_) => de_BackupDetails(_, context),
        SourceTableDetails: (_) => de_SourceTableDetails(_, context),
        SourceTableFeatureDetails: (_) => de_SourceTableFeatureDetails(_, context),
    });
};
const de_BackupDetails = (output, context) => {
    return object_mapping_take(output, {
        BackupArn: expectString,
        BackupCreationDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        BackupExpiryDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        BackupName: expectString,
        BackupSizeBytes: expectLong,
        BackupStatus: expectString,
        BackupType: expectString,
    });
};
const de_BackupSummaries = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_BackupSummary(entry, context);
    });
    return retVal;
};
const de_BackupSummary = (output, context) => {
    return object_mapping_take(output, {
        BackupArn: expectString,
        BackupCreationDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        BackupExpiryDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        BackupName: expectString,
        BackupSizeBytes: expectLong,
        BackupStatus: expectString,
        BackupType: expectString,
        TableArn: expectString,
        TableId: expectString,
        TableName: expectString,
    });
};
const de_BatchExecuteStatementOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_PartiQLBatchResponse(_, context),
    });
};
const de_BatchGetItemOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_BatchGetResponseMap(_, context),
        UnprocessedKeys: (_) => de_BatchGetRequestMap(_, context),
    });
};
const de_BatchGetRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_KeysAndAttributes(value, context);
        return acc;
    }, {});
};
const de_BatchGetResponseMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_ItemList(value, context);
        return acc;
    }, {});
};
const de_BatchStatementError = (output, context) => {
    return object_mapping_take(output, {
        Code: expectString,
        Item: (_) => de_AttributeMap(_, context),
        Message: expectString,
    });
};
const de_BatchStatementResponse = (output, context) => {
    return object_mapping_take(output, {
        Error: (_) => de_BatchStatementError(_, context),
        Item: (_) => de_AttributeMap(_, context),
        TableName: expectString,
    });
};
const de_BatchWriteItemOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetricsPerTable(_, context),
        UnprocessedItems: (_) => de_BatchWriteItemRequestMap(_, context),
    });
};
const de_BatchWriteItemRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_WriteRequests(value, context);
        return acc;
    }, {});
};
const de_BillingModeSummary = (output, context) => {
    return object_mapping_take(output, {
        BillingMode: expectString,
        LastUpdateToPayPerRequestDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
    });
};
const de_BinarySetAttributeValue = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return context.base64Decoder(entry);
    });
    return retVal;
};
const de_CancellationReason = (output, context) => {
    return object_mapping_take(output, {
        Code: expectString,
        Item: (_) => de_AttributeMap(_, context),
        Message: expectString,
    });
};
const de_CancellationReasonList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CancellationReason(entry, context);
    });
    return retVal;
};
const de_Capacity = (output, context) => {
    return object_mapping_take(output, {
        CapacityUnits: limitedParseDouble,
        ReadCapacityUnits: limitedParseDouble,
        WriteCapacityUnits: limitedParseDouble,
    });
};
const de_ConditionalCheckFailedException = (output, context) => {
    return object_mapping_take(output, {
        Item: (_) => de_AttributeMap(_, context),
        message: expectString,
    });
};
const de_ConsumedCapacity = (output, context) => {
    return object_mapping_take(output, {
        CapacityUnits: limitedParseDouble,
        GlobalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
        LocalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
        ReadCapacityUnits: limitedParseDouble,
        Table: (_) => de_Capacity(_, context),
        TableName: expectString,
        WriteCapacityUnits: limitedParseDouble,
    });
};
const de_ConsumedCapacityMultiple = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ConsumedCapacity(entry, context);
    });
    return retVal;
};
const de_ContinuousBackupsDescription = (output, context) => {
    return object_mapping_take(output, {
        ContinuousBackupsStatus: expectString,
        PointInTimeRecoveryDescription: (_) => de_PointInTimeRecoveryDescription(_, context),
    });
};
const de_CreateBackupOutput = (output, context) => {
    return object_mapping_take(output, {
        BackupDetails: (_) => de_BackupDetails(_, context),
    });
};
const de_CreateGlobalTableOutput = (output, context) => {
    return object_mapping_take(output, {
        GlobalTableDescription: (_) => de_GlobalTableDescription(_, context),
    });
};
const de_CreateTableOutput = (output, context) => {
    return object_mapping_take(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_DeleteBackupOutput = (output, context) => {
    return object_mapping_take(output, {
        BackupDescription: (_) => de_BackupDescription(_, context),
    });
};
const de_DeleteItemOutput = (output, context) => {
    return object_mapping_take(output, {
        Attributes: (_) => de_AttributeMap(_, context),
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context),
    });
};
const de_DeleteRequest = (output, context) => {
    return object_mapping_take(output, {
        Key: (_) => de_Key(_, context),
    });
};
const de_DeleteTableOutput = (output, context) => {
    return object_mapping_take(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_DescribeBackupOutput = (output, context) => {
    return object_mapping_take(output, {
        BackupDescription: (_) => de_BackupDescription(_, context),
    });
};
const de_DescribeContinuousBackupsOutput = (output, context) => {
    return object_mapping_take(output, {
        ContinuousBackupsDescription: (_) => de_ContinuousBackupsDescription(_, context),
    });
};
const de_DescribeContributorInsightsOutput = (output, context) => {
    return object_mapping_take(output, {
        ContributorInsightsRuleList: serde_json_json,
        ContributorInsightsStatus: expectString,
        FailureException: serde_json_json,
        IndexName: expectString,
        LastUpdateDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        TableName: expectString,
    });
};
const de_DescribeExportOutput = (output, context) => {
    return object_mapping_take(output, {
        ExportDescription: (_) => de_ExportDescription(_, context),
    });
};
const de_DescribeGlobalTableOutput = (output, context) => {
    return object_mapping_take(output, {
        GlobalTableDescription: (_) => de_GlobalTableDescription(_, context),
    });
};
const de_DescribeGlobalTableSettingsOutput = (output, context) => {
    return object_mapping_take(output, {
        GlobalTableName: expectString,
        ReplicaSettings: (_) => de_ReplicaSettingsDescriptionList(_, context),
    });
};
const de_DescribeImportOutput = (output, context) => {
    return object_mapping_take(output, {
        ImportTableDescription: (_) => de_ImportTableDescription(_, context),
    });
};
const de_DescribeTableOutput = (output, context) => {
    return object_mapping_take(output, {
        Table: (_) => de_TableDescription(_, context),
    });
};
const de_DescribeTableReplicaAutoScalingOutput = (output, context) => {
    return object_mapping_take(output, {
        TableAutoScalingDescription: (_) => de_TableAutoScalingDescription(_, context),
    });
};
const de_ExecuteStatementOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Items: (_) => de_ItemList(_, context),
        LastEvaluatedKey: (_) => de_Key(_, context),
        NextToken: expectString,
    });
};
const de_ExecuteTransactionOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_ItemResponseList(_, context),
    });
};
const de_ExportDescription = (output, context) => {
    return object_mapping_take(output, {
        BilledSizeBytes: expectLong,
        ClientToken: expectString,
        EndTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ExportArn: expectString,
        ExportFormat: expectString,
        ExportManifest: expectString,
        ExportStatus: expectString,
        ExportTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ExportType: expectString,
        FailureCode: expectString,
        FailureMessage: expectString,
        IncrementalExportSpecification: (_) => de_IncrementalExportSpecification(_, context),
        ItemCount: expectLong,
        S3Bucket: expectString,
        S3BucketOwner: expectString,
        S3Prefix: expectString,
        S3SseAlgorithm: expectString,
        S3SseKmsKeyId: expectString,
        StartTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        TableArn: expectString,
        TableId: expectString,
    });
};
const de_ExportTableToPointInTimeOutput = (output, context) => {
    return object_mapping_take(output, {
        ExportDescription: (_) => de_ExportDescription(_, context),
    });
};
const de_GetItemOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Item: (_) => de_AttributeMap(_, context),
    });
};
const de_GlobalSecondaryIndexDescription = (output, context) => {
    return object_mapping_take(output, {
        Backfilling: expectBoolean,
        IndexArn: expectString,
        IndexName: expectString,
        IndexSizeBytes: expectLong,
        IndexStatus: expectString,
        ItemCount: expectLong,
        KeySchema: serde_json_json,
        Projection: serde_json_json,
        ProvisionedThroughput: (_) => de_ProvisionedThroughputDescription(_, context),
    });
};
const de_GlobalSecondaryIndexDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_GlobalSecondaryIndexDescription(entry, context);
    });
    return retVal;
};
const de_GlobalTableDescription = (output, context) => {
    return object_mapping_take(output, {
        CreationDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        GlobalTableArn: expectString,
        GlobalTableName: expectString,
        GlobalTableStatus: expectString,
        ReplicationGroup: (_) => de_ReplicaDescriptionList(_, context),
    });
};
const de_ImportSummary = (output, context) => {
    return object_mapping_take(output, {
        CloudWatchLogGroupArn: expectString,
        EndTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ImportArn: expectString,
        ImportStatus: expectString,
        InputFormat: expectString,
        S3BucketSource: serde_json_json,
        StartTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        TableArn: expectString,
    });
};
const de_ImportSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ImportSummary(entry, context);
    });
    return retVal;
};
const de_ImportTableDescription = (output, context) => {
    return object_mapping_take(output, {
        ClientToken: expectString,
        CloudWatchLogGroupArn: expectString,
        EndTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ErrorCount: expectLong,
        FailureCode: expectString,
        FailureMessage: expectString,
        ImportArn: expectString,
        ImportStatus: expectString,
        ImportedItemCount: expectLong,
        InputCompressionType: expectString,
        InputFormat: expectString,
        InputFormatOptions: serde_json_json,
        ProcessedItemCount: expectLong,
        ProcessedSizeBytes: expectLong,
        S3BucketSource: serde_json_json,
        StartTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        TableArn: expectString,
        TableCreationParameters: serde_json_json,
        TableId: expectString,
    });
};
const de_ImportTableOutput = (output, context) => {
    return object_mapping_take(output, {
        ImportTableDescription: (_) => de_ImportTableDescription(_, context),
    });
};
const de_IncrementalExportSpecification = (output, context) => {
    return object_mapping_take(output, {
        ExportFromTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ExportToTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ExportViewType: expectString,
    });
};
const de_ItemCollectionKeyAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_ItemCollectionMetrics = (output, context) => {
    return object_mapping_take(output, {
        ItemCollectionKey: (_) => de_ItemCollectionKeyAttributeMap(_, context),
        SizeEstimateRangeGB: (_) => de_ItemCollectionSizeEstimateRange(_, context),
    });
};
const de_ItemCollectionMetricsMultiple = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ItemCollectionMetrics(entry, context);
    });
    return retVal;
};
const de_ItemCollectionMetricsPerTable = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_ItemCollectionMetricsMultiple(value, context);
        return acc;
    }, {});
};
const de_ItemCollectionSizeEstimateRange = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return limitedParseDouble(entry);
    });
    return retVal;
};
const de_ItemList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AttributeMap(entry, context);
    });
    return retVal;
};
const de_ItemResponse = (output, context) => {
    return object_mapping_take(output, {
        Item: (_) => de_AttributeMap(_, context),
    });
};
const de_ItemResponseList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ItemResponse(entry, context);
    });
    return retVal;
};
const de_Key = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_KeyList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Key(entry, context);
    });
    return retVal;
};
const de_KeysAndAttributes = (output, context) => {
    return object_mapping_take(output, {
        AttributesToGet: serde_json_json,
        ConsistentRead: expectBoolean,
        ExpressionAttributeNames: serde_json_json,
        Keys: (_) => de_KeyList(_, context),
        ProjectionExpression: expectString,
    });
};
const de_ListAttributeValue = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AttributeValue(awsExpectUnion(entry), context);
    });
    return retVal;
};
const de_ListBackupsOutput = (output, context) => {
    return object_mapping_take(output, {
        BackupSummaries: (_) => de_BackupSummaries(_, context),
        LastEvaluatedBackupArn: expectString,
    });
};
const de_ListImportsOutput = (output, context) => {
    return object_mapping_take(output, {
        ImportSummaryList: (_) => de_ImportSummaryList(_, context),
        NextToken: expectString,
    });
};
const de_MapAttributeValue = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_PartiQLBatchResponse = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_BatchStatementResponse(entry, context);
    });
    return retVal;
};
const de_PointInTimeRecoveryDescription = (output, context) => {
    return object_mapping_take(output, {
        EarliestRestorableDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        LatestRestorableDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        PointInTimeRecoveryStatus: expectString,
    });
};
const de_ProvisionedThroughputDescription = (output, context) => {
    return object_mapping_take(output, {
        LastDecreaseDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        LastIncreaseDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        NumberOfDecreasesToday: expectLong,
        ReadCapacityUnits: expectLong,
        WriteCapacityUnits: expectLong,
    });
};
const de_PutItemInputAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_PutItemOutput = (output, context) => {
    return object_mapping_take(output, {
        Attributes: (_) => de_AttributeMap(_, context),
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context),
    });
};
const de_PutRequest = (output, context) => {
    return object_mapping_take(output, {
        Item: (_) => de_PutItemInputAttributeMap(_, context),
    });
};
const de_QueryOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Count: expectInt32,
        Items: (_) => de_ItemList(_, context),
        LastEvaluatedKey: (_) => de_Key(_, context),
        ScannedCount: expectInt32,
    });
};
const de_ReplicaAutoScalingDescription = (output, context) => {
    return object_mapping_take(output, {
        GlobalSecondaryIndexes: (_) => de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(_, context),
        RegionName: expectString,
        ReplicaProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaStatus: expectString,
    });
};
const de_ReplicaAutoScalingDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaAutoScalingDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaDescription = (output, context) => {
    return object_mapping_take(output, {
        GlobalSecondaryIndexes: serde_json_json,
        KMSMasterKeyId: expectString,
        ProvisionedThroughputOverride: serde_json_json,
        RegionName: expectString,
        ReplicaInaccessibleDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        ReplicaStatus: expectString,
        ReplicaStatusDescription: expectString,
        ReplicaStatusPercentProgress: expectString,
        ReplicaTableClassSummary: (_) => de_TableClassSummary(_, context),
    });
};
const de_ReplicaDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaGlobalSecondaryIndexAutoScalingDescription = (output, context) => {
    return object_mapping_take(output, {
        IndexName: expectString,
        IndexStatus: expectString,
        ProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
    });
};
const de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaGlobalSecondaryIndexSettingsDescription = (output, context) => {
    return object_mapping_take(output, {
        IndexName: expectString,
        IndexStatus: expectString,
        ProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ProvisionedReadCapacityUnits: expectLong,
        ProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ProvisionedWriteCapacityUnits: expectLong,
    });
};
const de_ReplicaGlobalSecondaryIndexSettingsDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaSettingsDescription = (output, context) => {
    return object_mapping_take(output, {
        RegionName: expectString,
        ReplicaBillingModeSummary: (_) => de_BillingModeSummary(_, context),
        ReplicaGlobalSecondaryIndexSettings: (_) => de_ReplicaGlobalSecondaryIndexSettingsDescriptionList(_, context),
        ReplicaProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaProvisionedReadCapacityUnits: expectLong,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaProvisionedWriteCapacityUnits: expectLong,
        ReplicaStatus: expectString,
        ReplicaTableClassSummary: (_) => de_TableClassSummary(_, context),
    });
};
const de_ReplicaSettingsDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaSettingsDescription(entry, context);
    });
    return retVal;
};
const de_RestoreSummary = (output, context) => {
    return object_mapping_take(output, {
        RestoreDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        RestoreInProgress: expectBoolean,
        SourceBackupArn: expectString,
        SourceTableArn: expectString,
    });
};
const de_RestoreTableFromBackupOutput = (output, context) => {
    return object_mapping_take(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_RestoreTableToPointInTimeOutput = (output, context) => {
    return object_mapping_take(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_ScanOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Count: expectInt32,
        Items: (_) => de_ItemList(_, context),
        LastEvaluatedKey: (_) => de_Key(_, context),
        ScannedCount: expectInt32,
    });
};
const de_SecondaryIndexesCapacityMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_Capacity(value, context);
        return acc;
    }, {});
};
const de_SourceTableDetails = (output, context) => {
    return object_mapping_take(output, {
        BillingMode: expectString,
        ItemCount: expectLong,
        KeySchema: serde_json_json,
        ProvisionedThroughput: serde_json_json,
        TableArn: expectString,
        TableCreationDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        TableId: expectString,
        TableName: expectString,
        TableSizeBytes: expectLong,
    });
};
const de_SourceTableFeatureDetails = (output, context) => {
    return object_mapping_take(output, {
        GlobalSecondaryIndexes: serde_json_json,
        LocalSecondaryIndexes: serde_json_json,
        SSEDescription: (_) => de_SSEDescription(_, context),
        StreamDescription: serde_json_json,
        TimeToLiveDescription: serde_json_json,
    });
};
const de_SSEDescription = (output, context) => {
    return object_mapping_take(output, {
        InaccessibleEncryptionDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        KMSMasterKeyArn: expectString,
        SSEType: expectString,
        Status: expectString,
    });
};
const de_TableAutoScalingDescription = (output, context) => {
    return object_mapping_take(output, {
        Replicas: (_) => de_ReplicaAutoScalingDescriptionList(_, context),
        TableName: expectString,
        TableStatus: expectString,
    });
};
const de_TableClassSummary = (output, context) => {
    return object_mapping_take(output, {
        LastUpdateDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        TableClass: expectString,
    });
};
const de_TableDescription = (output, context) => {
    return object_mapping_take(output, {
        ArchivalSummary: (_) => de_ArchivalSummary(_, context),
        AttributeDefinitions: serde_json_json,
        BillingModeSummary: (_) => de_BillingModeSummary(_, context),
        CreationDateTime: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
        DeletionProtectionEnabled: expectBoolean,
        GlobalSecondaryIndexes: (_) => de_GlobalSecondaryIndexDescriptionList(_, context),
        GlobalTableVersion: expectString,
        ItemCount: expectLong,
        KeySchema: serde_json_json,
        LatestStreamArn: expectString,
        LatestStreamLabel: expectString,
        LocalSecondaryIndexes: serde_json_json,
        ProvisionedThroughput: (_) => de_ProvisionedThroughputDescription(_, context),
        Replicas: (_) => de_ReplicaDescriptionList(_, context),
        RestoreSummary: (_) => de_RestoreSummary(_, context),
        SSEDescription: (_) => de_SSEDescription(_, context),
        StreamSpecification: serde_json_json,
        TableArn: expectString,
        TableClassSummary: (_) => de_TableClassSummary(_, context),
        TableId: expectString,
        TableName: expectString,
        TableSizeBytes: expectLong,
        TableStatus: expectString,
    });
};
const de_TransactGetItemsOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_ItemResponseList(_, context),
    });
};
const de_TransactionCanceledException = (output, context) => {
    return object_mapping_take(output, {
        CancellationReasons: (_) => de_CancellationReasonList(_, context),
        Message: expectString,
    });
};
const de_TransactWriteItemsOutput = (output, context) => {
    return object_mapping_take(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetricsPerTable(_, context),
    });
};
const de_UpdateContinuousBackupsOutput = (output, context) => {
    return object_mapping_take(output, {
        ContinuousBackupsDescription: (_) => de_ContinuousBackupsDescription(_, context),
    });
};
const de_UpdateGlobalTableOutput = (output, context) => {
    return object_mapping_take(output, {
        GlobalTableDescription: (_) => de_GlobalTableDescription(_, context),
    });
};
const de_UpdateGlobalTableSettingsOutput = (output, context) => {
    return object_mapping_take(output, {
        GlobalTableName: expectString,
        ReplicaSettings: (_) => de_ReplicaSettingsDescriptionList(_, context),
    });
};
const de_UpdateItemOutput = (output, context) => {
    return object_mapping_take(output, {
        Attributes: (_) => de_AttributeMap(_, context),
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context),
    });
};
const de_UpdateTableOutput = (output, context) => {
    return object_mapping_take(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_UpdateTableReplicaAutoScalingOutput = (output, context) => {
    return object_mapping_take(output, {
        TableAutoScalingDescription: (_) => de_TableAutoScalingDescription(_, context),
    });
};
const de_WriteRequest = (output, context) => {
    return object_mapping_take(output, {
        DeleteRequest: (_) => de_DeleteRequest(_, context),
        PutRequest: (_) => de_PutRequest(_, context),
    });
};
const de_WriteRequests = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_WriteRequest(entry, context);
    });
    return retVal;
};
const Aws_json1_0_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collect_stream_body_collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const Aws_json1_0_throwDefaultError = withBaseException(DynamoDBServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new httpRequest_HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": `DynamoDB_20120810.${operation}`,
    };
}
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js






class DescribeEndpointsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeEndpointsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeEndpointsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeEndpoints",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeEndpointsCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeEndpointsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "dynamodb",
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/package.json
const package_namespaceObject = {"i8":"3.470.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js


class STSServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js


class ExpiredTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
class MalformedPolicyDocumentException extends STSServiceException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
class PackedPolicyTooLargeException extends STSServiceException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
class RegionDisabledException extends STSServiceException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
class IDPRejectedClaimException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
class InvalidIdentityTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
class IDPCommunicationErrorException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
class models_0_InvalidAuthorizationMessageException extends (/* unused pure expression or super */ null && (__BaseException)) {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, models_0_InvalidAuthorizationMessageException.prototype);
    }
}
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: constants_SENSITIVE_STRING }),
});
const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SAMLAssertion && { SAMLAssertion: SENSITIVE_STRING }),
});
const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.WebIdentityToken && { WebIdentityToken: constants_SENSITIVE_STRING }),
});
const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});

// EXTERNAL MODULE: ./node_modules/fast-xml-parser/src/fxp.js
var fxp = __webpack_require__(932);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js





const se_AssumeRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        Action: "AssumeRole",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithSAMLCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input, context),
        Action: "AssumeRoleWithSAML",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        Action: "AssumeRoleWithWebIdentity",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DecodeAuthorizationMessageCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input, context),
        Action: "DecodeAuthorizationMessage",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetAccessKeyInfoCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input, context),
        Action: "GetAccessKeyInfo",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetCallerIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(input, context),
        Action: "GetCallerIdentity",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetFederationTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input, context),
        Action: "GetFederationToken",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetSessionTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input, context),
        Action: "GetSessionToken",
        Version: "2011-06-15",
    });
    return Aws_query_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_AssumeRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AssumeRoleCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_query_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_AssumeRoleWithSAMLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AssumeRoleWithSAMLCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithSAMLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_query_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AssumeRoleWithWebIdentityCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithWebIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_query_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DecodeAuthorizationMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DecodeAuthorizationMessageCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DecodeAuthorizationMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
            throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_query_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetAccessKeyInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetAccessKeyInfoCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetAccessKeyInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return Aws_query_throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetCallerIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetCallerIdentityCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetCallerIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return Aws_query_throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetFederationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetFederationTokenCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetFederationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_query_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetSessionTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetSessionTokenCommandError(output, context);
    }
    const data = await Aws_query_parseBody(output.body, context);
    let contents = {};
    contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetSessionTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_query_parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_query_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ExpiredTokenException(body.Error, context);
    const exception = new ExpiredTokenException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPCommunicationErrorException(body.Error, context);
    const exception = new IDPCommunicationErrorException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPRejectedClaimException(body.Error, context);
    const exception = new IDPRejectedClaimException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_InvalidAuthorizationMessageExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
    const exception = new InvalidAuthorizationMessageException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidIdentityTokenException(body.Error, context);
    const exception = new InvalidIdentityTokenException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
    const exception = new MalformedPolicyDocumentException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
    const exception = new PackedPolicyTooLargeException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_RegionDisabledException(body.Error, context);
    const exception = new RegionDisabledException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const se_AssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags != null) {
        const memberEntries = se_tagListType(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TransitiveTagKeys != null) {
        const memberEntries = se_tagKeyListType(input.TransitiveTagKeys, context);
        if (input.TransitiveTagKeys?.length === 0) {
            entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExternalId != null) {
        entries["ExternalId"] = input.ExternalId;
    }
    if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
    }
    if (input.SourceIdentity != null) {
        entries["SourceIdentity"] = input.SourceIdentity;
    }
    if (input.ProvidedContexts != null) {
        const memberEntries = se_ProvidedContextsListType(input.ProvidedContexts, context);
        if (input.ProvidedContexts?.length === 0) {
            entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProvidedContexts.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_AssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.PrincipalArn != null) {
        entries["PrincipalArn"] = input.PrincipalArn;
    }
    if (input.SAMLAssertion != null) {
        entries["SAMLAssertion"] = input.SAMLAssertion;
    }
    if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const se_AssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.WebIdentityToken != null) {
        entries["WebIdentityToken"] = input.WebIdentityToken;
    }
    if (input.ProviderId != null) {
        entries["ProviderId"] = input.ProviderId;
    }
    if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const se_DecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input.EncodedMessage != null) {
        entries["EncodedMessage"] = input.EncodedMessage;
    }
    return entries;
};
const se_GetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId != null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const se_GetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_GetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags != null) {
        const memberEntries = se_tagListType(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
    }
    return entries;
};
const se_policyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_PolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input.arn != null) {
        entries["arn"] = input.arn;
    }
    return entries;
};
const se_ProvidedContext = (input, context) => {
    const entries = {};
    if (input.ProviderArn != null) {
        entries["ProviderArn"] = input.ProviderArn;
    }
    if (input.ContextAssertion != null) {
        entries["ContextAssertion"] = input.ContextAssertion;
    }
    return entries;
};
const se_ProvidedContextsListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_Tag = (input, context) => {
    const entries = {};
    if (input.Key != null) {
        entries["Key"] = input.Key;
    }
    if (input.Value != null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const se_tagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_tagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const de_AssumedRoleUser = (output, context) => {
    const contents = {};
    if (output["AssumedRoleId"] !== undefined) {
        contents.AssumedRoleId = expectString(output["AssumedRoleId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = expectString(output["Arn"]);
    }
    return contents;
};
const de_AssumeRoleResponse = (output, context) => {
    const contents = {};
    if (output["Credentials"] !== undefined) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = expectString(output["SourceIdentity"]);
    }
    return contents;
};
const de_AssumeRoleWithSAMLResponse = (output, context) => {
    const contents = {};
    if (output["Credentials"] !== undefined) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["Subject"] !== undefined) {
        contents.Subject = __expectString(output["Subject"]);
    }
    if (output["SubjectType"] !== undefined) {
        contents.SubjectType = __expectString(output["SubjectType"]);
    }
    if (output["Issuer"] !== undefined) {
        contents.Issuer = __expectString(output["Issuer"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = __expectString(output["Audience"]);
    }
    if (output["NameQualifier"] !== undefined) {
        contents.NameQualifier = __expectString(output["NameQualifier"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = __expectString(output["SourceIdentity"]);
    }
    return contents;
};
const de_AssumeRoleWithWebIdentityResponse = (output, context) => {
    const contents = {};
    if (output["Credentials"] !== undefined) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
    }
    if (output["SubjectFromWebIdentityToken"] !== undefined) {
        contents.SubjectFromWebIdentityToken = expectString(output["SubjectFromWebIdentityToken"]);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["Provider"] !== undefined) {
        contents.Provider = expectString(output["Provider"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = expectString(output["Audience"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = expectString(output["SourceIdentity"]);
    }
    return contents;
};
const de_Credentials = (output, context) => {
    const contents = {};
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = expectString(output["AccessKeyId"]);
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = expectString(output["SecretAccessKey"]);
    }
    if (output["SessionToken"] !== undefined) {
        contents.SessionToken = expectString(output["SessionToken"]);
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = expectNonNull(parseRfc3339DateTimeWithOffset(output["Expiration"]));
    }
    return contents;
};
const de_DecodeAuthorizationMessageResponse = (output, context) => {
    const contents = {};
    if (output["DecodedMessage"] !== undefined) {
        contents.DecodedMessage = __expectString(output["DecodedMessage"]);
    }
    return contents;
};
const de_ExpiredTokenException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const de_FederatedUser = (output, context) => {
    const contents = {};
    if (output["FederatedUserId"] !== undefined) {
        contents.FederatedUserId = __expectString(output["FederatedUserId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = __expectString(output["Arn"]);
    }
    return contents;
};
const de_GetAccessKeyInfoResponse = (output, context) => {
    const contents = {};
    if (output["Account"] !== undefined) {
        contents.Account = __expectString(output["Account"]);
    }
    return contents;
};
const de_GetCallerIdentityResponse = (output, context) => {
    const contents = {};
    if (output["UserId"] !== undefined) {
        contents.UserId = __expectString(output["UserId"]);
    }
    if (output["Account"] !== undefined) {
        contents.Account = __expectString(output["Account"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = __expectString(output["Arn"]);
    }
    return contents;
};
const de_GetFederationTokenResponse = (output, context) => {
    const contents = {};
    if (output["Credentials"] !== undefined) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
    }
    if (output["FederatedUser"] !== undefined) {
        contents.FederatedUser = de_FederatedUser(output["FederatedUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]);
    }
    return contents;
};
const de_GetSessionTokenResponse = (output, context) => {
    const contents = {};
    if (output["Credentials"] !== undefined) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
    }
    return contents;
};
const de_IDPCommunicationErrorException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const de_IDPRejectedClaimException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const de_InvalidAuthorizationMessageException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_InvalidIdentityTokenException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const de_MalformedPolicyDocumentException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const de_PackedPolicyTooLargeException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const de_RegionDisabledException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const Aws_query_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const Aws_query_collectBodyString = (streamBody, context) => collect_stream_body_collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const Aws_query_throwDefaultError = withBaseException(STSServiceException);
const Aws_query_buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new httpRequest_HttpRequest(contents);
};
const SHARED_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
};
const Aws_query_parseBody = (streamBody, context) => Aws_query_collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fxp.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const Aws_query_parseErrorBody = async (errorBody, context) => {
    const value = await Aws_query_parseBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js








class AssumeRoleCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: AssumeRoleResponseFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSecurityTokenServiceV20110615",
                operation: "AssumeRole",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_AssumeRoleCommand(input, context);
    }
    deserialize(output, context) {
        return de_AssumeRoleCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js







class AssumeRoleWithWebIdentityCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleWithWebIdentityCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithWebIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
            outputFilterSensitiveLog: AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSecurityTokenServiceV20110615",
                operation: "AssumeRoleWithWebIdentity",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_AssumeRoleWithWebIdentityCommand(input, context);
    }
    deserialize(output, context) {
        return de_AssumeRoleWithWebIdentityCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js


const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
const decorateDefaultRegion = (region) => {
    if (typeof region !== "function") {
        return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
    }
    return async () => {
        try {
            return await region();
        }
        catch (e) {
            return ASSUME_ROLE_DEFAULT_REGION;
        }
    };
};
const getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                credentialDefaultProvider: () => async () => closureSourceCreds,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
const getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
    let stsClient;
    return async (params) => {
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
    ...input,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-sdk-sts/dist-es/index.js

const resolveStsAuthConfig = (input, { stsClientCtor }) => resolveAwsAuthConfig({
    ...input,
    stsClientCtor,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
const EndpointParameters_resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts",
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/package.json
const client_sts_package_namespaceObject = {"i8":"3.470.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js
let emitWarningIfUnsupportedVersion_warningEmitted = false;
const emitWarningIfUnsupportedVersion_emitWarningIfUnsupportedVersion = (version) => {
    if (version && !emitWarningIfUnsupportedVersion_warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        emitWarningIfUnsupportedVersion_warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 14.x on May 1, 2024.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to an active Node.js LTS version.

More information can be found at: https://a.co/dzr2AJd`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js

const ENV_KEY = "AWS_ACCESS_KEY_ID";
const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
const ENV_SESSION = "AWS_SESSION_TOKEN";
const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const fromEnv_fromEnv = () => async () => {
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
        };
    }
    throw new CredentialsProviderError("Unable to find environment variable credentials.");
};

;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js



function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const req = (0,external_http_namespaceObject.request)({
            method: "GET",
            ...options,
            hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
            reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", () => {
            reject(new ProviderError("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
                req.destroy();
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(external_buffer_namespaceObject.Buffer.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
const isImdsCredentials = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string";
const fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
});

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
const DEFAULT_TIMEOUT = 1000;
const DEFAULT_MAX_RETRIES = 0;
const providerConfigFromInit = ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT, }) => ({ maxRetries, timeout });

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js
const retry = (toRetry, maxRetries) => {
    let promise = toRetry();
    for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js






const ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromContainerMetadata = (init = {}) => {
    const { timeout, maxRetries } = providerConfigFromInit(init);
    return () => retry(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
            throw new CredentialsProviderError("Invalid response received from instance metadata service.");
        }
        return fromImdsCredentials(credsResponse);
    }, maxRetries);
};
const requestFromEcsImds = async (timeout, options) => {
    if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
            ...options.headers,
            Authorization: process.env[ENV_CMDS_AUTH_TOKEN],
        };
    }
    const buffer = await httpRequest({
        ...options,
        timeout,
    });
    return buffer.toString();
};
const CMDS_IP = "169.254.170.2";
const GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
const GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
const getCmdsUri = async () => {
    if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
            hostname: CMDS_IP,
            path: process.env[ENV_CMDS_RELATIVE_URI],
        };
    }
    if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = (0,external_url_namespaceObject.parse)(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
            throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
            throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
        }
        return {
            ...parsed,
            port: parsed.port ? parseInt(parsed.port, 10) : undefined,
        };
    }
    throw new CredentialsProviderError("The container metadata credential provider cannot be used unless" +
        ` the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment` +
        " variable is set", false);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js

class InstanceMetadataV1FallbackError extends CredentialsProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, InstanceMetadataV1FallbackError.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
(function (Endpoint) {
    Endpoint["IPv4"] = "http://169.254.169.254";
    Endpoint["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint || (Endpoint = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
const ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
    default: undefined,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
(function (EndpointMode) {
    EndpointMode["IPv4"] = "IPv4";
    EndpointMode["IPv6"] = "IPv6";
})(EndpointMode || (EndpointMode = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js

const ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
const CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
const ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
    default: EndpointMode.IPv4,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js






const getInstanceMetadataEndpoint = async () => parseUrl((await getFromEndpointConfig()) || (await getFromEndpointModeConfig()));
const getFromEndpointConfig = async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)();
const getFromEndpointModeConfig = async () => {
    const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
        case EndpointMode.IPv4:
            return Endpoint.IPv4;
        case EndpointMode.IPv6:
            return Endpoint.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode)}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
const STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
const STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
const STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
const getExtendedInstanceMetadataCredentials = (credentials, logger) => {
    const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
        Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
    const newExpiration = new Date(Date.now() + refreshInterval * 1000);
    logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these " +
        "credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " +
        STATIC_STABILITY_DOC_URL);
    const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
    return {
        ...credentials,
        ...(originalExpiration ? { originalExpiration } : {}),
        expiration: newExpiration,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js

const staticStabilityProvider = (provider, options = {}) => {
    const logger = options?.logger || console;
    let pastCredentials;
    return async () => {
        let credentials;
        try {
            credentials = await provider();
            if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
                credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
            }
        }
        catch (e) {
            if (pastCredentials) {
                logger.warn("Credential renew failed: ", e);
                credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
            }
            else {
                throw e;
            }
        }
        pastCredentials = credentials;
        return credentials;
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js









const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
const IMDS_TOKEN_PATH = "/latest/api/token";
const AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
const PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
const X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
const fromInstanceMetadata = (init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger });
const getInstanceImdsProvider = (init) => {
    let disableFetchToken = false;
    const { logger, profile } = init;
    const { timeout, maxRetries } = providerConfigFromInit(init);
    const getCredentials = async (maxRetries, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
            let fallbackBlockedFromProfile = false;
            let fallbackBlockedFromProcessEnv = false;
            const configValue = await loadConfig({
                environmentVariableSelector: (env) => {
                    const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
                    fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
                    if (envValue === undefined) {
                        throw new CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`);
                    }
                    return fallbackBlockedFromProcessEnv;
                },
                configFileSelector: (profile) => {
                    const profileValue = profile[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
                    fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
                    return fallbackBlockedFromProfile;
                },
                default: false,
            }, {
                profile,
            })();
            if (init.ec2MetadataV1Disabled || configValue) {
                const causes = [];
                if (init.ec2MetadataV1Disabled)
                    causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
                if (fallbackBlockedFromProfile)
                    causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
                if (fallbackBlockedFromProcessEnv)
                    causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
                throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
            }
        }
        const imdsProfile = (await retry(async () => {
            let profile;
            try {
                profile = await getProfile(options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return profile;
        }, maxRetries)).trim();
        return retry(async () => {
            let creds;
            try {
                creds = await getCredentialsFromProfile(imdsProfile, options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return creds;
        }, maxRetries);
    };
    return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
            logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
        }
        else {
            let token;
            try {
                token = (await getMetadataToken({ ...endpoint, timeout })).toString();
            }
            catch (error) {
                if (error?.statusCode === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error",
                    });
                }
                else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
                    disableFetchToken = true;
                }
                logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
                return getCredentials(maxRetries, { ...endpoint, timeout });
            }
            return getCredentials(maxRetries, {
                ...endpoint,
                headers: {
                    [X_AWS_EC2_METADATA_TOKEN]: token,
                },
                timeout,
            });
        }
    };
};
const getMetadataToken = async (options) => httpRequest({
    ...options,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600",
    },
});
const getProfile = async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString();
const getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile,
    })).toString());
    if (!isImdsCredentials(credsResponse)) {
        throw new CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return fromImdsCredentials(credsResponse);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/index.js







;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js



const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: fromContainerMetadata,
        Ec2InstanceMetadata: fromInstanceMetadata,
        Environment: fromEnv_fromEnv,
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
    }
    else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js




const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        throw new CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${getProfileName(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? resolveProfileData(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : resolveCredentialSource(data.credential_source, profileName)();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10),
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};

;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
const getValidatedProcessCredentials = (profileName, data) => {
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...(data.SessionToken && { sessionToken: data.SessionToken }),
        ...(data.Expiration && { expiration: new Date(data.Expiration) }),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js




const resolveProcessCredentials = async (profileName, profiles) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = (0,external_util_namespaceObject.promisify)(external_child_process_namespaceObject.exec);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                }
                catch {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return getValidatedProcessCredentials(profileName, data);
            }
            catch (error) {
                throw new CredentialsProviderError(error.message);
            }
        }
        else {
            throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
    }
    else {
        throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js


const fromProcess = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProcessCredentials(getProfileName(init), profiles);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js

const isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
const resolveProcessCredentials_resolveProcessCredentials = async (options, profile) => fromProcess({
    ...options,
    profile,
})();

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
const endpoint_EndpointParameters_resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal",
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/package.json
const client_sso_package_namespaceObject = {"i8":"3.470.0"};
;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = require("process");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
const crtAvailability = {
    isCrtAvailable: false,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js

const isCrtAvailable = () => {
    if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js





const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
const UA_APP_ID_INI_NAME = "sdk-ua-app-id";
const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${(0,external_os_namespaceObject.platform)()}`, (0,external_os_namespaceObject.release)()],
        ["lang/js"],
        ["md/nodejs", `${external_process_namespaceObject.versions.node}`],
    ];
    const crtAvailable = isCrtAvailable();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (external_process_namespaceObject.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${external_process_namespaceObject.env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = loadConfig({
        environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/hash-node/dist-es/index.js




class Hash {
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? (0,external_crypto_.createHmac)(this.algorithmIdentifier, castSourceData(this.secret))
            : (0,external_crypto_.createHash)(this.algorithmIdentifier);
    }
}
function castSourceData(toCast, encoding) {
    if (external_buffer_namespaceObject.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return dist_es_fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return dist_es_fromArrayBuffer(toCast);
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js

const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0,external_fs_namespaceObject.lstatSync)(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return (0,external_fs_namespaceObject.fstatSync)(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
const u = "required", v = "fn", w = "argv", x = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
const _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js


const defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js





const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js
const AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
const AWS_REGION_ENV = "AWS_REGION";
const AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
const IMDS_REGION_PATH = "/latest/meta-data/placement/region";

;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js
const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
const NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js






const resolveDefaultsModeConfig = ({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[ENV_IMDS_DISABLED]) {
        try {
            const endpoint = await getInstanceMetadataEndpoint();
            return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js














const runtimeConfig_getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig(config);
    emitWarningIfUnsupportedVersion_emitWarningIfUnsupportedVersion(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: client_sso_package_namespaceObject.i8 }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? stream_collector_streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === undefined) {
            throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
            return region;
        }
        return region();
    };
    return {
        setRegion(region) {
            runtimeConfigRegion = region;
        },
        region() {
            return runtimeConfigRegion;
        },
    };
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
const config_REGION_ENV_NAME = "AWS_REGION";
const config_REGION_INI_NAME = "region";
const config_NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[config_REGION_ENV_NAME],
    configFileSelector: (profile) => profile[config_REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const config_NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js



const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...defaultExtensionConfiguration_resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js













class SSOClient extends Client {
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig_getRuntimeConfig(configuration || {});
        const _config_1 = endpoint_EndpointParameters_resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveRuntimeExtensions(_config_6, configuration?.extensions || []);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js


class SSOServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js


class InvalidRequestException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
class models_0_ResourceNotFoundException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, models_0_ResourceNotFoundException.prototype);
    }
}
class TooManyRequestsException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class UnauthorizedException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: constants_SENSITIVE_STRING }),
});
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: constants_SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: constants_SENSITIVE_STRING }),
});
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }),
});
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js




const se_GetRoleCredentialsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = object_mapping_map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/federation/credentials";
    const query = object_mapping_map({
        role_name: [, expectNonNull(input.roleName, `roleName`)],
        account_id: [, expectNonNull(input.accountId, `accountId`)],
    });
    let body;
    return new httpRequest_HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const se_ListAccountRolesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/roles";
    const query = map({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()],
        account_id: [, __expectNonNull(input.accountId, `accountId`)],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const se_ListAccountsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/accounts";
    const query = map({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const se_LogoutCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logout";
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
const de_GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetRoleCredentialsCommandError(output, context);
    }
    const contents = object_mapping_map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await Aws_restJson1_parseBody(output.body, context)), "body");
    const doc = object_mapping_take(data, {
        roleCredentials: serde_json_json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetRoleCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_restJson1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await Aws_restJson1_de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_restJson1_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAccountRolesCommandError(output, context);
    }
    const contents = map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await Aws_restJson1_parseBody(output.body, context)), "body");
    const doc = take(data, {
        nextToken: __expectString,
        roleList: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_restJson1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await Aws_restJson1_de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_restJson1_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAccountsCommandError(output, context);
    }
    const contents = map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await Aws_restJson1_parseBody(output.body, context)), "body");
    const doc = take(data, {
        accountList: _json,
        nextToken: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_restJson1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await Aws_restJson1_de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_restJson1_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_LogoutCommandError(output, context);
    }
    const contents = map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_LogoutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_restJson1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return Aws_restJson1_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const Aws_restJson1_throwDefaultError = withBaseException(SSOServiceException);
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const Aws_restJson1_de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_ResourceNotFoundException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new TooManyRequestsException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const Aws_restJson1_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const Aws_restJson1_collectBodyString = (streamBody, context) => collect_stream_body_collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const Aws_restJson1_parseBody = (streamBody, context) => Aws_restJson1_collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const Aws_restJson1_parseErrorBody = async (errorBody, context) => {
    const value = await Aws_restJson1_parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const Aws_restJson1_loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js







class GetRoleCredentialsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetRoleCredentialsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "GetRoleCredentialsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: GetRoleCredentialsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetRoleCredentialsResponseFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "SWBPortalService",
                operation: "GetRoleCredentials",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_GetRoleCredentialsCommand(input, context);
    }
    deserialize(output, context) {
        return de_GetRoleCredentialsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/TokenProviderError.js

class TokenProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/constants.js
const EXPIRE_WINDOW_MS = 5 * 60 * 1000;
const REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/bundle/client-sso-oidc-node.js









var client_sso_oidc_node_resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssooidc",
    };
};
var package_default = { version: "3.429.0" };













var client_sso_oidc_node_s = "required";
var client_sso_oidc_node_t = "fn";
var client_sso_oidc_node_u = "argv";
var client_sso_oidc_node_v = "ref";
var client_sso_oidc_node_a = "isSet";
var client_sso_oidc_node_b = "tree";
var client_sso_oidc_node_c = "error";
var client_sso_oidc_node_d = "endpoint";
var client_sso_oidc_node_e = "PartitionResult";
var client_sso_oidc_node_f = "getAttr";
var client_sso_oidc_node_g = { [client_sso_oidc_node_s]: false, type: "String" };
var client_sso_oidc_node_h = { [client_sso_oidc_node_s]: true, default: false, type: "Boolean" };
var client_sso_oidc_node_i = { [client_sso_oidc_node_v]: "Endpoint" };
var client_sso_oidc_node_j = { [client_sso_oidc_node_t]: "booleanEquals", [client_sso_oidc_node_u]: [{ [client_sso_oidc_node_v]: "UseFIPS" }, true] };
var client_sso_oidc_node_k = { [client_sso_oidc_node_t]: "booleanEquals", [client_sso_oidc_node_u]: [{ [client_sso_oidc_node_v]: "UseDualStack" }, true] };
var client_sso_oidc_node_l = {};
var client_sso_oidc_node_m = { [client_sso_oidc_node_t]: "booleanEquals", [client_sso_oidc_node_u]: [true, { [client_sso_oidc_node_t]: client_sso_oidc_node_f, [client_sso_oidc_node_u]: [{ [client_sso_oidc_node_v]: client_sso_oidc_node_e }, "supportsFIPS"] }] };
var client_sso_oidc_node_n = { [client_sso_oidc_node_v]: client_sso_oidc_node_e };
var client_sso_oidc_node_o = { [client_sso_oidc_node_t]: "booleanEquals", [client_sso_oidc_node_u]: [true, { [client_sso_oidc_node_t]: client_sso_oidc_node_f, [client_sso_oidc_node_u]: [client_sso_oidc_node_n, "supportsDualStack"] }] };
var client_sso_oidc_node_p = [client_sso_oidc_node_j];
var client_sso_oidc_node_q = [client_sso_oidc_node_k];
var client_sso_oidc_node_r = [{ [client_sso_oidc_node_v]: "Region" }];
var client_sso_oidc_node_data = {
    version: "1.0",
    parameters: { Region: client_sso_oidc_node_g, UseDualStack: client_sso_oidc_node_h, UseFIPS: client_sso_oidc_node_h, Endpoint: client_sso_oidc_node_g },
    rules: [
        {
            conditions: [{ [client_sso_oidc_node_t]: client_sso_oidc_node_a, [client_sso_oidc_node_u]: [client_sso_oidc_node_i] }],
            type: client_sso_oidc_node_b,
            rules: [
                { conditions: client_sso_oidc_node_p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: client_sso_oidc_node_c },
                { conditions: client_sso_oidc_node_q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: client_sso_oidc_node_c },
                { endpoint: { url: client_sso_oidc_node_i, properties: client_sso_oidc_node_l, headers: client_sso_oidc_node_l }, type: client_sso_oidc_node_d },
            ],
        },
        {
            conditions: [{ [client_sso_oidc_node_t]: client_sso_oidc_node_a, [client_sso_oidc_node_u]: client_sso_oidc_node_r }],
            type: client_sso_oidc_node_b,
            rules: [
                {
                    conditions: [{ [client_sso_oidc_node_t]: "aws.partition", [client_sso_oidc_node_u]: client_sso_oidc_node_r, assign: client_sso_oidc_node_e }],
                    type: client_sso_oidc_node_b,
                    rules: [
                        {
                            conditions: [client_sso_oidc_node_j, client_sso_oidc_node_k],
                            type: client_sso_oidc_node_b,
                            rules: [
                                {
                                    conditions: [client_sso_oidc_node_m, client_sso_oidc_node_o],
                                    type: client_sso_oidc_node_b,
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: client_sso_oidc_node_l,
                                                headers: client_sso_oidc_node_l,
                                            },
                                            type: client_sso_oidc_node_d,
                                        },
                                    ],
                                },
                                { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: client_sso_oidc_node_c },
                            ],
                        },
                        {
                            conditions: client_sso_oidc_node_p,
                            type: client_sso_oidc_node_b,
                            rules: [
                                {
                                    conditions: [client_sso_oidc_node_m],
                                    type: client_sso_oidc_node_b,
                                    rules: [
                                        {
                                            conditions: [{ [client_sso_oidc_node_t]: "stringEquals", [client_sso_oidc_node_u]: ["aws-us-gov", { [client_sso_oidc_node_t]: client_sso_oidc_node_f, [client_sso_oidc_node_u]: [client_sso_oidc_node_n, "name"] }] }],
                                            endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: client_sso_oidc_node_l, headers: client_sso_oidc_node_l },
                                            type: client_sso_oidc_node_d,
                                        },
                                        {
                                            endpoint: {
                                                url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: client_sso_oidc_node_l,
                                                headers: client_sso_oidc_node_l,
                                            },
                                            type: client_sso_oidc_node_d,
                                        },
                                    ],
                                },
                                { error: "FIPS is enabled but this partition does not support FIPS", type: client_sso_oidc_node_c },
                            ],
                        },
                        {
                            conditions: client_sso_oidc_node_q,
                            type: client_sso_oidc_node_b,
                            rules: [
                                {
                                    conditions: [client_sso_oidc_node_o],
                                    type: client_sso_oidc_node_b,
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: client_sso_oidc_node_l,
                                                headers: client_sso_oidc_node_l,
                                            },
                                            type: client_sso_oidc_node_d,
                                        },
                                    ],
                                },
                                { error: "DualStack is enabled but this partition does not support DualStack", type: client_sso_oidc_node_c },
                            ],
                        },
                        {
                            endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: client_sso_oidc_node_l, headers: client_sso_oidc_node_l },
                            type: client_sso_oidc_node_d,
                        },
                    ],
                },
            ],
        },
        { error: "Invalid Configuration: Missing Region", type: client_sso_oidc_node_c },
    ],
};
var client_sso_oidc_node_ruleSet = client_sso_oidc_node_data;
var client_sso_oidc_node_defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(client_sso_oidc_node_ruleSet, {
        endpointParams,
        logger: context.logger,
    });
};
var client_sso_oidc_node_getRuntimeConfig = (config) => ({
    apiVersion: "2019-06-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? client_sso_oidc_node_defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "SSO OIDC",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
});



var getRuntimeConfig2 = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = client_sso_oidc_node_getRuntimeConfig(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? stream_collector_streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};



var client_sso_oidc_node_asPartial = (t2) => t2;
var client_sso_oidc_node_resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...client_sso_oidc_node_asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...client_sso_oidc_node_asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
        ...client_sso_oidc_node_asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...defaultExtensionConfiguration_resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    };
};
var SSOOIDCClient = class extends Client {
    constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        const _config_1 = client_sso_oidc_node_resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = client_sso_oidc_node_resolveRuntimeExtensions(_config_6, configuration?.extensions || []);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
};








var SSOOIDCServiceException = class _SSOOIDCServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
    }
};
var AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var client_sso_oidc_node_ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var client_sso_oidc_node_InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidClientMetadataException = class _InvalidClientMetadataException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var se_CreateTokenCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/token`;
    let body;
    body = JSON.stringify(object_mapping_take(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => serde_json_json(_),
    }));
    return new httpRequest_HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
var se_RegisterClientCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/client/register`;
    let body;
    body = JSON.stringify(object_mapping_take(input, {
        clientName: [],
        clientType: [],
        scopes: (_) => serde_json_json(_),
    }));
    return new httpRequest_HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
var se_StartDeviceAuthorizationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/device_authorization`;
    let body;
    body = JSON.stringify(object_mapping_take(input, {
        clientId: [],
        clientSecret: [],
        startUrl: [],
    }));
    return new httpRequest_HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
var de_CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreateTokenCommandError(output, context);
    }
    const contents = object_mapping_map({
        $metadata: client_sso_oidc_node_deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await client_sso_oidc_node_parseBody(output.body, context)), "body");
    const doc = object_mapping_take(data, {
        accessToken: expectString,
        expiresIn: expectInt32,
        idToken: expectString,
        refreshToken: expectString,
        tokenType: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
var de_CreateTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await client_sso_oidc_node_parseErrorBody(output.body, context),
    };
    const errorCode = client_sso_oidc_node_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await client_sso_oidc_node_de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await client_sso_oidc_node_de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return client_sso_oidc_node_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
var de_RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RegisterClientCommandError(output, context);
    }
    const contents = object_mapping_map({
        $metadata: client_sso_oidc_node_deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await client_sso_oidc_node_parseBody(output.body, context)), "body");
    const doc = object_mapping_take(data, {
        authorizationEndpoint: expectString,
        clientId: expectString,
        clientIdIssuedAt: expectLong,
        clientSecret: expectString,
        clientSecretExpiresAt: expectLong,
        tokenEndpoint: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
var de_RegisterClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await client_sso_oidc_node_parseErrorBody(output.body, context),
    };
    const errorCode = client_sso_oidc_node_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
            throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await client_sso_oidc_node_de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return client_sso_oidc_node_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
var de_StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_StartDeviceAuthorizationCommandError(output, context);
    }
    const contents = object_mapping_map({
        $metadata: client_sso_oidc_node_deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await client_sso_oidc_node_parseBody(output.body, context)), "body");
    const doc = object_mapping_take(data, {
        deviceCode: expectString,
        expiresIn: expectInt32,
        interval: expectInt32,
        userCode: expectString,
        verificationUri: expectString,
        verificationUriComplete: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
var de_StartDeviceAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await client_sso_oidc_node_parseErrorBody(output.body, context),
    };
    const errorCode = client_sso_oidc_node_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await client_sso_oidc_node_de_InvalidRequestExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return client_sso_oidc_node_throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
var client_sso_oidc_node_throwDefaultError = withBaseException(SSOOIDCServiceException);
var de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new AccessDeniedException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new AuthorizationPendingException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var client_sso_oidc_node_de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new client_sso_oidc_node_ExpiredTokenException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InternalServerExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InternalServerException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidClientExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientMetadataException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidGrantException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var client_sso_oidc_node_de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new client_sso_oidc_node_InvalidRequestException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidScopeException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_SlowDownExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new SlowDownException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedClientException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
    const contents = object_mapping_map({});
    const data = parsedOutput.body;
    const doc = object_mapping_take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedGrantTypeException({
        $metadata: client_sso_oidc_node_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var client_sso_oidc_node_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
var client_sso_oidc_node_collectBodyString = (streamBody, context) => collect_stream_body_collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
var client_sso_oidc_node_parseBody = (streamBody, context) => client_sso_oidc_node_collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
var client_sso_oidc_node_parseErrorBody = async (errorBody, context) => {
    const value = await client_sso_oidc_node_parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
var client_sso_oidc_node_loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
    }
};
var CreateTokenCommand = class _CreateTokenCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, _CreateTokenCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "CreateTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSSOOIDCService",
                operation: "CreateToken",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_CreateTokenCommand(input, context);
    }
    deserialize(output, context) {
        return de_CreateTokenCommand(output, context);
    }
};




var RegisterClientCommand = class _RegisterClientCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, _RegisterClientCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "RegisterClientCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSSOOIDCService",
                operation: "RegisterClient",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_RegisterClientCommand(input, context);
    }
    deserialize(output, context) {
        return de_RegisterClientCommand(output, context);
    }
};




var StartDeviceAuthorizationCommand = class _StartDeviceAuthorizationCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, _StartDeviceAuthorizationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "StartDeviceAuthorizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSSOOIDCService",
                operation: "StartDeviceAuthorization",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_StartDeviceAuthorizationCommand(input, context);
    }
    deserialize(output, context) {
        return de_StartDeviceAuthorizationCommand(output, context);
    }
};
var commands = {
    CreateTokenCommand,
    RegisterClientCommand,
    StartDeviceAuthorizationCommand,
};
var SSOOIDC = class extends SSOOIDCClient {
};
createAggregatedClient(commands, SSOOIDC);


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js

const ssoOidcClientsHash = {};
const getSsoOidcClient = (ssoRegion) => {
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js


const getNewSsoOidcToken = (ssoToken, ssoRegion) => {
    const ssoOidcClient = getSsoOidcClient(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js


const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js


const validateTokenKey = (key, value, forRefresh = false) => {
    if (typeof value === "undefined") {
        throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js


const { writeFile } = external_fs_namespaceObject.promises;
const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = getSSOTokenFilepath(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/fromSso.js







const lastRefreshAttemptTime = new Date(0);
const fromSso = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    const profileName = getProfileName(init);
    const profile = profiles[profileName];
    if (!profile) {
        throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    }
    else if (!profile["sso_session"]) {
        throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await loadSsoSessionData(init);
    const ssoSession = ssoSessions[ssoSessionName];
    if (!ssoSession) {
        throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
    }
    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
            throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
    }
    const ssoStartUrl = ssoSession["sso_start_url"];
    const ssoRegion = ssoSession["sso_region"];
    let ssoToken;
    try {
        ssoToken = await getSSOTokenFromFile(ssoSessionName);
    }
    catch (e) {
        throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
    }
    validateTokenKey("accessToken", ssoToken.accessToken);
    validateTokenKey("expiresAt", ssoToken.expiresAt);
    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
    }
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
    validateTokenKey("clientId", ssoToken.clientId, true);
    validateTokenKey("clientSecret", ssoToken.clientSecret, true);
    validateTokenKey("refreshToken", ssoToken.refreshToken, true);
    try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
        try {
            await writeSSOTokenToFile(ssoSessionName, {
                ...ssoToken,
                accessToken: newSsoOidcToken.accessToken,
                expiresAt: newTokenExpiration.toISOString(),
                refreshToken: newSsoOidcToken.refreshToken,
            });
        }
        catch (error) {
        }
        return {
            token: newSsoOidcToken.accessToken,
            expiration: newTokenExpiration,
        };
    }
    catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js




const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profile, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    if (ssoSession) {
        try {
            const _token = await fromSso({ profile })();
            token = {
                accessToken: _token.token,
                expiresAt: new Date(_token.expiration).toISOString(),
            };
        }
        catch (e) {
            throw new CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    else {
        try {
            token = await getSSOTokenFromFile(ssoStartUrl);
        }
        catch (e) {
            throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const sso = ssoClient || new SSOClient({ region: ssoRegion });
    let ssoResp;
    try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js

const validateSsoProfile = (profile) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` +
            `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    }
    return profile;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js





const fromSSO = (init = {}) => async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
    const profileName = getProfileName(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!isSsoProfile(profile)) {
            throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile?.sso_session) {
            const ssoSessions = await loadSsoSessionData(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
        return resolveSSOCredentials({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return resolveSSOCredentials({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            profile: profileName,
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js





;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js


const resolveSsoCredentials = (data) => {
    const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = validateSsoProfile(data);
    return fromSSO({
        ssoStartUrl: sso_start_url,
        ssoAccountId: sso_account_id,
        ssoSession: sso_session,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
    })();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
const resolveStaticCredentials = (profile) => Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js

const fromWebToken = (init) => () => {
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity, } = init;
    if (!roleAssumerWithWebIdentity) {
        throw new CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity,` +
            ` but no role assumption callback was provided.`, false);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js



const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
    const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
    const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified");
    }
    return fromWebToken({
        ...init,
        webIdentityToken: (0,external_fs_namespaceObject.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js

const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
const resolveWebIdentityCredentials = async (profile, options) => fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
})();

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js






const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data);
    }
    if (isAssumeRoleProfile(data)) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
    }
    if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data);
    }
    if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
    }
    if (isProcessProfile(data)) {
        return resolveProcessCredentials_resolveProcessCredentials(options, profileName);
    }
    if (isSsoProfile(data)) {
        return resolveSsoCredentials(data);
    }
    throw new CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js


const fromIni = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProfileData(getProfileName(init), profiles, init);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js


const remoteProvider_ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const remoteProvider = (init) => {
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        return fromContainerMetadata(init);
    }
    if (process.env[remoteProvider_ENV_IMDS_DISABLED]) {
        return async () => {
            throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
    }
    return fromInstanceMetadata(init);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js








const defaultProvider = (init = {}) => memoize(chain(...(init.profile || process.env[ENV_PROFILE] ? [] : [fromEnv_fromEnv()]), fromSSO(init), fromIni(init), fromProcess(init), fromTokenFile(init), remoteProvider(init), async () => {
    throw new CredentialsProviderError("Could not load credentials from any providers", false);
}), (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000, (credentials) => credentials.expiration !== undefined);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js
const F = "required", G = "type", H = "fn", I = "argv", J = "ref";
const ruleset_a = false, ruleset_b = true, ruleset_c = "booleanEquals", ruleset_d = "stringEquals", ruleset_e = "sigv4", ruleset_f = "sts", ruleset_g = "us-east-1", ruleset_h = "endpoint", ruleset_i = "https://sts.{Region}.{PartitionResult#dnsSuffix}", ruleset_j = "tree", ruleset_k = "error", ruleset_l = "getAttr", ruleset_m = { [F]: false, [G]: "String" }, ruleset_n = { [F]: true, "default": false, [G]: "Boolean" }, ruleset_o = { [J]: "Endpoint" }, ruleset_p = { [H]: "isSet", [I]: [{ [J]: "Region" }] }, ruleset_q = { [J]: "Region" }, ruleset_r = { [H]: "aws.partition", [I]: [ruleset_q], "assign": "PartitionResult" }, ruleset_s = { [J]: "UseFIPS" }, ruleset_t = { [J]: "UseDualStack" }, ruleset_u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": ruleset_e, "signingName": ruleset_f, "signingRegion": ruleset_g }] }, "headers": {} }, ruleset_v = {}, ruleset_w = { "conditions": [{ [H]: ruleset_d, [I]: [ruleset_q, "aws-global"] }], [ruleset_h]: ruleset_u, [G]: ruleset_h }, ruleset_x = { [H]: ruleset_c, [I]: [ruleset_s, true] }, y = { [H]: ruleset_c, [I]: [ruleset_t, true] }, z = { [H]: ruleset_l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] }, A = { [J]: "PartitionResult" }, B = { [H]: ruleset_c, [I]: [true, { [H]: ruleset_l, [I]: [A, "supportsDualStack"] }] }, C = [{ [H]: "isSet", [I]: [ruleset_o] }], D = [ruleset_x], E = [y];
const ruleset_data = { version: "1.0", parameters: { Region: ruleset_m, UseDualStack: ruleset_n, UseFIPS: ruleset_n, Endpoint: ruleset_m, UseGlobalEndpoint: ruleset_n }, rules: [{ conditions: [{ [H]: ruleset_c, [I]: [{ [J]: "UseGlobalEndpoint" }, ruleset_b] }, { [H]: "not", [I]: C }, ruleset_p, ruleset_r, { [H]: ruleset_c, [I]: [ruleset_s, ruleset_a] }, { [H]: ruleset_c, [I]: [ruleset_t, ruleset_a] }], rules: [{ conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "ap-northeast-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "ap-south-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "ap-southeast-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "ap-southeast-2"] }], endpoint: ruleset_u, [G]: ruleset_h }, ruleset_w, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "ca-central-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "eu-central-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "eu-north-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "eu-west-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "eu-west-2"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "eu-west-3"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "sa-east-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, ruleset_g] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "us-east-2"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "us-west-1"] }], endpoint: ruleset_u, [G]: ruleset_h }, { conditions: [{ [H]: ruleset_d, [I]: [ruleset_q, "us-west-2"] }], endpoint: ruleset_u, [G]: ruleset_h }, { endpoint: { url: ruleset_i, properties: { authSchemes: [{ name: ruleset_e, signingName: ruleset_f, signingRegion: "{Region}" }] }, headers: ruleset_v }, [G]: ruleset_h }], [G]: ruleset_j }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: ruleset_k }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: ruleset_k }, { endpoint: { url: ruleset_o, properties: ruleset_v, headers: ruleset_v }, [G]: ruleset_h }], [G]: ruleset_j }, { conditions: [ruleset_p], rules: [{ conditions: [ruleset_r], rules: [{ conditions: [ruleset_x, y], rules: [{ conditions: [{ [H]: ruleset_c, [I]: [ruleset_b, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: ruleset_v, headers: ruleset_v }, [G]: ruleset_h }], [G]: ruleset_j }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: ruleset_k }], [G]: ruleset_j }, { conditions: D, rules: [{ conditions: [{ [H]: ruleset_c, [I]: [z, ruleset_b] }], rules: [{ conditions: [{ [H]: ruleset_d, [I]: [{ [H]: ruleset_l, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: ruleset_v, headers: ruleset_v }, [G]: ruleset_h }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: ruleset_v, headers: ruleset_v }, [G]: ruleset_h }], [G]: ruleset_j }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: ruleset_k }], [G]: ruleset_j }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: ruleset_v, headers: ruleset_v }, [G]: ruleset_h }], [G]: ruleset_j }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: ruleset_k }], [G]: ruleset_j }, ruleset_w, { endpoint: { url: ruleset_i, properties: ruleset_v, headers: ruleset_v }, [G]: ruleset_h }], [G]: ruleset_j }], [G]: ruleset_j }, { error: "Invalid Configuration: Missing Region", [G]: ruleset_k }] };
const ruleset_ruleSet = ruleset_data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js


const endpointResolver_defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleset_ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js





const runtimeConfig_shared_getRuntimeConfig = (config) => {
    return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js
















const dist_es_runtimeConfig_getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = runtimeConfig_shared_getRuntimeConfig(config);
    emitWarningIfUnsupportedVersion_emitWarningIfUnsupportedVersion(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider(defaultProvider),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: client_sts_package_namespaceObject.i8 }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? stream_collector_streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeExtensions.js



const runtimeExtensions_asPartial = (t) => t;
const runtimeExtensions_resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...runtimeExtensions_asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...runtimeExtensions_asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
        ...runtimeExtensions_asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...defaultExtensionConfiguration_resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/STSClient.js














class STSClient extends Client {
    constructor(...[configuration]) {
        const _config_0 = dist_es_runtimeConfig_getRuntimeConfig(configuration || {});
        const _config_1 = EndpointParameters_resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveStsAuthConfig(_config_5, { stsClientCtor: STSClient });
        const _config_7 = resolveUserAgentConfig(_config_6);
        const _config_8 = runtimeExtensions_resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js


const getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
        return baseCtor;
    else
        return class CustomizableSTSClient extends baseCtor {
            constructor(config) {
                super(config);
                for (const customization of customizations) {
                    this.middlewareStack.use(customization);
                }
            }
        };
};
const defaultRoleAssumers_getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const defaultRoleAssumers_getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const defaultRoleAssumers_decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: defaultRoleAssumers_getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: defaultRoleAssumers_getDefaultRoleAssumerWithWebIdentity(input),
    ...input,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
const endpoint_ruleset_w = "required", endpoint_ruleset_x = "fn", ruleset_y = "argv", ruleset_z = "ref";
const endpoint_ruleset_a = true, endpoint_ruleset_b = "isSet", endpoint_ruleset_c = "booleanEquals", endpoint_ruleset_d = "error", endpoint_ruleset_e = "endpoint", endpoint_ruleset_f = "tree", endpoint_ruleset_g = "PartitionResult", endpoint_ruleset_h = "getAttr", endpoint_ruleset_i = "stringEquals", endpoint_ruleset_j = { [endpoint_ruleset_w]: false, "type": "String" }, endpoint_ruleset_k = { [endpoint_ruleset_w]: true, "default": false, "type": "Boolean" }, endpoint_ruleset_l = { [ruleset_z]: "Endpoint" }, endpoint_ruleset_m = { [endpoint_ruleset_x]: endpoint_ruleset_c, [ruleset_y]: [{ [ruleset_z]: "UseFIPS" }, true] }, endpoint_ruleset_n = { [endpoint_ruleset_x]: endpoint_ruleset_c, [ruleset_y]: [{ [ruleset_z]: "UseDualStack" }, true] }, endpoint_ruleset_o = {}, endpoint_ruleset_p = { [ruleset_z]: "Region" }, endpoint_ruleset_q = { [endpoint_ruleset_x]: endpoint_ruleset_h, [ruleset_y]: [{ [ruleset_z]: endpoint_ruleset_g }, "supportsFIPS"] }, endpoint_ruleset_r = { [ruleset_z]: endpoint_ruleset_g }, endpoint_ruleset_s = { [endpoint_ruleset_x]: endpoint_ruleset_c, [ruleset_y]: [true, { [endpoint_ruleset_x]: endpoint_ruleset_h, [ruleset_y]: [endpoint_ruleset_r, "supportsDualStack"] }] }, endpoint_ruleset_t = [endpoint_ruleset_m], endpoint_ruleset_u = [endpoint_ruleset_n], endpoint_ruleset_v = [endpoint_ruleset_p];
const endpoint_ruleset_data = { version: "1.0", parameters: { Region: endpoint_ruleset_j, UseDualStack: endpoint_ruleset_k, UseFIPS: endpoint_ruleset_k, Endpoint: endpoint_ruleset_j }, rules: [{ conditions: [{ [endpoint_ruleset_x]: endpoint_ruleset_b, [ruleset_y]: [endpoint_ruleset_l] }], rules: [{ conditions: endpoint_ruleset_t, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: endpoint_ruleset_d }, { conditions: endpoint_ruleset_u, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: endpoint_ruleset_d }, { endpoint: { url: endpoint_ruleset_l, properties: endpoint_ruleset_o, headers: endpoint_ruleset_o }, type: endpoint_ruleset_e }], type: endpoint_ruleset_f }, { conditions: [{ [endpoint_ruleset_x]: endpoint_ruleset_b, [ruleset_y]: endpoint_ruleset_v }], rules: [{ conditions: [{ [endpoint_ruleset_x]: "aws.partition", [ruleset_y]: endpoint_ruleset_v, assign: endpoint_ruleset_g }], rules: [{ conditions: [endpoint_ruleset_m, endpoint_ruleset_n], rules: [{ conditions: [{ [endpoint_ruleset_x]: endpoint_ruleset_c, [ruleset_y]: [endpoint_ruleset_a, endpoint_ruleset_q] }, endpoint_ruleset_s], rules: [{ endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: endpoint_ruleset_o, headers: endpoint_ruleset_o }, type: endpoint_ruleset_e }], type: endpoint_ruleset_f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: endpoint_ruleset_d }], type: endpoint_ruleset_f }, { conditions: endpoint_ruleset_t, rules: [{ conditions: [{ [endpoint_ruleset_x]: endpoint_ruleset_c, [ruleset_y]: [endpoint_ruleset_q, endpoint_ruleset_a] }], rules: [{ conditions: [{ [endpoint_ruleset_x]: endpoint_ruleset_i, [ruleset_y]: [{ [endpoint_ruleset_x]: endpoint_ruleset_h, [ruleset_y]: [endpoint_ruleset_r, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://dynamodb.{Region}.amazonaws.com", properties: endpoint_ruleset_o, headers: endpoint_ruleset_o }, type: endpoint_ruleset_e }, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", properties: endpoint_ruleset_o, headers: endpoint_ruleset_o }, type: endpoint_ruleset_e }], type: endpoint_ruleset_f }, { error: "FIPS is enabled but this partition does not support FIPS", type: endpoint_ruleset_d }], type: endpoint_ruleset_f }, { conditions: endpoint_ruleset_u, rules: [{ conditions: [endpoint_ruleset_s], rules: [{ endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: endpoint_ruleset_o, headers: endpoint_ruleset_o }, type: endpoint_ruleset_e }], type: endpoint_ruleset_f }, { error: "DualStack is enabled but this partition does not support DualStack", type: endpoint_ruleset_d }], type: endpoint_ruleset_f }, { conditions: [{ [endpoint_ruleset_x]: endpoint_ruleset_i, [ruleset_y]: [endpoint_ruleset_p, "local"] }], endpoint: { url: "http://localhost:8000", properties: { authSchemes: [{ name: "sigv4", signingName: "dynamodb", signingRegion: "us-east-1" }] }, headers: endpoint_ruleset_o }, type: endpoint_ruleset_e }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", properties: endpoint_ruleset_o, headers: endpoint_ruleset_o }, type: endpoint_ruleset_e }], type: endpoint_ruleset_f }], type: endpoint_ruleset_f }, { error: "Invalid Configuration: Missing Region", type: endpoint_ruleset_d }] };
const endpoint_ruleset_ruleSet = endpoint_ruleset_data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js


const endpoint_endpointResolver_defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(endpoint_ruleset_ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js





const dist_es_runtimeConfig_shared_getRuntimeConfig = (config) => {
    return {
        apiVersion: "2012-08-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpoint_endpointResolver_defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "DynamoDB",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.js

















const client_dynamodb_dist_es_runtimeConfig_getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = dist_es_runtimeConfig_shared_getRuntimeConfig(config);
    emitWarningIfUnsupportedVersion_emitWarningIfUnsupportedVersion(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultRoleAssumers_decorateDefaultCredentialProvider(defaultProvider),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_namespaceObject.i8 }),
        endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? loadConfig(NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? stream_collector_streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js



const dist_es_runtimeExtensions_asPartial = (t) => t;
const dist_es_runtimeExtensions_resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...dist_es_runtimeExtensions_asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...dist_es_runtimeExtensions_asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
        ...dist_es_runtimeExtensions_asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...defaultExtensionConfiguration_resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
















class DynamoDBClient extends Client {
    constructor(...[configuration]) {
        const _config_0 = client_dynamodb_dist_es_runtimeConfig_getRuntimeConfig(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveAwsAuthConfig(_config_5);
        const _config_7 = resolveUserAgentConfig(_config_6);
        const _config_8 = resolveEndpointDiscoveryConfig(_config_7, {
            endpointDiscoveryCommandCtor: DescribeEndpointsCommand,
        });
        const _config_9 = dist_es_runtimeExtensions_resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
        super(_config_9);
        this.config = _config_9;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getAwsAuthPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchExecuteStatementCommand.js






class BatchExecuteStatementCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, BatchExecuteStatementCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "BatchExecuteStatementCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "BatchExecuteStatement",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_BatchExecuteStatementCommand(input, context);
    }
    deserialize(output, context) {
        return de_BatchExecuteStatementCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchGetItemCommand.js






class BatchGetItemCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, BatchGetItemCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "BatchGetItemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "BatchGetItem",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_BatchGetItemCommand(input, context);
    }
    deserialize(output, context) {
        return de_BatchGetItemCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchWriteItemCommand.js






class BatchWriteItemCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, BatchWriteItemCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "BatchWriteItemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "BatchWriteItem",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_BatchWriteItemCommand(input, context);
    }
    deserialize(output, context) {
        return de_BatchWriteItemCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateBackupCommand.js






class CreateBackupCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateBackupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "CreateBackupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "CreateBackup",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_CreateBackupCommand(input, context);
    }
    deserialize(output, context) {
        return de_CreateBackupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateGlobalTableCommand.js






class CreateGlobalTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateGlobalTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "CreateGlobalTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "CreateGlobalTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_CreateGlobalTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_CreateGlobalTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateTableCommand.js






class CreateTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "CreateTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "CreateTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_CreateTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_CreateTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteBackupCommand.js






class DeleteBackupCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteBackupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DeleteBackupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DeleteBackup",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DeleteBackupCommand(input, context);
    }
    deserialize(output, context) {
        return de_DeleteBackupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteItemCommand.js






class DeleteItemCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteItemCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DeleteItemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DeleteItem",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DeleteItemCommand(input, context);
    }
    deserialize(output, context) {
        return de_DeleteItemCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteTableCommand.js






class DeleteTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DeleteTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DeleteTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DeleteTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_DeleteTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeBackupCommand.js






class DescribeBackupCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeBackupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeBackupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeBackup",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeBackupCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeBackupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContinuousBackupsCommand.js






class DescribeContinuousBackupsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeContinuousBackupsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeContinuousBackupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeContinuousBackups",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeContinuousBackupsCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeContinuousBackupsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContributorInsightsCommand.js






class DescribeContributorInsightsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeContributorInsightsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeContributorInsightsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeContributorInsights",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeContributorInsightsCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeContributorInsightsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeExportCommand.js






class DescribeExportCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeExportCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeExportCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeExport",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeExportCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeExportCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableCommand.js






class DescribeGlobalTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeGlobalTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeGlobalTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeGlobalTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeGlobalTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeGlobalTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableSettingsCommand.js






class DescribeGlobalTableSettingsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeGlobalTableSettingsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeGlobalTableSettingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeGlobalTableSettings",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeGlobalTableSettingsCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeGlobalTableSettingsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeImportCommand.js






class DescribeImportCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeImportCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeImportCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeImport",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeImportCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeImportCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeKinesisStreamingDestinationCommand.js






class DescribeKinesisStreamingDestinationCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeKinesisStreamingDestinationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeKinesisStreamingDestinationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeKinesisStreamingDestination",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeKinesisStreamingDestinationCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeKinesisStreamingDestinationCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeLimitsCommand.js






class DescribeLimitsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeLimitsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeLimitsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeLimits",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeLimitsCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeLimitsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableCommand.js






class DescribeTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableReplicaAutoScalingCommand.js






class DescribeTableReplicaAutoScalingCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTableReplicaAutoScalingCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeTableReplicaAutoScalingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeTableReplicaAutoScaling",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeTableReplicaAutoScalingCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeTableReplicaAutoScalingCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTimeToLiveCommand.js






class DescribeTimeToLiveCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTimeToLiveCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeTimeToLiveCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DescribeTimeToLive",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DescribeTimeToLiveCommand(input, context);
    }
    deserialize(output, context) {
        return de_DescribeTimeToLiveCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DisableKinesisStreamingDestinationCommand.js






class DisableKinesisStreamingDestinationCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DisableKinesisStreamingDestinationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DisableKinesisStreamingDestinationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "DisableKinesisStreamingDestination",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_DisableKinesisStreamingDestinationCommand(input, context);
    }
    deserialize(output, context) {
        return de_DisableKinesisStreamingDestinationCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/EnableKinesisStreamingDestinationCommand.js






class EnableKinesisStreamingDestinationCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, EnableKinesisStreamingDestinationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "EnableKinesisStreamingDestinationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "EnableKinesisStreamingDestination",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_EnableKinesisStreamingDestinationCommand(input, context);
    }
    deserialize(output, context) {
        return de_EnableKinesisStreamingDestinationCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteStatementCommand.js






class ExecuteStatementCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ExecuteStatementCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ExecuteStatementCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ExecuteStatement",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ExecuteStatementCommand(input, context);
    }
    deserialize(output, context) {
        return de_ExecuteStatementCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteTransactionCommand.js






class ExecuteTransactionCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ExecuteTransactionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ExecuteTransactionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ExecuteTransaction",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ExecuteTransactionCommand(input, context);
    }
    deserialize(output, context) {
        return de_ExecuteTransactionCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExportTableToPointInTimeCommand.js






class ExportTableToPointInTimeCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ExportTableToPointInTimeCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ExportTableToPointInTimeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ExportTableToPointInTime",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ExportTableToPointInTimeCommand(input, context);
    }
    deserialize(output, context) {
        return de_ExportTableToPointInTimeCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/GetItemCommand.js






class GetItemCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetItemCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "GetItemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "GetItem",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_GetItemCommand(input, context);
    }
    deserialize(output, context) {
        return de_GetItemCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ImportTableCommand.js






class ImportTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ImportTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ImportTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ImportTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ImportTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_ImportTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListBackupsCommand.js






class ListBackupsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListBackupsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ListBackupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ListBackups",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ListBackupsCommand(input, context);
    }
    deserialize(output, context) {
        return de_ListBackupsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListContributorInsightsCommand.js






class ListContributorInsightsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListContributorInsightsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ListContributorInsightsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ListContributorInsights",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ListContributorInsightsCommand(input, context);
    }
    deserialize(output, context) {
        return de_ListContributorInsightsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListExportsCommand.js






class ListExportsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListExportsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ListExportsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ListExports",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ListExportsCommand(input, context);
    }
    deserialize(output, context) {
        return de_ListExportsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListGlobalTablesCommand.js






class ListGlobalTablesCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListGlobalTablesCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ListGlobalTablesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ListGlobalTables",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ListGlobalTablesCommand(input, context);
    }
    deserialize(output, context) {
        return de_ListGlobalTablesCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListImportsCommand.js






class ListImportsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListImportsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ListImportsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ListImports",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ListImportsCommand(input, context);
    }
    deserialize(output, context) {
        return de_ListImportsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTablesCommand.js






class ListTablesCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListTablesCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ListTablesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ListTables",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ListTablesCommand(input, context);
    }
    deserialize(output, context) {
        return de_ListTablesCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTagsOfResourceCommand.js






class ListTagsOfResourceCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListTagsOfResourceCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ListTagsOfResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "ListTagsOfResource",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ListTagsOfResourceCommand(input, context);
    }
    deserialize(output, context) {
        return de_ListTagsOfResourceCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/PutItemCommand.js






class PutItemCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutItemCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "PutItemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "PutItem",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_PutItemCommand(input, context);
    }
    deserialize(output, context) {
        return de_PutItemCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js






class QueryCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, QueryCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "QueryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "Query",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_QueryCommand(input, context);
    }
    deserialize(output, context) {
        return de_QueryCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableFromBackupCommand.js






class RestoreTableFromBackupCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, RestoreTableFromBackupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "RestoreTableFromBackupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "RestoreTableFromBackup",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_RestoreTableFromBackupCommand(input, context);
    }
    deserialize(output, context) {
        return de_RestoreTableFromBackupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableToPointInTimeCommand.js






class RestoreTableToPointInTimeCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, RestoreTableToPointInTimeCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "RestoreTableToPointInTimeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "RestoreTableToPointInTime",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_RestoreTableToPointInTimeCommand(input, context);
    }
    deserialize(output, context) {
        return de_RestoreTableToPointInTimeCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ScanCommand.js






class ScanCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ScanCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "ScanCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "Scan",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_ScanCommand(input, context);
    }
    deserialize(output, context) {
        return de_ScanCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TagResourceCommand.js






class TagResourceCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, TagResourceCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "TagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "TagResource",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_TagResourceCommand(input, context);
    }
    deserialize(output, context) {
        return de_TagResourceCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactGetItemsCommand.js






class TransactGetItemsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, TransactGetItemsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "TransactGetItemsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "TransactGetItems",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_TransactGetItemsCommand(input, context);
    }
    deserialize(output, context) {
        return de_TransactGetItemsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactWriteItemsCommand.js






class TransactWriteItemsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, TransactWriteItemsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "TransactWriteItemsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "TransactWriteItems",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_TransactWriteItemsCommand(input, context);
    }
    deserialize(output, context) {
        return de_TransactWriteItemsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UntagResourceCommand.js






class UntagResourceCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UntagResourceCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UntagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UntagResource",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UntagResourceCommand(input, context);
    }
    deserialize(output, context) {
        return de_UntagResourceCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContinuousBackupsCommand.js






class UpdateContinuousBackupsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateContinuousBackupsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateContinuousBackupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateContinuousBackups",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateContinuousBackupsCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateContinuousBackupsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContributorInsightsCommand.js






class UpdateContributorInsightsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateContributorInsightsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateContributorInsightsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateContributorInsights",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateContributorInsightsCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateContributorInsightsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableCommand.js






class UpdateGlobalTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateGlobalTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateGlobalTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateGlobalTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateGlobalTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateGlobalTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableSettingsCommand.js






class UpdateGlobalTableSettingsCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateGlobalTableSettingsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateGlobalTableSettingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateGlobalTableSettings",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateGlobalTableSettingsCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateGlobalTableSettingsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateItemCommand.js






class UpdateItemCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateItemCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateItemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateItem",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateItemCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateItemCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableCommand.js






class UpdateTableCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTableCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateTable",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateTableCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateTableCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableReplicaAutoScalingCommand.js






class UpdateTableReplicaAutoScalingCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTableReplicaAutoScalingCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateTableReplicaAutoScalingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateTableReplicaAutoScaling",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateTableReplicaAutoScalingCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateTableReplicaAutoScalingCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTimeToLiveCommand.js






class UpdateTimeToLiveCommand extends Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTimeToLiveCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateTimeToLiveCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "DynamoDB_20120810",
                operation: "UpdateTimeToLive",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateTimeToLiveCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateTimeToLiveCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDB.js























































const DynamoDB_commands = {
    BatchExecuteStatementCommand: BatchExecuteStatementCommand,
    BatchGetItemCommand: BatchGetItemCommand,
    BatchWriteItemCommand: BatchWriteItemCommand,
    CreateBackupCommand: CreateBackupCommand,
    CreateGlobalTableCommand: CreateGlobalTableCommand,
    CreateTableCommand: CreateTableCommand,
    DeleteBackupCommand: DeleteBackupCommand,
    DeleteItemCommand: DeleteItemCommand,
    DeleteTableCommand: DeleteTableCommand,
    DescribeBackupCommand: DescribeBackupCommand,
    DescribeContinuousBackupsCommand: DescribeContinuousBackupsCommand,
    DescribeContributorInsightsCommand: DescribeContributorInsightsCommand,
    DescribeEndpointsCommand: DescribeEndpointsCommand,
    DescribeExportCommand: DescribeExportCommand,
    DescribeGlobalTableCommand: DescribeGlobalTableCommand,
    DescribeGlobalTableSettingsCommand: DescribeGlobalTableSettingsCommand,
    DescribeImportCommand: DescribeImportCommand,
    DescribeKinesisStreamingDestinationCommand: DescribeKinesisStreamingDestinationCommand,
    DescribeLimitsCommand: DescribeLimitsCommand,
    DescribeTableCommand: DescribeTableCommand,
    DescribeTableReplicaAutoScalingCommand: DescribeTableReplicaAutoScalingCommand,
    DescribeTimeToLiveCommand: DescribeTimeToLiveCommand,
    DisableKinesisStreamingDestinationCommand: DisableKinesisStreamingDestinationCommand,
    EnableKinesisStreamingDestinationCommand: EnableKinesisStreamingDestinationCommand,
    ExecuteStatementCommand: ExecuteStatementCommand,
    ExecuteTransactionCommand: ExecuteTransactionCommand,
    ExportTableToPointInTimeCommand: ExportTableToPointInTimeCommand,
    GetItemCommand: GetItemCommand,
    ImportTableCommand: ImportTableCommand,
    ListBackupsCommand: ListBackupsCommand,
    ListContributorInsightsCommand: ListContributorInsightsCommand,
    ListExportsCommand: ListExportsCommand,
    ListGlobalTablesCommand: ListGlobalTablesCommand,
    ListImportsCommand: ListImportsCommand,
    ListTablesCommand: ListTablesCommand,
    ListTagsOfResourceCommand: ListTagsOfResourceCommand,
    PutItemCommand: PutItemCommand,
    QueryCommand: QueryCommand,
    RestoreTableFromBackupCommand: RestoreTableFromBackupCommand,
    RestoreTableToPointInTimeCommand: RestoreTableToPointInTimeCommand,
    ScanCommand: ScanCommand,
    TagResourceCommand: TagResourceCommand,
    TransactGetItemsCommand: TransactGetItemsCommand,
    TransactWriteItemsCommand: TransactWriteItemsCommand,
    UntagResourceCommand: UntagResourceCommand,
    UpdateContinuousBackupsCommand: UpdateContinuousBackupsCommand,
    UpdateContributorInsightsCommand: UpdateContributorInsightsCommand,
    UpdateGlobalTableCommand: UpdateGlobalTableCommand,
    UpdateGlobalTableSettingsCommand: UpdateGlobalTableSettingsCommand,
    UpdateItemCommand: UpdateItemCommand,
    UpdateTableCommand: UpdateTableCommand,
    UpdateTableReplicaAutoScalingCommand: UpdateTableReplicaAutoScalingCommand,
    UpdateTimeToLiveCommand: UpdateTimeToLiveCommand,
};
class DynamoDB extends DynamoDBClient {
}
createAggregatedClient(DynamoDB_commands, DynamoDB);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/index.js






















































;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListContributorInsightsPaginator.js


const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListContributorInsightsCommand(input), ...args);
};
async function* paginateListContributorInsights(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListExportsPaginator.js


const ListExportsPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListExportsCommand(input), ...args);
};
async function* paginateListExports(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
            page = await ListExportsPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListImportsPaginator.js


const ListImportsPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListImportsCommand(input), ...args);
};
async function* paginateListImports(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["PageSize"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
            page = await ListImportsPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListTablesPaginator.js


const ListTablesPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListTablesCommand(input), ...args);
};
async function* paginateListTables(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartTableName = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
            page = await ListTablesPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.LastEvaluatedTableName;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/QueryPaginator.js


const QueryPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new QueryCommand(input), ...args);
};
async function* paginateQuery(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartKey = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
            page = await QueryPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.LastEvaluatedKey;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ScanPaginator.js


const ScanPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ScanCommand(input), ...args);
};
async function* paginateScan(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartKey = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
            page = await ScanPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.LastEvaluatedKey;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/index.js








;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/utils/sleep.js
const sleep = (seconds) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/waiter.js
const waiterServiceDefaults = {
    minDelay: 2,
    maxDelay: 120,
};
var WaiterState;
(function (WaiterState) {
    WaiterState["ABORTED"] = "ABORTED";
    WaiterState["FAILURE"] = "FAILURE";
    WaiterState["SUCCESS"] = "SUCCESS";
    WaiterState["RETRY"] = "RETRY";
    WaiterState["TIMEOUT"] = "TIMEOUT";
})(WaiterState || (WaiterState = {}));
const checkExceptions = (result) => {
    if (result.state === WaiterState.ABORTED) {
        const abortError = new Error(`${JSON.stringify({
            ...result,
            reason: "Request was aborted",
        })}`);
        abortError.name = "AbortError";
        throw abortError;
    }
    else if (result.state === WaiterState.TIMEOUT) {
        const timeoutError = new Error(`${JSON.stringify({
            ...result,
            reason: "Waiter has timed out",
        })}`);
        timeoutError.name = "TimeoutError";
        throw timeoutError;
    }
    else if (result.state !== WaiterState.SUCCESS) {
        throw new Error(`${JSON.stringify({ result })}`);
    }
    return result;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/poller.js


const exponentialBackoffWithJitter = (minDelay, maxDelay, attemptCeiling, attempt) => {
    if (attempt > attemptCeiling)
        return maxDelay;
    const delay = minDelay * 2 ** (attempt - 1);
    return randomInRange(minDelay, delay);
};
const randomInRange = (min, max) => min + Math.random() * (max - min);
const runPolling = async ({ minDelay, maxDelay, maxWaitTime, abortController, client, abortSignal }, input, acceptorChecks) => {
    const { state, reason } = await acceptorChecks(client, input);
    if (state !== WaiterState.RETRY) {
        return { state, reason };
    }
    let currentAttempt = 1;
    const waitUntil = Date.now() + maxWaitTime * 1000;
    const attemptCeiling = Math.log(maxDelay / minDelay) / Math.log(2) + 1;
    while (true) {
        if (abortController?.signal?.aborted || abortSignal?.aborted) {
            return { state: WaiterState.ABORTED };
        }
        const delay = exponentialBackoffWithJitter(minDelay, maxDelay, attemptCeiling, currentAttempt);
        if (Date.now() + delay * 1000 > waitUntil) {
            return { state: WaiterState.TIMEOUT };
        }
        await sleep(delay);
        const { state, reason } = await acceptorChecks(client, input);
        if (state !== WaiterState.RETRY) {
            return { state, reason };
        }
        currentAttempt += 1;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/utils/validate.js
const validateWaiterOptions = (options) => {
    if (options.maxWaitTime < 1) {
        throw new Error(`WaiterConfiguration.maxWaitTime must be greater than 0`);
    }
    else if (options.minDelay < 1) {
        throw new Error(`WaiterConfiguration.minDelay must be greater than 0`);
    }
    else if (options.maxDelay < 1) {
        throw new Error(`WaiterConfiguration.maxDelay must be greater than 0`);
    }
    else if (options.maxWaitTime <= options.minDelay) {
        throw new Error(`WaiterConfiguration.maxWaitTime [${options.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    }
    else if (options.maxDelay < options.minDelay) {
        throw new Error(`WaiterConfiguration.maxDelay [${options.maxDelay}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/createWaiter.js



const abortTimeout = async (abortSignal) => {
    return new Promise((resolve) => {
        abortSignal.onabort = () => resolve({ state: WaiterState.ABORTED });
    });
};
const createWaiter = async (options, input, acceptorChecks) => {
    const params = {
        ...waiterServiceDefaults,
        ...options,
    };
    validateWaiterOptions(params);
    const exitConditions = [runPolling(params, input, acceptorChecks)];
    if (options.abortController) {
        exitConditions.push(abortTimeout(options.abortController.signal));
    }
    if (options.abortSignal) {
        exitConditions.push(abortTimeout(options.abortSignal));
    }
    return Promise.race(exitConditions);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableExists.js


const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeTableCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Table.TableStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: WaiterState.RETRY, reason };
        }
    }
    return { state: WaiterState.RETRY, reason };
};
const waitForTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
const waitUntilTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableNotExists.js


const waitForTableNotExists_checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeTableCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: WaiterState.SUCCESS, reason };
        }
    }
    return { state: WaiterState.RETRY, reason };
};
const waitForTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, waitForTableNotExists_checkState);
};
const waitUntilTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, waitForTableNotExists_checkState);
    return checkExceptions(result);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/models/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/index.js










/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromUtf8: () => (/* binding */ dist_es_fromUtf8),
  toUtf8: () => (/* binding */ dist_es_toUtf8)
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js
const fromUtf8 = (input) => {
    const bytes = [];
    for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 0b11000000, (value & 0b111111) | 0b10000000);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 0b1111111111) << 10) + (input.charCodeAt(++i) & 0b1111111111);
            bytes.push((surrogatePair >> 18) | 0b11110000, ((surrogatePair >> 12) & 0b111111) | 0b10000000, ((surrogatePair >> 6) & 0b111111) | 0b10000000, (surrogatePair & 0b111111) | 0b10000000);
        }
        else {
            bytes.push((value >> 12) | 0b11100000, ((value >> 6) & 0b111111) | 0b10000000, (value & 0b111111) | 0b10000000);
        }
    }
    return Uint8Array.from(bytes);
};
const toUtf8 = (input) => {
    let decoded = "";
    for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (0b11000000 <= byte && byte < 0b11100000) {
            const nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 0b11111) << 6) | (nextByte & 0b111111));
        }
        else if (0b11110000 <= byte && byte < 0b101101101) {
            const surrogatePair = [byte, input[++i], input[++i], input[++i]];
            const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 0b1111) << 12) | ((input[++i] & 0b111111) << 6) | (input[++i] & 0b111111));
        }
    }
    return decoded;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js
function whatwgEncodingApi_fromUtf8(input) {
    return new TextEncoder().encode(input);
}
function whatwgEncodingApi_toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js


const dist_es_fromUtf8 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_fromUtf8(input) : fromUtf8(input);
const dist_es_toUtf8 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_toUtf8(input) : toUtf8(input);


/***/ }),

/***/ 932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const validator = __webpack_require__(501);
const XMLParser = __webpack_require__(844);
const XMLBuilder = __webpack_require__(192);

module.exports = {
  XMLParser: XMLParser,
  XMLValidator: validator,
  XMLBuilder: XMLBuilder
}

/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*'
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;


/***/ }),

/***/ 501:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const util = __webpack_require__(849);

const defaultOptions = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = Object.assign({}, defaultOptions, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  
  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      let tagStartPos = i;
      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag',
                "Expected closing tag '"+otg.tagName+"' (opened in line "+openPos.line+", col "+openPos.col+") instead of closing tag '"+tagName+"'.",
                getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if(options.unpairedTags.indexOf(tagName) !== -1){
            //don't push into stack
          } else {
            tags.push({tagName, tagStartPos});
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else{
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }else{
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if ( isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  }else if (tags.length == 1) {
      return getErrorObject('InvalidTag', "Unclosed tag '"+tags[0].tagName+"'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  }else if (tags.length > 0) {
      return getErrorObject('InvalidXml', "Invalid '"+
          JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '')+
          "' found.", {line: 1, col: 1});
  }

  return true;
};

function isWhiteSpace(char){
  return char === ' ' || char === '\t' || char === '\n'  || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

const doubleQuote = '"';
const singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(matches[i]))
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(matches[i]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,

    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}


/***/ }),

/***/ 192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

//parse Empty Node as self closing node
const buildFromOrderedJs = __webpack_require__(592);

const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function(key, a) {
    return a;
  },
  attributeValueProcessor: function(attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },//it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("\'", "g"), val: "&apos;" },
    { regex: new RegExp("\"", "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: false
};

function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes || this.options.attributesGroupName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }

  this.processTextOrObjNode = processTextOrObjNode

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}

Builder.prototype.build = function(jObj) {
  if(this.options.preserveOrder){
    return buildFromOrderedJs(jObj, this.options);
  }else {
    if(Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1){
      jObj = {
        [this.options.arrayNodeName] : jObj
      }
    }
    return this.j2x(jObj, 0).val;
  }
};

Builder.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  for (let key in jObj) {
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node
    } else if (jObj[key] === null) {
      if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
      else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
      // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
      }else {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextValNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      let listTagVal = "";
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') {
          // supress undefined node
        } else if (item === null) {
          if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
          else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          if(this.options.oneListGroup ){
            listTagVal += this.j2x(item, level + 1).val;
          }else{
            listTagVal += this.processTextOrObjNode(item, key, level)
          }
        } else {
          listTagVal += this.buildTextValNode(item, key, '', level);
        }
      }
      if(this.options.oneListGroup){
        listTagVal = this.buildObjectNode(listTagVal, key, '', level);
      }
      val += listTagVal;
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], '' + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level)
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

Builder.prototype.buildAttrPairStr = function(attrName, val){
  val = this.options.attributeValueProcessor(attrName, '' + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + val + '"';
}

function processTextOrObjNode (object, key, level) {
  const result = this.j2x(object, level + 1);
  if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}

Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
  if(val === ""){
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  }else{

    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";
    
    if(key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }
  
    if (attrStr && val.indexOf('<') === -1) {
      return ( this.indentate(level) + '<' +  key + attrStr + piClosingChar + '>' + val + tagEndExp );
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    }else {
      return (
        this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar +
        val +
        this.indentate(level) + tagEndExp    );
    }
  }
}

Builder.prototype.closeTag = function(key){
  let closeTag = "";
  if(this.options.unpairedTags.indexOf(key) !== -1){ //unpaired
    if(!this.options.suppressUnpairedNode) closeTag = "/"
  }else if(this.options.suppressEmptyNode){ //empty
    closeTag = "/";
  }else{
    closeTag = `></${key}`
  }
  return closeTag;
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return  this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
      // return this.buildTagStr(level,key, attrStr);
    }
  }
}

Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` +  this.newLine;
  }else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` +  this.newLine;
  }else if(key[0] === "?") {//PI tag
    return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar; 
  }else{
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
  
    if( textValue === ''){
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }else{
      return this.indentate(level) + '<' + key + attrStr + '>' +
         textValue +
        '</' + key + this.tagEndChar;
    }
  }
}

Builder.prototype.replaceEntitiesValue = function(textValue){
  if(textValue && textValue.length > 0 && this.options.processEntities){
    for (let i=0; i<this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

module.exports = Builder;


/***/ }),

/***/ 592:
/***/ ((module) => {

const EOL = "\n";

/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */
function toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
}

function arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;

    for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName
        else newJPath = `${jPath}.${tagName}`;

        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }

    return xmlStr;
}

function propName(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
    }
}

function attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
        }
    }
    return attrStr;
}

function isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}

function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}
module.exports = toXml;


/***/ }),

/***/ 780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(849);

//TODO: handle comments
function readDocType(xmlData, i){
    
    const entities = {};
    if( xmlData[i + 3] === 'O' &&
         xmlData[i + 4] === 'C' &&
         xmlData[i + 5] === 'T' &&
         xmlData[i + 6] === 'Y' &&
         xmlData[i + 7] === 'P' &&
         xmlData[i + 8] === 'E')
    {    
        i = i+9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(;i<xmlData.length;i++){
            if (xmlData[i] === '<' && !comment) { //Determine the tag type
                if( hasBody && isEntity(xmlData, i)){
                    i += 7; 
                    [entityName, val,i] = readEntityExp(xmlData,i+1);
                    if(val.indexOf("&") === -1) //Parameter entities are not supported
                        entities[ validateEntityName(entityName) ] = {
                            regx : RegExp( `&${entityName};`,"g"),
                            val: val
                        };
                }
                else if( hasBody && isElement(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isAttlist(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isNotation(xmlData, i)) i += 9;//Not supported
                else if( isComment)                         comment = true;
                else                                        throw new Error("Invalid DOCTYPE");

                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === '>') { //Read tag content
                if(comment){
                    if( xmlData[i - 1] === "-" && xmlData[i - 2] === "-"){
                        comment = false;
                        angleBracketsCount--;
                    }
                }else{
                    angleBracketsCount--;
                }
                if (angleBracketsCount === 0) {
                  break;
                }
            }else if( xmlData[i] === '['){
                hasBody = true;
            }else{
                exp += xmlData[i];
            }
        }
        if(angleBracketsCount !== 0){
            throw new Error(`Unclosed DOCTYPE`);
        }
    }else{
        throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return {entities, i};
}

function readEntityExp(xmlData,i){
    //External entities are not supported
    //    <!ENTITY ext SYSTEM "http://normal-website.com" >

    //Parameter entities are not supported
    //    <!ENTITY entityname "&anotherElement;">

    //Internal entities are supported
    //    <!ENTITY entityname "replacement text">
    
    //read EntityName
    let entityName = "";
    for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"' ); i++) {
        // if(xmlData[i] === " ") continue;
        // else 
        entityName += xmlData[i];
    }
    entityName = entityName.trim();
    if(entityName.indexOf(" ") !== -1) throw new Error("External entites are not supported");

    //read Entity Value
    const startChar = xmlData[i++];
    let val = ""
    for (; i < xmlData.length && xmlData[i] !== startChar ; i++) {
        val += xmlData[i];
    }
    return [entityName, val, i];
}

function isComment(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === '-' &&
    xmlData[i+3] === '-') return true
    return false
}
function isEntity(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'N' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'I' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'Y') return true
    return false
}
function isElement(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'L' &&
    xmlData[i+4] === 'E' &&
    xmlData[i+5] === 'M' &&
    xmlData[i+6] === 'E' &&
    xmlData[i+7] === 'N' &&
    xmlData[i+8] === 'T') return true
    return false
}

function isAttlist(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'A' &&
    xmlData[i+3] === 'T' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'L' &&
    xmlData[i+6] === 'I' &&
    xmlData[i+7] === 'S' &&
    xmlData[i+8] === 'T') return true
    return false
}
function isNotation(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'N' &&
    xmlData[i+3] === 'O' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'A' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'I' &&
    xmlData[i+8] === 'O' &&
    xmlData[i+9] === 'N') return true
    return false
}

function validateEntityName(name){
    if (util.isName(name))
	return name;
    else
        throw new Error(`Invalid entity name ${name}`);
}

module.exports = readDocType;


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports) => {


const defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false, // remove NS from tag name or attribute name if true
    allowBooleanAttributes: false, //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true, //Trim string values of tag and attributes
    cdataPropName: false,
    numberParseOptions: {
      hex: true,
      leadingZeros: true,
      eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
      return val;
    },
    attributeValueProcessor: function(attrName, val) {
      return val;
    },
    stopNodes: [], //nested tags will not be parsed even for errors
    alwaysCreateTextNode: false,
    isArray: () => false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs){
      return tagName
    },
    // skipEmptyListItem: false
};
   
const buildOptions = function(options) {
    return Object.assign({}, defaultOptions, options);
};

exports.buildOptions = buildOptions;
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ 96:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

///@ts-check

const util = __webpack_require__(849);
const xmlNode = __webpack_require__(311);
const readDocType = __webpack_require__(780);
const toNumber = __webpack_require__(153);

const regx =
  '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

class OrderedObjParser{
  constructor(options){
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos" : { regex: /&(apos|#39|#x27);/g, val : "'"},
      "gt" : { regex: /&(gt|#62|#x3E);/g, val : ">"},
      "lt" : { regex: /&(lt|#60|#x3C);/g, val : "<"},
      "quot" : { regex: /&(quot|#34|#x22);/g, val : "\""},
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val : "&"};
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent" : { regex: /&(cent|#162);/g, val: "¢" },
      "pound" : { regex: /&(pound|#163);/g, val: "£" },
      "yen" : { regex: /&(yen|#165);/g, val: "¥" },
      "euro" : { regex: /&(euro|#8364);/g, val: "€" },
      "copyright" : { regex: /&(copy|#169);/g, val: "©" },
      "reg" : { regex: /&(reg|#174);/g, val: "®" },
      "inr" : { regex: /&(inr|#8377);/g, val: "₹" },
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
  }

}

function addExternalEntities(externalEntities){
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
       regex: new RegExp("&"+ent+";","g"),
       val : externalEntities[ent]
    }
  }
}

/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== undefined) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if(val.length > 0){
      if(!escapeEntities) val = this.replaceEntitiesValue(val);
      
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if(newval === null || newval === undefined){
        //don't parse
        return val;
      }else if(typeof newval !== typeof val || newval !== val){
        //overwrite
        return newval;
      }else if(this.options.trimValues){
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      }else{
        const trimmedVal = val.trim();
        if(trimmedVal === val){
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        }else{
          return val;
        }
      }
    }
  }
}

function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');

function buildAttributesMap(attrStr, jPath, tagName) {
  if (!this.options.ignoreAttributes && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if(aName === "__proto__") aName  = "#__proto__";
        if (oldVal !== undefined) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if(newVal === null || newVal === undefined){
            //don't parse
            attrs[aName] = oldVal;
          }else if(typeof newVal !== typeof oldVal || newVal !== oldVal){
            //overwrite
            attrs[aName] = newVal;
          }else{
            //parse
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs
  }
}

const parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for(let i=0; i< xmlData.length; i++){//for each char in XML data
    const ch = xmlData[i];
    if(ch === '<'){
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(this.options.removeNSPrefix){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        if(this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }

        if(currentNode){
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }

        //check if last tag of nested tag was unpaired tag
        const lastTagName = jPath.substring(jPath.lastIndexOf(".")+1);
        if(tagName && this.options.unpairedTags.indexOf(tagName) !== -1 ){
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0
        if(lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1 ){
          propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.')-1)
          this.tagsNodeStack.pop();
        }else{
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);

        currentNode = this.tagsNodeStack.pop();//avoid recursion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {

        let tagData = readTagExp(xmlData,i, false, "?>");
        if(!tagData) throw new Error("Pi Tag is not closed.");

        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if( (this.options.ignoreDeclaration && tagData.tagName === "?xml") || this.options.ignorePiTags){

        }else{
  
          const childNode = new xmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          
          if(tagData.tagName !== tagData.tagExp && tagData.attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
          }
          this.addChild(currentNode, childNode, jPath)

        }


        i = tagData.closeIndex + 1;
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        const endIndex = findClosingIndex(xmlData, "-->", i+4, "Comment is not closed.")
        if(this.options.commentPropName){
          const comment = xmlData.substring(i + 4, endIndex - 2);

          textData = this.saveTextToParentTag(textData, currentNode, jPath);

          currentNode.add(this.options.commentPropName, [ { [this.options.textNodeName] : comment } ]);
        }
        i = endIndex;
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const result = readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9,closeIndex);

        textData = this.saveTextToParentTag(textData, currentNode, jPath);

        //cdata should be set even if it is 0 length string
        if(this.options.cdataPropName){
          // let val = this.parseTextData(tagExp, this.options.cdataPropName, jPath + "." + this.options.cdataPropName, true, false, true);
          // if(!val) val = "";
          currentNode.add(this.options.cdataPropName, [ { [this.options.textNodeName] : tagExp } ]);
        }else{
          let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
          if(val == undefined) val = "";
          currentNode.add(this.options.textNodeName, val);
        }
        
        i = closeIndex + 2;
      }else {//Opening tag
        let result = readTagExp(xmlData,i, this.options.removeNSPrefix);
        let tagName= result.tagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;

        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        
        //save text as child node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }

        //check if last tag was unpaired tag
        const lastTag = currentNode;
        if(lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1 ){
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if(tagName !== xmlObj.tagname){
          jPath += jPath ? "." + tagName : tagName;
        }
        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) { //TODO: namespace
          let tagContent = "";
          //self-closing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            i = result.closeIndex;
          }
          //unpaired tag
          else if(this.options.unpairedTags.indexOf(tagName) !== -1){
            i = result.closeIndex;
          }
          //normal tag
          else{
            //read until closing tag is found
            const result = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
            if(!result) throw new Error(`Unexpected end of ${tagName}`);
            i = result.i;
            tagContent = result.tagContent;
          }

          const childNode = new xmlNode(tagName);
          if(tagName !== tagExp && attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
          }
          if(tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          
          this.addChild(currentNode, childNode, jPath)
        }else{
  //selfClosing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              tagExp = tagName;
            }else{
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            
            if(this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }

            const childNode = new xmlNode(tagName);
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath)
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          }
    //opening tag
          else{
            const childNode = new xmlNode( tagName);
            this.tagsNodeStack.push(currentNode);
            
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath)
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    }else{
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
}

function addChild(currentNode, childNode, jPath){
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"])
  if(result === false){
  }else if(typeof result === "string"){
    childNode.tagname = result
    currentNode.addChild(childNode);
  }else{
    currentNode.addChild(childNode);
  }
}

const replaceEntitiesValue = function(val){

  if(this.options.processEntities){
    for(let entityName in this.docTypeEntities){
      const entity = this.docTypeEntities[entityName];
      val = val.replace( entity.regx, entity.val);
    }
    for(let entityName in this.lastEntities){
      const entity = this.lastEntities[entityName];
      val = val.replace( entity.regex, entity.val);
    }
    if(this.options.htmlEntities){
      for(let entityName in this.htmlEntities){
        const entity = this.htmlEntities[entityName];
        val = val.replace( entity.regex, entity.val);
      }
    }
    val = val.replace( this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
}
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) { //store previously collected data as textNode
    if(isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0
    
    textData = this.parseTextData(textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode);

    if (textData !== undefined && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */
function isItStopNode(stopNodes, jPath, currentTagName){
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if( allNodesExp === stopNodeExp || jPath === stopNodeExp  ) return true;
  }
  return false;
}

/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */
function tagExpWithClosingIndex(xmlData, i, closingChar = ">"){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if(closingChar[1]){
        if(xmlData[index + 1] === closingChar[1]){
          return {
            data: tagExp,
            index: index
          }
        }
      }else{
        return {
          data: tagExp,
          index: index
        }
      }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else{
    return closingIndex + str.length - 1;
  }
}

function readTagExp(xmlData,i, removeNSPrefix, closingChar = ">"){
  const result = tagExpWithClosingIndex(xmlData, i+1, closingChar);
  if(!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if(separatorIndex !== -1){//separate tag name and attributes expression
    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
    tagExp = tagExp.substr(separatorIndex + 1);
  }

  if(removeNSPrefix){
    const colonIndex = tagName.indexOf(":");
    if(colonIndex !== -1){
      tagName = tagName.substr(colonIndex+1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }

  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
  }
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */
function readStopNodeData(xmlData, tagName, i){
  const startIndex = i;
  // Starting at 1 since we already have an open tag
  let openTagCount = 1;

  for (; i < xmlData.length; i++) {
    if( xmlData[i] === "<"){ 
      if (xmlData[i+1] === "/") {//close tag
          const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
          let closeTagName = xmlData.substring(i+2,closeIndex).trim();
          if(closeTagName === tagName){
            openTagCount--;
            if (openTagCount === 0) {
              return {
                tagContent: xmlData.substring(startIndex, i),
                i : closeIndex
              }
            }
          }
          i=closeIndex;
        } else if(xmlData[i+1] === '?') { 
          const closeIndex = findClosingIndex(xmlData, "?>", i+1, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 3) === '!--') { 
          const closeIndex = findClosingIndex(xmlData, "-->", i+3, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 2) === '![') { 
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
          i=closeIndex;
        } else {
          const tagData = readTagExp(xmlData, i, '>')

          if (tagData) {
            const openTagName = tagData && tagData.tagName;
            if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length-1] !== "/") {
              openTagCount++;
            }
            i=tagData.closeIndex;
          }
        }
      }
  }//end for loop
}

function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    const newval = val.trim();
    if(newval === 'true' ) return true;
    else if(newval === 'false' ) return false;
    else return toNumber(val, options);
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}


module.exports = OrderedObjParser;


/***/ }),

/***/ 844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { buildOptions} = __webpack_require__(745);
const OrderedObjParser = __webpack_require__(96);
const { prettify} = __webpack_require__(997);
const validator = __webpack_require__(501);

class XMLParser{
    
    constructor(options){
        this.externalEntities = {};
        this.options = buildOptions(options);
        
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(xmlData,validationOption){
        if(typeof xmlData === "string"){
        }else if( xmlData.toString){
            xmlData = xmlData.toString();
        }else{
            throw new Error("XML data is accepted in String or Bytes[] form.")
        }
        if( validationOption){
            if(validationOption === true) validationOption = {}; //validate with default options
            
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error( `${result.err.msg}:${result.err.line}:${result.err.col}` )
            }
          }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if(this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return prettify(orderedResult, this.options);
    }

    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(key, value){
        if(value.indexOf("&") !== -1){
            throw new Error("Entity value can't have '&'")
        }else if(key.indexOf("&") !== -1 || key.indexOf(";") !== -1){
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'")
        }else if(value === "&"){
            throw new Error("An entity with value '&' is not permitted");
        }else{
            this.externalEntities[key] = value;
        }
    }
}

module.exports = XMLParser;

/***/ }),

/***/ 997:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */
function prettify(node, options){
  return compress( node, options);
}

/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */
function compress(arr, options, jPath){
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    let newJpath = "";
    if(jPath === undefined) newJpath = property;
    else newJpath = jPath + "." + property;

    if(property === options.textNodeName){
      if(text === undefined) text = tagObj[property];
      else text += "" + tagObj[property];
    }else if(property === undefined){
      continue;
    }else if(tagObj[property]){
      
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);

      if(tagObj[":@"]){
        assignAttributes( val, tagObj[":@"], newJpath, options);
      }else if(Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode){
        val = val[options.textNodeName];
      }else if(Object.keys(val).length === 0){
        if(options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }

      if(compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
        if(!Array.isArray(compressedObj[property])) {
            compressedObj[property] = [ compressedObj[property] ];
        }
        compressedObj[property].push(val);
      }else{
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node
        if (options.isArray(property, newJpath, isLeaf )) {
          compressedObj[property] = [val];
        }else{
          compressedObj[property] = val;
        }
      }
    }
    
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if(typeof text === "string"){
    if(text.length > 0) compressedObj[options.textNodeName] = text;
  }else if(text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}

function propName(obj){
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(key !== ":@") return key;
  }
}

function assignAttributes(obj, attrMap, jpath, options){
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [ attrMap[atrrName] ];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}

function isLeafTag(obj, options){
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  
  if (propCount === 0) {
    return true;
  }

  if (
    propCount === 1 &&
    (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)
  ) {
    return true;
  }

  return false;
}
exports.prettify = prettify;


/***/ }),

/***/ 311:
/***/ ((module) => {

"use strict";


class XmlNode{
  constructor(tagname) {
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = {}; //attributes map
  }
  add(key,val){
    // this.child.push( {name : key, val: val, isCdata: isCdata });
    if(key === "__proto__") key = "#__proto__";
    this.child.push( {[key]: val });
  }
  addChild(node) {
    if(node.tagname === "__proto__") node.tagname = "#__proto__";
    if(node[":@"] && Object.keys(node[":@"]).length > 0){
      this.child.push( { [node.tagname]: node.child, [":@"]: node[":@"] });
    }else{
      this.child.push( { [node.tagname]: node.child });
    }
  };
};


module.exports = XmlNode;

/***/ }),

/***/ 675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Mnemonist LRUCache
 * ===================
 *
 * JavaScript implementation of the LRU Cache data structure. To save up
 * memory and allocations this implementation represents its underlying
 * doubly-linked list as static arrays and pointers. Thus, memory is allocated
 * only once at instantiation and JS objects are never created to serve as
 * pointers. This also means this implementation does not trigger too many
 * garbage collections.
 *
 * Note that to save up memory, a LRU Cache can be implemented using a singly
 * linked list by storing predecessors' pointers as hashmap values.
 * However, this means more hashmap lookups and would probably slow the whole
 * thing down. What's more, pointers are not the things taking most space in
 * memory.
 */
var Iterator = __webpack_require__(993),
    forEach = __webpack_require__(113),
    typed = __webpack_require__(801),
    iterables = __webpack_require__(650);

/**
 * LRUCache.
 *
 * @constructor
 * @param {function} Keys     - Array class for storing keys.
 * @param {function} Values   - Array class for storing values.
 * @param {number}   capacity - Desired capacity.
 */
function LRUCache(Keys, Values, capacity) {
  if (arguments.length < 2) {
    capacity = Keys;
    Keys = null;
    Values = null;
  }

  this.capacity = capacity;

  if (typeof this.capacity !== 'number' || this.capacity <= 0)
    throw new Error('mnemonist/lru-cache: capacity should be positive number.');

  var PointerArray = typed.getPointerArray(capacity);

  this.forward = new PointerArray(capacity);
  this.backward = new PointerArray(capacity);
  this.K = typeof Keys === 'function' ? new Keys(capacity) : new Array(capacity);
  this.V = typeof Values === 'function' ? new Values(capacity) : new Array(capacity);

  // Properties
  this.size = 0;
  this.head = 0;
  this.tail = 0;
  this.items = {};
}

/**
 * Method used to clear the structure.
 *
 * @return {undefined}
 */
LRUCache.prototype.clear = function() {
  this.size = 0;
  this.head = 0;
  this.tail = 0;
  this.items = {};
};

/**
 * Method used to splay a value on top.
 *
 * @param  {number}   pointer - Pointer of the value to splay on top.
 * @return {LRUCache}
 */
LRUCache.prototype.splayOnTop = function(pointer) {
  var oldHead = this.head;

  if (this.head === pointer)
    return this;

  var previous = this.backward[pointer],
      next = this.forward[pointer];

  if (this.tail === pointer) {
    this.tail = previous;
  }
  else {
    this.backward[next] = previous;
  }

  this.forward[previous] = next;

  this.backward[oldHead] = pointer;
  this.head = pointer;
  this.forward[pointer] = oldHead;

  return this;
};

/**
 * Method used to set the value for the given key in the cache.
 *
 * @param  {any} key   - Key.
 * @param  {any} value - Value.
 * @return {undefined}
 */
LRUCache.prototype.set = function(key, value) {

  // The key already exists, we just need to update the value and splay on top
  var pointer = this.items[key];

  if (typeof pointer !== 'undefined') {
    this.splayOnTop(pointer);
    this.V[pointer] = value;

    return;
  }

  // The cache is not yet full
  if (this.size < this.capacity) {
    pointer = this.size++;
  }

  // Cache is full, we need to drop the last value
  else {
    pointer = this.tail;
    this.tail = this.backward[pointer];
    delete this.items[this.K[pointer]];
  }

  // Storing key & value
  this.items[key] = pointer;
  this.K[pointer] = key;
  this.V[pointer] = value;

  // Moving the item at the front of the list
  this.forward[pointer] = this.head;
  this.backward[this.head] = pointer;
  this.head = pointer;
};

/**
 * Method used to set the value for the given key in the cache
 *
 * @param  {any} key   - Key.
 * @param  {any} value - Value.
 * @return {{evicted: boolean, key: any, value: any}} An object containing the
 * key and value of an item that was overwritten or evicted in the set
 * operation, as well as a boolean indicating whether it was evicted due to
 * limited capacity. Return value is null if nothing was evicted or overwritten
 * during the set operation.
 */
LRUCache.prototype.setpop = function(key, value) {
  var oldValue = null;
  var oldKey = null;
  // The key already exists, we just need to update the value and splay on top
  var pointer = this.items[key];

  if (typeof pointer !== 'undefined') {
    this.splayOnTop(pointer);
    oldValue = this.V[pointer];
    this.V[pointer] = value;
    return {evicted: false, key: key, value: oldValue};
  }

  // The cache is not yet full
  if (this.size < this.capacity) {
    pointer = this.size++;
  }

  // Cache is full, we need to drop the last value
  else {
    pointer = this.tail;
    this.tail = this.backward[pointer];
    oldValue = this.V[pointer];
    oldKey = this.K[pointer];
    delete this.items[this.K[pointer]];
  }

  // Storing key & value
  this.items[key] = pointer;
  this.K[pointer] = key;
  this.V[pointer] = value;

  // Moving the item at the front of the list
  this.forward[pointer] = this.head;
  this.backward[this.head] = pointer;
  this.head = pointer;

  // Return object if eviction took place, otherwise return null
  if (oldKey) {
    return {evicted: true, key: oldKey, value: oldValue};
  }
  else {
    return null;
  }
};

/**
 * Method used to check whether the key exists in the cache.
 *
 * @param  {any} key   - Key.
 * @return {boolean}
 */
LRUCache.prototype.has = function(key) {
  return key in this.items;
};

/**
 * Method used to get the value attached to the given key. Will move the
 * related key to the front of the underlying linked list.
 *
 * @param  {any} key   - Key.
 * @return {any}
 */
LRUCache.prototype.get = function(key) {
  var pointer = this.items[key];

  if (typeof pointer === 'undefined')
    return;

  this.splayOnTop(pointer);

  return this.V[pointer];
};

/**
 * Method used to get the value attached to the given key. Does not modify
 * the ordering of the underlying linked list.
 *
 * @param  {any} key   - Key.
 * @return {any}
 */
LRUCache.prototype.peek = function(key) {
    var pointer = this.items[key];

    if (typeof pointer === 'undefined')
        return;

    return this.V[pointer];
};

/**
 * Method used to iterate over the cache's entries using a callback.
 *
 * @param  {function}  callback - Function to call for each item.
 * @param  {object}    scope    - Optional scope.
 * @return {undefined}
 */
LRUCache.prototype.forEach = function(callback, scope) {
  scope = arguments.length > 1 ? scope : this;

  var i = 0,
      l = this.size;

  var pointer = this.head,
      keys = this.K,
      values = this.V,
      forward = this.forward;

  while (i < l) {

    callback.call(scope, values[pointer], keys[pointer], this);
    pointer = forward[pointer];

    i++;
  }
};

/**
 * Method used to create an iterator over the cache's keys from most
 * recently used to least recently used.
 *
 * @return {Iterator}
 */
LRUCache.prototype.keys = function() {
  var i = 0,
      l = this.size;

  var pointer = this.head,
      keys = this.K,
      forward = this.forward;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    var key = keys[pointer];

    i++;

    if (i < l)
      pointer = forward[pointer];

    return {
      done: false,
      value: key
    };
  });
};

/**
 * Method used to create an iterator over the cache's values from most
 * recently used to least recently used.
 *
 * @return {Iterator}
 */
LRUCache.prototype.values = function() {
  var i = 0,
      l = this.size;

  var pointer = this.head,
      values = this.V,
      forward = this.forward;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    var value = values[pointer];

    i++;

    if (i < l)
      pointer = forward[pointer];

    return {
      done: false,
      value: value
    };
  });
};

/**
 * Method used to create an iterator over the cache's entries from most
 * recently used to least recently used.
 *
 * @return {Iterator}
 */
LRUCache.prototype.entries = function() {
  var i = 0,
      l = this.size;

  var pointer = this.head,
      keys = this.K,
      values = this.V,
      forward = this.forward;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    var key = keys[pointer],
        value = values[pointer];

    i++;

    if (i < l)
      pointer = forward[pointer];

    return {
      done: false,
      value: [key, value]
    };
  });
};

/**
 * Attaching the #.entries method to Symbol.iterator if possible.
 */
if (typeof Symbol !== 'undefined')
  LRUCache.prototype[Symbol.iterator] = LRUCache.prototype.entries;

/**
 * Convenience known methods.
 */
LRUCache.prototype.inspect = function() {
  var proxy = new Map();

  var iterator = this.entries(),
      step;

  while ((step = iterator.next(), !step.done))
    proxy.set(step.value[0], step.value[1]);

  // Trick so that node displays the name of the constructor
  Object.defineProperty(proxy, 'constructor', {
    value: LRUCache,
    enumerable: false
  });

  return proxy;
};

if (typeof Symbol !== 'undefined')
  LRUCache.prototype[Symbol.for('nodejs.util.inspect.custom')] = LRUCache.prototype.inspect;

/**
 * Static @.from function taking an arbitrary iterable & converting it into
 * a structure.
 *
 * @param  {Iterable} iterable - Target iterable.
 * @param  {function} Keys     - Array class for storing keys.
 * @param  {function} Values   - Array class for storing values.
 * @param  {number}   capacity - Cache's capacity.
 * @return {LRUCache}
 */
LRUCache.from = function(iterable, Keys, Values, capacity) {
  if (arguments.length < 2) {
    capacity = iterables.guessLength(iterable);

    if (typeof capacity !== 'number')
      throw new Error('mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.');
  }
  else if (arguments.length === 2) {
    capacity = Keys;
    Keys = null;
    Values = null;
  }

  var cache = new LRUCache(Keys, Values, capacity);

  forEach(iterable, function(value, key) {
    cache.set(key, value);
  });

  return cache;
};

/**
 * Exporting.
 */
module.exports = LRUCache;


/***/ }),

/***/ 650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Mnemonist Iterable Function
 * ============================
 *
 * Harmonized iteration helpers over mixed iterable targets.
 */
var forEach = __webpack_require__(113);

var typed = __webpack_require__(801);

/**
 * Function used to determine whether the given object supports array-like
 * random access.
 *
 * @param  {any} target - Target object.
 * @return {boolean}
 */
function isArrayLike(target) {
  return Array.isArray(target) || typed.isTypedArray(target);
}

/**
 * Function used to guess the length of the structure over which we are going
 * to iterate.
 *
 * @param  {any} target - Target object.
 * @return {number|undefined}
 */
function guessLength(target) {
  if (typeof target.length === 'number')
    return target.length;

  if (typeof target.size === 'number')
    return target.size;

  return;
}

/**
 * Function used to convert an iterable to an array.
 *
 * @param  {any}   target - Iteration target.
 * @return {array}
 */
function toArray(target) {
  var l = guessLength(target);

  var array = typeof l === 'number' ? new Array(l) : [];

  var i = 0;

  // TODO: we could optimize when given target is array like
  forEach(target, function(value) {
    array[i++] = value;
  });

  return array;
}

/**
 * Same as above but returns a supplementary indices array.
 *
 * @param  {any}   target - Iteration target.
 * @return {array}
 */
function toArrayWithIndices(target) {
  var l = guessLength(target);

  var IndexArray = typeof l === 'number' ?
    typed.getPointerArray(l) :
    Array;

  var array = typeof l === 'number' ? new Array(l) : [];
  var indices = typeof l === 'number' ? new IndexArray(l) : [];

  var i = 0;

  // TODO: we could optimize when given target is array like
  forEach(target, function(value) {
    array[i] = value;
    indices[i] = i++;
  });

  return [array, indices];
}

/**
 * Exporting.
 */
exports.isArrayLike = isArrayLike;
exports.guessLength = guessLength;
exports.toArray = toArray;
exports.toArrayWithIndices = toArrayWithIndices;


/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Mnemonist Typed Array Helpers
 * ==============================
 *
 * Miscellaneous helpers related to typed arrays.
 */

/**
 * When using an unsigned integer array to store pointers, one might want to
 * choose the optimal word size in regards to the actual numbers of pointers
 * to store.
 *
 * This helpers does just that.
 *
 * @param  {number} size - Expected size of the array to map.
 * @return {TypedArray}
 */
var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1,
    MAX_16BIT_INTEGER = Math.pow(2, 16) - 1,
    MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;

var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1,
    MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1,
    MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;

exports.getPointerArray = function(size) {
  var maxIndex = size - 1;

  if (maxIndex <= MAX_8BIT_INTEGER)
    return Uint8Array;

  if (maxIndex <= MAX_16BIT_INTEGER)
    return Uint16Array;

  if (maxIndex <= MAX_32BIT_INTEGER)
    return Uint32Array;

  return Float64Array;
};

exports.getSignedPointerArray = function(size) {
  var maxIndex = size - 1;

  if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
    return Int8Array;

  if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
    return Int16Array;

  if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
    return Int32Array;

  return Float64Array;
};

/**
 * Function returning the minimal type able to represent the given number.
 *
 * @param  {number} value - Value to test.
 * @return {TypedArrayClass}
 */
exports.getNumberType = function(value) {

  // <= 32 bits itnteger?
  if (value === (value | 0)) {

    // Negative
    if (Math.sign(value) === -1) {
      if (value <= 127 && value >= -128)
        return Int8Array;

      if (value <= 32767 && value >= -32768)
        return Int16Array;

      return Int32Array;
    }
    else {

      if (value <= 255)
        return Uint8Array;

      if (value <= 65535)
        return Uint16Array;

      return Uint32Array;
    }
  }

  // 53 bits integer & floats
  // NOTE: it's kinda hard to tell whether we could use 32bits or not...
  return Float64Array;
};

/**
 * Function returning the minimal type able to represent the given array
 * of JavaScript numbers.
 *
 * @param  {array}    array  - Array to represent.
 * @param  {function} getter - Optional getter.
 * @return {TypedArrayClass}
 */
var TYPE_PRIORITY = {
  Uint8Array: 1,
  Int8Array: 2,
  Uint16Array: 3,
  Int16Array: 4,
  Uint32Array: 5,
  Int32Array: 6,
  Float32Array: 7,
  Float64Array: 8
};

// TODO: make this a one-shot for one value
exports.getMinimalRepresentation = function(array, getter) {
  var maxType = null,
      maxPriority = 0,
      p,
      t,
      v,
      i,
      l;

  for (i = 0, l = array.length; i < l; i++) {
    v = getter ? getter(array[i]) : array[i];
    t = exports.getNumberType(v);
    p = TYPE_PRIORITY[t.name];

    if (p > maxPriority) {
      maxPriority = p;
      maxType = t;
    }
  }

  return maxType;
};

/**
 * Function returning whether the given value is a typed array.
 *
 * @param  {any} value - Value to test.
 * @return {boolean}
 */
exports.isTypedArray = function(value) {
  return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(value);
};

/**
 * Function used to concat byte arrays.
 *
 * @param  {...ByteArray}
 * @return {ByteArray}
 */
exports.concat = function() {
  var length = 0,
      i,
      o,
      l;

  for (i = 0, l = arguments.length; i < l; i++)
    length += arguments[i].length;

  var array = new (arguments[0].constructor)(length);

  for (i = 0, o = 0; i < l; i++) {
    array.set(arguments[i], o);
    o += arguments[i].length;
  }

  return array;
};

/**
 * Function used to initialize a byte array of indices.
 *
 * @param  {number}    length - Length of target.
 * @return {ByteArray}
 */
exports.indices = function(length) {
  var PointerArray = exports.getPointerArray(length);

  var array = new PointerArray(length);

  for (var i = 0; i < length; i++)
    array[i] = i;

  return array;
};


/***/ }),

/***/ 113:
/***/ ((module) => {

/**
 * Obliterator ForEach Function
 * =============================
 *
 * Helper function used to easily iterate over mixed values.
 */

/**
 * Constants.
 */
var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== 'undefined',
    SYMBOL_SUPPORT = typeof Symbol !== 'undefined';

/**
 * Function able to iterate over almost any iterable JS value.
 *
 * @param  {any}      iterable - Iterable value.
 * @param  {function} callback - Callback function.
 */
function forEach(iterable, callback) {
  var iterator, k, i, l, s;

  if (!iterable)
    throw new Error('obliterator/forEach: invalid iterable.');

  if (typeof callback !== 'function')
    throw new Error('obliterator/forEach: expecting a callback.');

  // The target is an array or a string or function arguments
  if (
    Array.isArray(iterable) ||
    (ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable)) ||
    typeof iterable === 'string' ||
    iterable.toString() === '[object Arguments]'
  ) {
    for (i = 0, l = iterable.length; i < l; i++)
      callback(iterable[i], i);
    return;
  }

  // The target has a #.forEach method
  if (typeof iterable.forEach === 'function') {
    iterable.forEach(callback);
    return;
  }

  // The target is iterable
  if (
    SYMBOL_SUPPORT &&
    Symbol.iterator in iterable &&
    typeof iterable.next !== 'function'
  ) {
    iterable = iterable[Symbol.iterator]();
  }

  // The target is an iterator
  if (typeof iterable.next === 'function') {
    iterator = iterable;
    i = 0;

    while ((s = iterator.next(), s.done !== true)) {
      callback(s.value, i);
      i++;
    }

    return;
  }

  // The target is a plain object
  for (k in iterable) {
    if (iterable.hasOwnProperty(k)) {
      callback(iterable[k], k);
    }
  }

  return;
}

/**
 * Same function as the above `forEach` but will yield `null` when the target
 * does not have keys.
 *
 * @param  {any}      iterable - Iterable value.
 * @param  {function} callback - Callback function.
 */
forEach.forEachWithNullKeys = function(iterable, callback) {
  var iterator, k, i, l, s;

  if (!iterable)
    throw new Error('obliterator/forEachWithNullKeys: invalid iterable.');

  if (typeof callback !== 'function')
    throw new Error('obliterator/forEachWithNullKeys: expecting a callback.');

  // The target is an array or a string or function arguments
  if (
    Array.isArray(iterable) ||
    (ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable)) ||
    typeof iterable === 'string' ||
    iterable.toString() === '[object Arguments]'
  ) {
    for (i = 0, l = iterable.length; i < l; i++)
      callback(iterable[i], null);
    return;
  }

  // The target is a Set
  if (iterable instanceof Set) {
    iterable.forEach(function(value) {
      callback(value, null);
    });
    return;
  }

  // The target has a #.forEach method
  if (typeof iterable.forEach === 'function') {
    iterable.forEach(callback);
    return;
  }

  // The target is iterable
  if (
    SYMBOL_SUPPORT &&
    Symbol.iterator in iterable &&
    typeof iterable.next !== 'function'
  ) {
    iterable = iterable[Symbol.iterator]();
  }

  // The target is an iterator
  if (typeof iterable.next === 'function') {
    iterator = iterable;
    i = 0;

    while ((s = iterator.next(), s.done !== true)) {
      callback(s.value, null);
      i++;
    }

    return;
  }

  // The target is a plain object
  for (k in iterable) {
    if (iterable.hasOwnProperty(k)) {
      callback(iterable[k], k);
    }
  }

  return;
};

/**
 * Exporting.
 */
module.exports = forEach;


/***/ }),

/***/ 993:
/***/ ((module) => {

/**
 * Obliterator Iterator Class
 * ===========================
 *
 * Simple class representing the library's iterators.
 */

/**
 * Iterator class.
 *
 * @constructor
 * @param {function} next - Next function.
 */
function Iterator(next) {

  // Hiding the given function
  Object.defineProperty(this, '_next', {
    writable: false,
    enumerable: false,
    value: next
  });

  // Is the iterator complete?
  this.done = false;
}

/**
 * Next function.
 *
 * @return {object}
 */
// NOTE: maybe this should dropped for performance?
Iterator.prototype.next = function() {
  if (this.done)
    return {done: true};

  var step = this._next();

  if (step.done)
    this.done = true;

  return step;
};

/**
 * If symbols are supported, we add `next` to `Symbol.iterator`.
 */
if (typeof Symbol !== 'undefined')
  Iterator.prototype[Symbol.iterator] = function() {
    return this;
  };

/**
 * Returning an iterator of the given values.
 *
 * @param  {any...} values - Values.
 * @return {Iterator}
 */
Iterator.of = function() {
  var args = arguments,
      l = args.length,
      i = 0;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    return {done: false, value: args[i++]};
  });
};

/**
 * Returning an empty iterator.
 *
 * @return {Iterator}
 */
Iterator.empty = function() {
  var iterator = new Iterator(null);
  iterator.done = true;

  return iterator;
};

/**
 * Returning whether the given value is an iterator.
 *
 * @param  {any} value - Value.
 * @return {boolean}
 */
Iterator.is = function(value) {
  if (value instanceof Iterator)
    return true;

  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.next === 'function'
  );
};

/**
 * Exporting.
 */
module.exports = Iterator;


/***/ }),

/***/ 153:
/***/ ((module) => {

const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
// const octRegex = /0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;


//polyfill
if (!Number.parseInt && window.parseInt) {
    Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
    Number.parseFloat = window.parseFloat;
}

  
const consider = {
    hex :  true,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true
    //skipLike: /regex/
};

function toNumber(str, options = {}){
    // const options = Object.assign({}, consider);
    // if(opt.leadingZeros === false){
    //     options.leadingZeros = false;
    // }else if(opt.hex === false){
    //     options.hex = false;
    // }

    options = Object.assign({}, consider, options );
    if(!str || typeof str !== "string" ) return str;
    
    let trimmedStr  = str.trim();
    // if(trimmedStr === "0.0") return 0;
    // else if(trimmedStr === "+0.0") return 0;
    // else if(trimmedStr === "-0.0") return -0;

    if(options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
    // } else if (options.parseOct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
    }else{
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        if(match){
            const sign = match[1];
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            //trim ending zeros for floating number
            
            const eNotation = match[4] || match[6];
            if(!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
            else if(!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
            else{//no leading zeros or leading zeros are allowed
                const num = Number(trimmedStr);
                const numStr = "" + num;
                if(numStr.search(/[eE]/) !== -1){ //given number is long and parsed to eNotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(eNotation){ //given number has enotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(trimmedStr.indexOf(".") !== -1){ //floating number
                    // const decimalPart = match[5].substr(1);
                    // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));

                    
                    // const p = numStr.indexOf(".");
                    // const givenIntPart = numStr.substr(0,p);
                    // const givenDecPart = numStr.substr(p+1);
                    if(numStr === "0" && (numTrimmedByZeros === "") ) return num; //0.0
                    else if(numStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if( sign && numStr === "-"+numTrimmedByZeros) return num;
                    else return str;
                }
                
                if(leadingZeros){
                    // if(numTrimmedByZeros === numStr){
                    //     if(options.leadingZeros) return num;
                    //     else return str;
                    // }else return str;
                    if(numTrimmedByZeros === numStr) return num;
                    else if(sign+numTrimmedByZeros === numStr) return num;
                    else return str;
                }

                if(trimmedStr === numStr) return num;
                else if(trimmedStr === sign+numStr) return num;
                // else{
                //     //number with +/- sign
                //     trimmedStr.test(/[-+][0-9]);

                // }
                return str;
            }
            // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
            
        }else{ //non-numeric string
            return str;
        }
    }
}

/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */
function trimZeros(numStr){
    if(numStr && numStr.indexOf(".") !== -1){//float
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if(numStr === ".")  numStr = "0";
        else if(numStr[0] === ".")  numStr = "0"+numStr;
        else if(numStr[numStr.length-1] === ".")  numStr = numStr.substr(0,numStr.length-1);
        return numStr;
    }
    return numStr;
}
module.exports = toNumber


/***/ }),

/***/ 326:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
var client_dynamodb_1 = __webpack_require__(830);
var crypto = __importStar(__webpack_require__(663));
// 環境変数
var region = process.env.DDB_REGION;
var tableName = process.env.DDB_TABLE;
var salt = process.env.SALT;
var key = new Buffer(process.env.CIPHER_KEY, 'base64'); // 32バイトの鍵
var iv = new Buffer(process.env.CIPHER_IV, 'base64'); // 16バイトの初期化ベクトル
var debug = process.env.DEBUG === '1';
function handler(event, context, callback) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function () {
        var analyze, wid, sensor, sourceIp, userId;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (debug) {
                        console.info('event:', event);
                    }
                    analyze = (_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.analyze;
                    wid = (_b = event.queryStringParameters) === null || _b === void 0 ? void 0 : _b.wid;
                    sensor = (_c = event.queryStringParameters) === null || _c === void 0 ? void 0 : _c.sensor;
                    sourceIp = (_d = event.queryStringParameters) === null || _d === void 0 ? void 0 : _d.sourceIp;
                    userId = (_e = event.queryStringParameters) === null || _e === void 0 ? void 0 : _e.userId;
                    if (!wid) {
                        return [2 /*return*/, errorJsonResponse('missing wid')];
                    }
                    if (!(analyze === 'individualSensorCounts')) return [3 /*break*/, 2];
                    return [4 /*yield*/, individualSensorCounts(wid)];
                case 1: return [2 /*return*/, _f.sent()];
                case 2: return [4 /*yield*/, simpleQuery(wid, sensor, sourceIp, userId)];
                case 3: return [2 /*return*/, _f.sent()];
            }
        });
    });
}
exports.handler = handler;
function individualSensorCounts(wid) {
    return __awaiter(this, void 0, void 0, function () {
        var client, items, minTimeEpoch, maxTimeEpoch, summary;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new client_dynamodb_1.DynamoDBClient({
                        region: region,
                    });
                    return [4 /*yield*/, queryAll(client, {
                            TableName: tableName,
                            KeyConditionExpression: "PartitionKey = :wid",
                            ExpressionAttributeValues: { ":wid": { S: wid } },
                            ProjectionExpression: "SortKey, Sensor",
                        }, undefined)];
                case 1:
                    items = _a.sent();
                    minTimeEpoch = Number.MAX_VALUE;
                    maxTimeEpoch = 0;
                    summary = items.reduce(function (carry, value, idx, arr) {
                        var _a, _b;
                        var sortKey = (_a = value.SortKey) === null || _a === void 0 ? void 0 : _a.S;
                        var sensor = (_b = value.Sensor) === null || _b === void 0 ? void 0 : _b.S;
                        if (sortKey && sensor) {
                            if (sensor in carry) {
                                carry[sensor] = carry[sensor] + 1;
                            }
                            else {
                                carry[sensor] = 1;
                            }
                            var timeEpoch = Number.parseInt(sortKey.split('-')[0]);
                            minTimeEpoch = Math.min(minTimeEpoch, timeEpoch);
                            maxTimeEpoch = Math.max(maxTimeEpoch, timeEpoch);
                        }
                        return carry;
                    }, {});
                    return [2 /*return*/, jsonResponse(200, {
                            Summary: summary,
                            MaxTimeEpoch: maxTimeEpoch,
                            MinTimeEpoch: minTimeEpoch,
                        })];
            }
        });
    });
}
function simpleQuery(wid, sensor, sourceIp, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var input, filters, eaNames, decrypted, client, items, safeItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = {
                        TableName: tableName,
                        KeyConditionExpression: "PartitionKey = :wid",
                        ExpressionAttributeValues: { ":wid": { S: wid } },
                        ScanIndexForward: false,
                    };
                    filters = [];
                    eaNames = {};
                    if (sensor && sensor.length) {
                        filters.push("#sensor = :sensor");
                        eaNames["#sensor"] = "Sensor";
                        input.ExpressionAttributeValues[":sensor"] = { S: sensor };
                    }
                    if (userId && userId.length) {
                        filters.push("#userId = :userId");
                        eaNames["#userId"] = "UserID";
                        input.ExpressionAttributeValues[":userId"] = { S: userId };
                    }
                    if (sourceIp && sourceIp.length) {
                        try {
                            decrypted = decrypt(sourceIp);
                            filters.push("#sourceIp = :sourceIp");
                            eaNames["#sourceIp"] = "SourceIp";
                            input.ExpressionAttributeValues[":sourceIp"] = { S: decrypted };
                        }
                        catch (e) {
                            return [2 /*return*/, errorJsonResponse('invalid sourceIp')];
                        }
                    }
                    if (filters.length) {
                        input.FilterExpression = filters.join(' and ');
                        input.ExpressionAttributeNames = eaNames;
                    }
                    client = new client_dynamodb_1.DynamoDBClient({
                        region: region,
                    });
                    return [4 /*yield*/, queryAll(client, input, undefined)];
                case 1:
                    items = _a.sent();
                    safeItems = items.map(function (value) {
                        var _a, _b, _c, _d, _e, _f, _g;
                        return {
                            WID: (_a = value.PartitionKey) === null || _a === void 0 ? void 0 : _a.S,
                            Time: (_b = value.Time) === null || _b === void 0 ? void 0 : _b.S,
                            TimeEpoch: (_c = value.TimeEpoch) === null || _c === void 0 ? void 0 : _c.N,
                            Sensor: (_d = value.Sensor) === null || _d === void 0 ? void 0 : _d.S,
                            Timing: (_e = value.Timing) === null || _e === void 0 ? void 0 : _e.N,
                            SourceIp: encrypt((_f = value.SourceIp) === null || _f === void 0 ? void 0 : _f.S),
                            UserAgentHash: hash((_g = value.UserAgent) === null || _g === void 0 ? void 0 : _g.S),
                        };
                    });
                    return [2 /*return*/, jsonResponse(200, { Items: safeItems })];
            }
        });
    });
}
var errorJsonResponse = function (message) {
    return jsonResponse(400, { error: message });
};
var jsonResponse = function (statusCode, body) {
    return { statusCode: statusCode, body: JSON.stringify(body) };
};
function queryAll(client, input, exclusiveStartKey) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var queryCommandOutput, items, nextItems;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (exclusiveStartKey) {
                        input.ExclusiveStartKey = exclusiveStartKey;
                    }
                    return [4 /*yield*/, client.send(new client_dynamodb_1.QueryCommand(input))];
                case 1:
                    queryCommandOutput = _b.sent();
                    if (debug) {
                        console.info('queryCommandOutput.ConsumedCapacity:', queryCommandOutput.ConsumedCapacity);
                        console.info('queryCommandOutput.LastEvaluatedKey:', queryCommandOutput.LastEvaluatedKey);
                    }
                    items = (_a = queryCommandOutput.Items) !== null && _a !== void 0 ? _a : [];
                    if (!queryCommandOutput.LastEvaluatedKey) return [3 /*break*/, 3];
                    return [4 /*yield*/, queryAll(client, input, queryCommandOutput.LastEvaluatedKey)];
                case 2:
                    nextItems = _b.sent();
                    items.push.apply(items, nextItems);
                    _b.label = 3;
                case 3: return [2 /*return*/, items];
            }
        });
    });
}
var hash = function (source) {
    if (!source) {
        return undefined;
    }
    var hash = crypto.createHash('sha256');
    hash.update(source);
    hash.update(salt);
    return hash.digest('hex');
};
function encrypt(text) {
    if (!text) {
        return undefined;
    }
    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    var encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
function decrypt(encrypted) {
    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


/***/ }),

/***/ 663:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(326);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;