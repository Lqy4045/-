const http = require('http')
let webUrl = 'http://news.ifeng.com/'
http.get(webUrl, res => {
  let str = ''
  res.on('data', chunck => {
    str += chunck
  })
  res.on('end', () => {
    console.log(str)
  })
})
