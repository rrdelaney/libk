import test from 'ava'
import request from 'supertest-as-promised'
import Koa from 'koa'
import proxy from './index'

const dummyServer = new Koa()
dummyServer.use(async ctx => { ctx.body = 'test!!!' })
dummyServer.listen(3000)

test('proxy target', t => {
  const app = new Koa()
  app.use(proxy('http://localhost:3000'))

  return request(app.listen())
    .get('/')
    .expect(200)
    .expect('test!!!')
})

test('proxy options', t => {
  const app = new Koa()
  app.use(proxy({ target: 'http://localhost:3000' }))

  return request(app.listen())
    .get('/')
    .expect(200)
    .expect('test!!!')
})

test('proxy should be last', t => {
  const app = new Koa()
  app.use(async ctx => { ctx.body = 'nope!!!' })
  app.use(proxy({ target: 'http://localhost:3000' }))

  return request(app.listen())
    .get('/')
    .expect(200)
    .expect('nope!!!')
})
