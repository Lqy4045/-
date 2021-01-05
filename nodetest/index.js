const http = require('http')
const fs = require('fs')
const url = require('url')

http
  .createServer((req, res) => {
    // fs.stat('four.js', (error, stats) => {
    //   if (error) {
    //     console.log('错误', error)
    //   } else {
    //     console.log(stats.isDirectory())
    //   }
    // })
    fs.rmdir('css', err => {
      if (err) {
        console.log(err)
      } else {
        console.log('创建成功')
      }
    })
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=UTF-8'
    })
    res.write('<h1>hello word</h1>')
    res.end()
  })
  .listen(3000, function () {
    console.log('启动3000')
  })
