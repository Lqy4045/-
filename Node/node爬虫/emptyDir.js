const fs = require('fs')
function emptyDir(path) {
  return new Promise((res, rej) => {
    let dirList = fs.readdirSync(path)
    if (dirList.length > 0) {
      dirList.forEach(item => {
        fs.stat(`${path}/${item}`, (err, file) => {
          if (err) {
            console.log(err)
            return false
          } else {
            if (file.isDirectory()) {
              emptyDir(`${path}/${item}`)
            } else {
              fs.unlinkSync(`${path}/${item}`)
              res()
            }
          }
        })
      })
    } else {
      fs.rmdir(path, () => {
        console.log('删除成功')
        res()
      })
    }
  })
}

module.exports = emptyDir
