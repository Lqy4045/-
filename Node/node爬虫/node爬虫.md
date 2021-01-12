# node + heerio 爬虫

作用：获取网络资源

注意：需要先查看

在当前域名下加入+robots.txt 可以看到哪些可以爬，哪些不可以爬

```js
const http = require('http')
let webUrl = 'http://news.ifeng.com/'
http.get(webUrl, res => {
  let str = ''
  res.on('data', chunck => {
    str += chuck
  })
  res.on('end', () => {
    console.log(str)
  })
})
```
