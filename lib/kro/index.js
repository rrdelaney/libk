function resolve (path, route) {
  var ROUTE_REGEX = '([\\w\\d%]+)'

  var varNames = path.match(/:(\w+)/g)
  if (varNames === null) {
    return path === route
  }

  var varVals = route.match(new RegExp(path.replace(/:(\w+)/g, ROUTE_REGEX)))
  if (varVals === null) {
    return false
  }

  var args = {}
  varNames
    .map(_ => _.slice(1))
    .forEach((name, idx) => args[name] = varVals.slice(1)[idx])

  return args
}

function createRoute (method) {
  return function (path) {
    return function (fn) {
      return function (ctx, next) {
        if (ctx.method === method) {
          var allow = resolve(path, ctx.path)

          if (allow === true) {
            return Promise.resolve(fn(ctx))
          } else if (allow === false) {
            return next()
          } else {
            return Promise.resolve(fn(ctx, allow))
          }
        }

        return next()
      }
    }
  }
}

exports.GET = createRoute('GET')
exports.POST = createRoute('POST')

exports.useRoutes = function (routes) {
  return function (ctx, next) {
    Object.keys(routes).forEach(function (r) {
      ctx.app.use(routes[r])
    })

    return next()
  }
}
