import express, { Application } from 'express'
import routes from './api/routes'
import middlewares from './api/middlewares'

const app: Application = express()

app.use(routes)
app.use(middlewares)

app.use('*', (req, res) => res.status(404).json({ error: 'not found' }))

export default app
