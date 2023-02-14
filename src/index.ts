// // import { write } from 'fs'
// // import {readFile, writeFile} from 'fs/promises'

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

import * as dotenv from 'dotenv'
dotenv.config()
import config from './config'

import app from './server'
app.listen(config.port,()=>{
  console.log(`Server on http://localhost:${config.port}`)
})

