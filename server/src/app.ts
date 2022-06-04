import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('*', (req, res) => res.status(404).json({ error: 'not found' }))

export default app
