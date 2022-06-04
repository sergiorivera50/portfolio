import { Response } from 'express'

export function successResponse(res: Response, data, statusCode=200) {
  return res.status(statusCode).send({ success: true, ...data })
}

export function errorResponse(res: Response, msg: String, statusCode=500) {
  return res.status(statusCode).send({ success: false, error: msg })
}
