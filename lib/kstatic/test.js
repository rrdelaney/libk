import test from 'ava'
import request from 'supertest-as-promised'
import Koa from 'koa'
import statik from './index'

test('serve static assets', t => {
  const app = new Koa()
  app.use(statik('/static', 'fixtures'))

  return request(app.listen())
    .get('/static/test.txt')
    .expect(200)
    .expect('test!!!\n')
})

test('forward on not found', t => {
  const app = new Koa()
  app.use(statik('', 'static'))
  app.use(async ctx => {
    ctx.body = 'nope!!!'
  })

  return request(app.listen())
    .get('/app.js')
    .expect(200)
    .expect('nope!!!')
})

test('forward on index', t => {
  const app = new Koa()
  app.use(statik('/', 'fixtures'))
  app.use(async ctx => {
    ctx.body = 'nope!!!'
  })

  return request(app.listen())
    .get('/static/nope.txt')
    .expect(200)
    .expect('nope!!!')
})
