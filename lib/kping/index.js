module.exports = function (ctx, next) {
  if (ctx.method === 'GET' && ctx.path === '/ping') {
    ctx.body = 'pong'
  }
}
