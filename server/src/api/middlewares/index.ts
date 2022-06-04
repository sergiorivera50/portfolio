import express, { Router } from 'express'
import cors from 'cors'

const middlewares = Router()

middlewares.use(express.json())
middlewares.use(cors())

export default middlewares
