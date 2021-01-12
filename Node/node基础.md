# node 基础

## http - 开启 node 之旅

作用：构建一个服务

构建一个简易的服务器

```js
//1. 引入http模块
const http = require('http')
//2. 用http模块创建服务
const server = http.createServer((req, res) => {
  //3. 设置header头部，http状态码
  res.writeHeader(200, {
    'content-type': 'text/html;charset=UTF-8'
  })
  //4. 结束响应
  res.end('hello')
})
server.listen(3000)
```

最后，我们往浏览器中输入 localhost:3000 可以获取到页面

## URL 模块

作用：负责处理路径的一个模块

制作一个简单的路由

```js
let url = require('url')
let http = require('http')
let server = http.createServer((req, res) => {
  // 获取服务器请求
  /**
   * 访问地址是：http://localhost:3000/?userName=liqingyu&userAge=23
   * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
   * /  ?userName=liqingyu&userAge=23
   * /  /favicon.ico
   * 这里为了防止重复执行，所以排除 req.url == /favicon.ico 的情况
   */
  if (req.url != '/favicon.ico') {
    // 使用 url 的 parse 方法
    /**
     * parse 方法需要两个参数：
     * 第一个参数是地址
     * 第二个参数是 true 的话表示把 get 传值转换成对象
     */
    let result = url.parse(req.url, true)
    console.log(result)
    /**
     * Url {
     *   protocol: null,
     *   slashes: null,
     *   auth: null,
     *   host: null,
     *   port: null,
     *   hostname: null,
     *   hash: null,
     *   search: '?userName=liqingyu&userAge=23',
     *   query: { userName: 'liqingyu', userAge: '23' },
     *   pathname: '/',
     *   path: '/?userName=liqingyu&userAge=23',
     *   href: '/?userName=liqingyu&userAge=23' }
     */
  }
  res.writeHead(200, {
    'content-type': 'text/html;charset=UTF-8'
  })
  res.write('hello')
  res.end()
})
server.listen(3000)
```

## fs 模块

作用：读取内容的作用

```js
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  //查找文档
  fs.stat(url, (error, stats) => {
    //url 查找的文档路径
    //error 读取文档错误报错
    //stats 查找结果
  })
  //创建文档
  fs.mikdir(url, err => {
    //url 创建文档的路径
    //err 创建错误
  })
  //写入文件(覆盖之前的文件)
  fs.writeFile(url, content, err => {
    //url 要写入的路径
    //content 要写入的内容
    //err 错误信息
  })
  //追加写入文件
  fs.appendFile(url, content, err => {
    //url 要写入的路径
    //content 要写入的内容
    //err 错误信息
  })

  //同步读取文档
  let file = fs.readFileSync(url)
  //url 读取文件的路径

  //异步读取文档
  fs.readFile(url, (error, data) => {
    //error 读取文档错误
    //data 读取到的数据
  })

  //读取目录
  fs.readdir(url, (err, data) => {
    //url 要读取的目录路径
    //err 错误信息
    //data 读取内容
  })
  //重命名文档
  fs.rename(url, rename, err => {
    //url 重命名文件路径
    //rename 重命名
    //err 错误信息
  })
  //重命名还有剪切功能
  fs.rename(url, renameUrl, err => {
    //url 重命名文件路径
    //rename 想要剪切的路径和名字
    //err 错误信息
  })
})
```

## steam 流

作用：将读取的内容分成小块进行传输形成水流一样，它属于 fs 模块

以流的形式读取

```js
const fs = require('fs')
//流的方式读取文件
let fileReadStream = fs.creatReadStream(url)
//保存文件
let str = ''
//开始读取
fileReadStream.on('data', chunck => {
  str += chunck
})
//读取完成
fileReadStream.on('end', () => {
  console.log(str)
})
//读取失败
fileReadStream.on('error', error => {
  console.log(error)
})
```

以流的形式存入

```js
const fs = require('fs')
let data = 'hello word 我要存入数据'
//创建一个写入的流，写到url路径的文件上去
let writeStream = fs.creatWriteStream(url)
//开始写入
writeStream.write(data, 'utf8')
//写入结束
writeStream.end()
//写入完成
writeStream.on('finish', () => {
  console.log('写入完成')
})
```
