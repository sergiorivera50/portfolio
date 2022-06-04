import app from './app'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const port = Number(process.env.PORT || 8000)

mongoose.connect(process.env.PORTFOLIO_DB_URI)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async () => {
    app.listen(port, () => console.log(`\nServer started on port ${port} 🎉 (as ${process.env.NODE_ENV})`))
  })
