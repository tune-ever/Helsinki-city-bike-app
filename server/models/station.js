const mongoose = require('mongoose')

const stationSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  x: String,
  y: String
})

module.exports = mongoose.model('Station', stationSchema)