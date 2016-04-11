import test from 'ava'
import request from 'supertest-as-promised'
import Koa from 'koa'
import kping from './index'

test('kbody', t => {
  const app = new Koa()
  app.use(kping)

  app.use(ctx => {
    ctx.body = 'nope'
  })

  return request(app.listen())
    .get('/ping')
    .expect(200)
    .expect('pong')
})
