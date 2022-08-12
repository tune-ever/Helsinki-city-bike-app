const config = require('./utils/config')
const express = require('express')
const app = express()
const stationsRouter = require('./controllers/stations')
const mongoose = require('mongoose')
const journeysRouter = require('./controllers/journeys')
const path = require('path')

console.log(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.log('error connecting ' + error.message))

app.use(express.json())

app.use('/api/stations', stationsRouter)
app.use('/api/journeys', journeysRouter)
app.use(express.static('build'))

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


module.exports = app
