import { Express } from 'express'
import { bodyParser, cors, contentType } from '../middlewares/'
export default (app: Express): void => {
  app.use(cors)
  app.use(contentType)
  app.use(bodyParser)
}
