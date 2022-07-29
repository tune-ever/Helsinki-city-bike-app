const mongoose = require('mongoose')

const journeySchema = mongoose.Schema({
  dId: Number,
  rId: Number,
  dis: Number,
  dur: Number
})

module.exports = mongoose.model('Journey', journeySchema)