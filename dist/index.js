"use strict";
// // import { write } from 'fs'
// // import {readFile, writeFile} from 'fs/promises'
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// // let template = await readFile(new URL('index.html',import.meta.url),'utf-8')
// // const data={
// //     title:'Hello World',
// //     content:'This is a test'
// // }
// // for (const [k,v] in Object.entries(data)){
// //     template = template.replace(`/^{${k}}/`,v);
// // }
// // console.log(template)
// // await writeFile (new URL('test.html',import.meta.url),template)
// import { readFile, writeFile } from 'fs/promises'
// let template = await readFile(new URL('./test.html', import.meta.url), 'utf-8')
// const data = {
//   title: 'My new file',
//   body: 'I wrote this file to disk using node'
// }
// for (const [key, val] of Object.entries(data)) {
//   template = template.replace(`{${key}}`, val)
// }
// await writeFile(new URL('./index.html', import.meta.url), template)
// const http = require ('http')
// const server=http.createServer(async(req,res)=>{
//   if (req.method==='GET' && req.url==='/'){
//     res.end()
//   }
// })
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var config_1 = __importDefault(require("./config"));
var server_1 = __importDefault(require("./server"));
server_1["default"].listen(config_1["default"].port, function () {
    console.log("Server on http://localhost:".concat(config_1["default"].port));
});
//# sourceMappingURL=index.js.map