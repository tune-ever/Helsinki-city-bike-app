const config = require('./utils/config')
const express = require('express')
const app = express()
const stationsRouter = require('./controllers/stations')
const mongoose = require('mongoose')
const JourneysRouter = require('./controllers/journeys')


console.log(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.log('error connecting ' + error.message))

app.use(express.json())

app.use('/api/stations', stationsRouter)
app.use('/api/journeys', JourneysRouter)


module.exports = app
