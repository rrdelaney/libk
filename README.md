# libK

Exports several Koa@next middlewares for use

* __bodyParser__: [KBODY](https://github.com/rrdelaney/libk/tree/master/lib/kbody)
* __cors__: [KORS](https://github.com/rrdelaney/libk/tree/master/lib/kors)
* __route__: [KRO](https://github.com/rrdelaney/libk/tree/master/lib/kro)
* __useState__: [KSET](https://github.com/rrdelaney/libk/tree/master/lib/kset)
* __ping__: [KPING](https://github.com/rrdelaney/libk/tree/master/lib/kping)
* __proxy__: [KPROXY](https://github.com/rrdelaney/libk/tree/master/lib/kproxy)
* __statik__: [KSTATIC](https://github.com/rrdelaney/libk/tree/master/lib/kstatic)

```js
import Koa from 'koa'
import { bodyParser, cors, route, useState, ping, proxy, statik } from 'libk'

const app = new Koa()

// ...

app.listen(3000)
```
