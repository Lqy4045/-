const http = require('http')
const url = require('url')
const fs = require('fs')
http
  .createServer((req, res) => {
    let pathName = url.parse(req.url).pathname
    if (pathName == '/getUserInfo') {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3003')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
      res.setHeader('Content-Type', 'application/json')
      fs.readFile('data.json', (err, data) => {
        if (err) {
          console.log(err)
        } else {
          res.write(data)
          res.end()
        }
      })
    }
  })
  .listen(3002, () => {
    console.log('数据库启动')
  })
