# KPROXY 

Simple proxy for Koa@next.
Defers actual proxying to [node-http-proxy](https://github.com/nodejitsu/node-http-proxy)

```js
import Koa from 'koa'
import { GET } from 'kro'
import proxy from 'kproxy'

const app = new Koa()

app.use(GET('/hello')(async ctx => {
  ctx.body = 'hello!'
}))

app.use(kproxy('http://localhost:4000'))

app.listen(3000)
```
