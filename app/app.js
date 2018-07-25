'use strict'

require('dotenv').config({ silent: true })

const Koa = require('koa')
const Router = require('koa-router')
const helmet = require('koa-helmet')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router()

const errorHandler = require('./middleware/errorHandler')
const graphqlRouter = require('./gql')

router.get('/', async ctx => {
  ctx.body = { status: 'healthy' }
})

app.keys = ['ineed', 'better', 'keys']
app
  .use(helmet())
  .use(bodyparser())
  .use(errorHandler)
  .use(graphqlRouter.routes())
  .use(graphqlRouter.allowedMethods())
  .use(router.routes())
  .use(router.allowedMethods())

if ((process.env.NODE_ENV || 'development') === 'development') {
  app.use(logger())
}

module.exports = app
