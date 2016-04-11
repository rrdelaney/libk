var fs = require('fs')

module.exports = function (path, dir) {
  return function (ctx, next) {
    return new Promise(function (resolve, reject) {
      if (!ctx.path.startsWith(path)) {
        return resolve(next())
      }

      var filePath = ctx.path.replace(path, dir)

      fs.stat(filePath, function (err, stat) {
        if (err) {
          return resolve(next())
        }

        ctx.body = ''
        var stream = fs.createReadStream(filePath)

        stream.on('data', function (chunk) {
          ctx.body += chunk
        })

        stream.on('close', function () {
          resolve(next())
        })
      })
    })
  }
}
