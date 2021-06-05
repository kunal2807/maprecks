import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import colors from 'colors'

import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})

const PORT = process.env.PORT || 8000
const ENV = process.env.NODE_ENV || 'no enviroment'
app.listen(
  PORT,
  console.log(`Server running in ${ENV} mode on port ${PORT}`.blue.inverse)
)