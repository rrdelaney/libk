module.exports = function (settings) {
  return function (ctx, next) {
    Object.keys(settings).forEach(function (s) {
      ctx.state[s] = settings[s]
    })

    return next()
  }
}
