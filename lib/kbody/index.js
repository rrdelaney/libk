module.exports = function (ctx, next) {
  return new Promise(resolve => {
    if (ctx.is('json')) {
      var body = []

      ctx.req
      .on('data', function (chunk) {
        body.push(chunk)
      })
      .on('end', function () {
        ctx.request.body = JSON.parse(Buffer.concat(body).toString())

        resolve(next())
      })
    } else {
      resolve(next())
    }
  })
}
