const mongoose = require('mongoose')

const stationSchema = ({
  id: Number,
  name: String,
  address: String,
  x: String,
  y: String
})

module.exports = mongoose.model('Station', stationSchema)