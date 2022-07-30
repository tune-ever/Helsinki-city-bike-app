const StationsRouter = require('express').Router()
const Station = require('../models/station')

StationsRouter.get('/', async (request, response) => {
  const lastIndex = request.headers.lastindex
  const stations = await Station.find({}).skip(lastIndex).limit(25)
  response.json(stations)
})

module.exports = StationsRouter