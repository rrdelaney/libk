# KSTATIC [![Build Status](https://travis-ci.org/rrdelaney/KSTATIC.svg?branch=master)](https://travis-ci.org/rrdelaney/KSTATIC)

Simple static directory serving for Koa@next

```js
import Koa from 'koa'
import statik from 'kstatik'

const app = new Koa()

app.use(statik('/static', '/path/to/static/files'))

app.listen(3000)
```
