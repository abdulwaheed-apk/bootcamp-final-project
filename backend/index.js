const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const colors = require('colors')
const cookieParser = require('cookie-parser')

// configuration
const app = express()
const connectDB = require('./config/connectDatabase')
app.use(cookieParser())
//
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// Connect Database
connectDB()
app.get('/', async (req, res) => {
  res.send('Hello')
})

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/exercises', require('./routes/exerciseRoutes'))

const port = process.env.PORT || 8000
app.listen(port, async (req, res) => {
  console.log(`Server started at http://localhost:${port}`.cyan.underline)
})
