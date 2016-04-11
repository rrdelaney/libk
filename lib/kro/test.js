import test from 'ava'
import request from 'supertest-as-promised'
import Koa from 'koa'
import { GET, POST, useRoutes } from './index'

const routes = {
  testGet: GET('/test')(ctx => {
    ctx.body = {
      test: true
    }
  }),
  testPost: POST('/tp')(ctx => {
    ctx.body = {
      test: false
    }
  }),
  asyncTestGet: GET('/asyncTest')(async ctx => {
    ctx.body = {
      test: true
    }
  }),
  getVars: GET('/vars/:id/:name')((ctx, { id, name }) => {
    ctx.body = id + '/' + name
  })
}

test('get request', async t => {
  const app = new Koa()
  app.use(routes.testGet)

  const { body } = await request(app.listen())
    .get('/test')
    .expect(200)

  t.true(body.test)
})

test('async get request', async t => {
  const app = new Koa()
  app.use(routes.asyncTestGet)

  const { body } = await request(app.listen())
    .get('/asyncTest')
    .expect(200)

  t.true(body.test)
})

test('post request', async t => {
  const app = new Koa()
  app.use(routes.testPost)

  const { body } = await request(app.listen())
    .post('/tp')
    .expect(200)

  t.false(body.test)
})

test('apply routes', async t => {
  const app = new Koa()
  app.use(useRoutes(routes))

  const { body: getBody } = await request(app.listen())
    .get('/test')
    .expect(200)

  t.true(getBody.test)

  const { body: postBody } = await request(app.listen())
    .post('/tp')
    .expect(200)

  t.false(postBody.test)
})

test('route variables', t => {
  const app = new Koa()
  app.use(routes.getVars)

  return request(app.listen())
    .get('/vars/1/ryan')
    .expect(200)
    .expect('1/ryan')
})
