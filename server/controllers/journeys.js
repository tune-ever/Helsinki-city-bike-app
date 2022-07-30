const JourneysRouter = require('express').Router()
const Journey = require('../models/journey')

JourneysRouter.get('/', async (request, response) => {
  const PAGE_SIZE = 15
  const page = request.query.page
  if(page === 'total'){
    const total = await Journey.estimatedDocumentCount({})
    response.json(total)
  }
  else{
  const journeys = await Journey.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page)
    response.json(journeys)
  }
})

module.exports = JourneysRouter