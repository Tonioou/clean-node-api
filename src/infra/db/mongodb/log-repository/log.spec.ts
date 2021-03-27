import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { LogMongoRepository } from './log'

describe('Log Mongo Repository', () => {
    let errorCollection: Collection
  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.
    deleteMany({})
  })
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should create an error log on success', async () => {
   const sut = new LogMongoRepository()
   await sut.logError('any_error')
   const count = await errorCollection.countDocuments()
   expect(count).toBe(1)
  })
})
