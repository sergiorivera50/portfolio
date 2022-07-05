import app from './app'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { logger } from './api/utils/logger.util'

dotenv.config()
const port = Number(process.env.PORT || 8000)

logger.info('Connecting to MongoDB...')
mongoose.connect(process.env.PORTFOLIO_DB_URI)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async () => {
    app.listen(port, () => logger.info(`Server started on port ${port} 🎉 (as ${process.env.NODE_ENV})`))
  })
