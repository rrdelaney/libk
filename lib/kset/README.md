# KSET

Simple state settings for Koa@2

```js
import Koa from 'koa'
import kset from 'kset'

const HELLO = 'hello'
const WORLD = 'world'

const app = new Koa()
app.use(kset({ HELLO, WORLD }))

app.use(async ctx => {
  ctx.body = ctx.state.HELLO + ctx.state.WORLD
})

app.listen(3000)
```
