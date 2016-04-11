# KPING 

Simple endpoint testing for Koa@next

```js
import Koa from 'koa'
import kping from 'kping'

const app = new Koa()
app.use(kping)

app.listen(3000)
```

Now `localhost:3000/ping` will always respond with `pong` now
