const mongoose = require('mongoose')

const journeySchema = new mongoose.Schema({
  dId: String,
  rId: String,
  dis: String,
  dur: String
})

module.exports = mongoose.model('Journey', journeySchema)