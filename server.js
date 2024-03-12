const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')

const cookieParser = require('cookie-parser')

const cors = require('cors')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/.env' })

// Connect to database
connectDB()

// Route files
const auth = require('./routes/auth')
const users = require('./routes/users')
const profiles = require('./routes/profiles')
const products = require('./routes/products')
const markets = require('./routes/markets')
const posts = require('./routes/posts')
const uploadRoutes = require('./routes/uploadRoutes.js')

const app = express()

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))

  // Serve static files from both backend and frontend during development
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
  app.use(express.static(path.join(__dirname, 'frontend/public')))
}

// Enable CORS
app.use(cors({ origin: '*' }))

// Serve static files from the frontend build folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.use('/articonnect/api/v1/users', auth)
app.use('/articonnect/api/v1/users', users)
app.use('/articonnect/api/v1/profiles', profiles)
app.use('/articonnect/api/v1/products', products)
app.use('/articonnect/api/v1/markets', markets)
app.use('/articonnect/api/v1/upload', uploadRoutes)
app.use('/articonnect/api/v1/posts', posts)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  ),
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  // server.close(() => process.exit(1));
})
