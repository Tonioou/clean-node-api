import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .get('/api/signup')
      .send({
        name: 'Antonio',
        email: 'antonio@sample.com',
        password: '1123',
        passwordConfirmation: '1123'
      })
      .expect(200)
  })
})
