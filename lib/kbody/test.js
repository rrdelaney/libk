import test from 'ava'
import request from 'supertest-as-promised'
import Koa from 'koa'
import kbody from './index'

test('kbody', t => {
  t.plan(2)

  const app = new Koa()
  app.use(kbody)

  app.use(async (ctx, next) => {
    const { hello, world } = await new Promise(resolve => setTimeout(_ => resolve(ctx.request.body), 500))
    t.is(hello, 'HELLO')
    t.is(world, 'WORLD')

    ctx.body = ''
    return next()
  })

  return request(app.listen())
    .post('')
    .send({ hello: 'HELLO', world: 'WORLD' })
    .expect(200)
})
