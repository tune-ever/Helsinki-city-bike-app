const mongoose = require('mongoose')

const stationSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  x: String,
  y: String,
  startNum: Number,
  endNum: Number
})

module.exports = mongoose.model('Station', stationSchema)