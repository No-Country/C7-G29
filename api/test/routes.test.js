const request = require('supertest')
const app = require('../src/app')
const server = require('../index')
const mongoose = require('mongoose')

const api = request(app)

describe('GET /publication', () => {
  test('devuelve un json con todas las publicaciones', async () => {
    await api
      .get('/api/publication')
      .expect(201)
      .expect('Content-Type', /application\/json/)
  })
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})

// afterAll(async () => {
// 	await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
// });