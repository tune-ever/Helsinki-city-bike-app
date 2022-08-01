const StationsRouter = require('express').Router()
const Station = require('../models/station')

StationsRouter.get('/', async (request, response) => {
  const PAGE_SIZE = 15
  const page = request.query.page
  if(page === 'all'){
    const stations = await Station.find({})
    response.json(stations)
  }
  else{
    const stations = await Station.find({})
      .sort({ 'name': 1 })
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page)
    response.json(stations)
  }
})

StationsRouter.put('/', async (request, response) => {
  const station = request.body
  const id = request.query.id

  await Station.findByIdAndUpdate(
      id, station,
      { new: true, runValidators: true, context: 'query' }
    )
  response.status(200)
})

module.exports = StationsRouter