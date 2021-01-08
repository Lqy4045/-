const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
function getExt(ext) {
  switch (ext) {
    case '.html':
      return 'text/html'
    case '.css':
      return 'text/css'
    case '.js':
      return 'text/js'
    default:
      return 'text/html'
  }
}
http
  .createServer((req, res) => {
    let pathName = url.parse(req.url).pathname
    if (pathName == '/') {
      pathName = 'index.html'
    }

    let extName = path.extname(pathName)

    if (pathName !== '/favicon.ico') {
      fs.readFile(`./${pathName}`, (err, data) => {
        if (err) {
          fs.readFile('./404.html', (err, data) => {
            res.write(data)
            res.end()
          })
          // throw '错误'
          return false
        } else {
          let ext = getExt(extName)
          res.writeHead(200, {
            'Content-Type': `${ext};charset='utf-8'`
          })
          res.write(data)
          res.end()
        }
      })
    }
  })
  .listen(3001, () => {
    console.log('welcome 3001')
  })
