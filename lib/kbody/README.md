# KBODY [![Build Status](https://travis-ci.org/rrdelaney/KBODY.svg?branch=master)](https://travis-ci.org/rrdelaney/KBODY)

Simple body parsing for Koa@next

```js
import Koa from 'koa'
import kbody from 'kbody'

const app = new Koa()
app.use(kbody)

app.use(async ctx => {
  const { A, B } = ctx.request.body

  ctx.body = A + B
})

app.listen(3000)
```
