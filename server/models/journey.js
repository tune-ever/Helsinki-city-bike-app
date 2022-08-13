const mongoose = require('mongoose')

const journeySchema = new mongoose.Schema({
  dId: String,
  rId: String,
  dis: Number,
  dur: Number
})

module.exports = mongoose.model('Journey', journeySchema)
