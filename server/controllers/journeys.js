const JourneysRouter = require('express').Router()
const Journey = require('../models/journey')

JourneysRouter.get('/', async (request, response) => {
  const PAGE_SIZE = 15
  const page = request.query.page
  const total = request.query.total
  const sort = request.query.sort

  if(sort === 'disrev'){
    const journeys = await Journey
      .find({})
      .sort({ 'dis': -1 })
      .limit(PAGE_SIZE)
      .skip(page * PAGE_SIZE)
    response.json(journeys)
  }
  else if(sort === 'durrev'){
    const journeys = await Journey
      .find({})
      .sort({ 'dur': -1 })
      .limit(PAGE_SIZE)
      .skip(page * PAGE_SIZE)
    response.json(journeys)
      
  }
  else if(sort === 'dis'){
    const journeys = await Journey
      .find({})
      .sort({ 'dis': 1 })
      .limit(PAGE_SIZE)
      .skip(page * PAGE_SIZE)
    response.json(journeys)
  }
  else if(sort === 'dur'){
    const journeys = await Journey
      .find({})
      .sort({ 'dur': 1 })
      .limit(PAGE_SIZE)
      .skip(page * PAGE_SIZE)
    response.json(journeys)
  }
  else if(total){
    const total = await Journey.find({}).count()
    response.json(total)
  }
  else {
    const journeys = await Journey.find({})
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page)
    response.json(journeys)
  }
})


module.exports = JourneysRouter