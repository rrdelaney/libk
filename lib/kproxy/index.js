var httpProxy = require('http-proxy')

module.exports = function (target) {
  var options = typeof target === 'string' ? { target } : target
  var proxy = httpProxy.createProxyServer(options)

  return function (ctx, next) {
    return new Promise(function (resolve, reject) {
      proxy.web(ctx.req, ctx.res, resolve)
    })
  }
}
