const mongoose = require('mongoose')

const journeySchema = ({
  departure: String,
  return: String,
  departureId: Number,
  departureName: String,
  returnId: Number,
  returnName: String,
  distance: Number,
  duration: Number
})


module.exports = mongoose.model('Journey', journeySchema)