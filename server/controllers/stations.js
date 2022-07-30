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
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page)
    response.json(stations)
  }
})


module.exports = StationsRouter