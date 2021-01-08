const http = require('http')
const fs = require('fs')
const url = require('url')

http
  .createServer((req, res) => {
    if (req.url != '/favicon.ico') {
      // 查询文档
      // fs.stat('four.js', (error, stats) => {
      //   if (error) {
      //     console.log('错误', error)
      //   } else {
      //     console.log(stats.isDirectory())
      //   }
      // })
      //删除文档
      // fs.rmdir('css', err => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('创建成功')
      //   }
      // })
      //写入内容(覆盖原来的文件内容)
      // fs.writeFile('four.js', 'hello', err => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('success')
      //   }
      // })
      //写入内容（追加原来的内容）
      // fs.appendFile('four.js', 'I am four', err => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('追加成功！')
      //   }
      // })
      //删除文件
      // fs.unlink('node_modules/two.js', err => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('删除成功！')
      //   }
      // })
      //读取文件
      // fs.readFile('four.js', (err, data) => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('读取成功！', data)
      //   }
      // })
      //读取文档
      // fs.readdir('node_modules', (err, data) => {
      //   if (err) {
      //     console.log('err')
      //   } else {
      //     console.log('读取文档成功', data)
      //   }
      // })
      //重命名
      // fs.rename('第一个.js', 'one.js', err => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('success')
      //   }
      // })
      //剪切功能
      // fs.rename('four.js', 'node_modules/我是被剪切过来的1.js', err => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('将切成功')
      //   }
      // })
      //流
      // const fileReadStream = fs.createReadStream('stream.md')
      // let num = 0
      // let str = ''
      // fileReadStream.on('data', chunck => {
      //   console.log(`读取中${++num}`, chunck)
      // })
      // fileReadStream.on('end', () => {
      //   console.log('读取结束')
      // })
      // fileReadStream.on('error', () => {
      //   console.log('错误')
      // })
      //流写入
      // fileWriteStream = fs.createWriteStream('stream.md')
      // fileWriteStream.write('我是流写入的内容', 'utf-8')
      // fileWriteStream.end()
      // fileWriteStream.on('finish', err => {
      //   console.log(err)
      // })
      res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
      })
      res.write('<h1>hello word</h1>')
      res.end()
    }
  })
  .listen(3000, function () {
    console.log('启动3000')
  })
