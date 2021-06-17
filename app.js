import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import colors from 'colors'

import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import faceRoutes from './routes/faceRoutes.js'
import carRoutes from './routes/carRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/faces', faceRoutes)
app.use('/api/cars', carRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})

// app.get('/', (req, ))

const PORT = process.env.PORT || 8000
const ENV = process.env.NODE_ENV || 'no enviroment'
app.listen(
  PORT,
  console.log(`Server running in ${ENV} mode on port ${PORT}`.blue.inverse)
)
