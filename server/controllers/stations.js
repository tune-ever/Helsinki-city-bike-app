const StationsRouter = require('express').Router()
const Station = require('../models/station')

StationsRouter.get('/', async (request, response) => {
  const PAGE_SIZE = 15
  const page = request.query.page
  const allFlag = request.query.all

  if (allFlag) {
    const stations = await Station.find({})
      .sort({ name: 1 })
    response.json(stations)
  } else {
    const stations = await Station.find({})
      .sort({ name: 1 })
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page)
    response.json(stations)
  }
})

module.exports = StationsRouter
