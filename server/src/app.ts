import express, { Application } from 'express'
import cors from 'cors'
import routes from './api/routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use(routes)
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }))

export default app
