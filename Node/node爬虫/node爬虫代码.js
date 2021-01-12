const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')
const emptyDir = require('./emptyDir')
let webUrl = 'http://news.ifeng.com/'
http.get(webUrl, res => {
  let str = ''
  res.on('data', chunck => {
    str += chunck
  })
  res.on('end', () => {
    fomatDate(str)
  })
})

function fomatDate(html) {
  let $ = cheerio.load(html)
  let data = []
  $('.news-stream-newsStream-news-item-has-image').each((index, item) => {
    let obj = {
      id: index + 1,
      title: $(item).find('a').text(),
      img: `http:${$(item).find('.news-stream-newsStream-image-link img').attr('src')}`,
      form: $(item).find('.news-stream-newsStream-news-item-infor span').text(),
      time: $(item).find('.news-stream-newsStream-news-item-infor time').text()
    }
    data.push(obj)
  })

  fs.stat('./data', err => {
    if (err) {
      writeFile(data)
    } else {
      emptyDir('./data').then(res => {
        fs.rmdir('./data', err => {})
      })
    }
  })
}
function writeFile(data) {
  fs.mkdir('./data', err => {
    if (err) {
    } else {
      const writeStream = fs.createWriteStream('./data/data.json')
      writeStream.write(JSON.stringify(data), 'utf8')
      writeStream.end()
      writeStream.on('finish', () => {
        console.log('写入成功')
      })
    }
  })
}
