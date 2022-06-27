import express, { Application } from 'express'
import routes from './api/routes'
import middlewares from './api/middlewares'
import path from 'path'

const app: Application = express()

app.use(middlewares)
app.use('/static', express.static(path.join(__dirname, '..', 'public')))
app.use('/api/v1', routes)

app.use('*', (req, res) => res.status(404).json({ error: `${req.method} ${req.path} not found` }))

export default app
