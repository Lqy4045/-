const fs = require('fs')
function emptyDir(path) {
  let dirList = fs.readdirSync(path)
  if (dirList.length > 0) {
    dirList.forEach(item => {
      // fs.stat(`${path}/${item}`, (err, file) => {
      //   if (err) {
      //     console.log(err)
      //     return false
      //   } else {
      //     if (file.isDirectory()) {
      //       emptyDir(`${path}/${item}`)
      //     } else {
      //       fs.unlinkSync(`${path}/${item}`)
      //     }
      //   }
      // })
      let file = fs.statSync(`${path}/${item}`)
      if (file) {
        if (file.isDirectory()) {
          emptyDir(`${path}/${item}`)
        } else {
          fs.unlinkSync(`${path}/${item}`)
        }
      }
    })
  } else {
    fs.rmdirSync(path)
    console.log('删除成功')
  }
}

module.exports = emptyDir
