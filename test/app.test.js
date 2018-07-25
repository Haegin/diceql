const request = require('supertest')
const app = require('../app/app')

const server = app.listen()

test('/', async () => {
  const response = await request(server).get('/')
  expect(response.status).toBe(200)
  expect(response.body).toEqual({ status: 'healthy' })
})
