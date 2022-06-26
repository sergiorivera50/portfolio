import express, { Router } from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'

const middlewares = Router()

middlewares.use(fileUpload())
middlewares.use(express.json())
middlewares.use(cors())

export default middlewares
