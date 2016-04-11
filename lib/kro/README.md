# KRO [![Build Status](https://travis-ci.org/rrdelaney/KRO.svg?branch=master)](https://travis-ci.org/rrdelaney/KRO)
Simple routing for Koa@next

```js
import Koa from 'koa'
import { GET, POST, useRoutes } from 'kro'

const routes = {
  @GET('/true')
  getTrue (ctx) {
    ctx.body = { test: true }
  },

  @GET('/false')
  getFalse (ctx) {
    ctx.body = { test: false }
  },

  @POST('/api')
  api (ctx) {
    ctx.body = { version: 1 }
  }
}

const app = new Koa()

// Built-in useRoutes
useRoutes(app, routes)
// or app.use
app.use(routes.getTrue)
app.use(routes.getFalse)
app.use(routes.api)
// Not both

app.listen(3000)
```
