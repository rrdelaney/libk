import test from 'ava'
import request from 'supertest-as-promised'
import Koa from 'koa'
import kset from './index'

test('kset', t => {
  t.plan(2)

  const app = new Koa()
  const x = 'hello'
  const y = 'world'

  app.use(kset({
    x: x,
    y: y
  }))

  app.use((ctx, next) => {
    t.is(ctx.state.x, 'hello')
    t.is(ctx.state.y, 'world')

    ctx.body = ''
    return next()
  })

  return request(app.listen()).get('').expect(200)
})
