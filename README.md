# libK [![Build Status](https://travis-ci.org/rrdelaney/libk.svg?branch=master)](https://travis-ci.org/rrdelaney/libk)

Exports several Koa@next middlewares for use

* __bodyParser__: [KBODY](https://github.com/rrdelaney/KBODY)
* __cors__: [KORS](https://github.com/rrdelaney/KORS)
* __route__: [KRO](https://github.com/rrdelaney/KRO)
* __useState__: [KSET](https://github.com/rrdelaney/KSET)
* __ping__: [KPING](https://github.com/rrdelaney/KPING)
* __proxy__: [KPROXY](https://github.com/rrdelaney/KPROXY)
* __statik__: [KSTATIC](https://github.com/rrdelaney/KSTATIC)

```js
import Koa from 'koa'
import { bodyParser, cors, route, useState, ping, proxy } from 'libk'

const app = new Koa()

// ...

app.listen(3000)
```
