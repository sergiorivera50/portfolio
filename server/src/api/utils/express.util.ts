import { Response } from 'express'

export default class ExpressUtils {
  static successResponse(res: Response, data, statusCode=200) {
    return res.status(statusCode).send({ success: true, ...data })
  }
  
  static errorResponse(res: Response, msg: String, statusCode=500) {
    return res.status(statusCode).send({ success: false, error: msg })
  }
}
