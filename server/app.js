const config = require('./utils/config')
const express = require('express')
const app = express()
const journeysRouter = require('./controllers/journeys')
const mongoose = require('mongoose')


console.log(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.log('error connecting ' + error.message))

app.use(express.json())

app.use('/api/journeys', journeysRouter)



module.exports = app
