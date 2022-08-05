const JourneysRouter = require('express').Router()
const Journey = require('../models/journey')

JourneysRouter.get('/', async (request, response) => {
  const PAGE_SIZE = 15
  const page = request.query.page
  const depId = request.query.did
  const returnId = request.query.rid
  const total = request.query.total

  if(total){
    const total = await Journey.find({}).count()
    response.json(total)
  }
  else if(depId){
    const amountFromId = await Journey
      .countDocuments({ dId: depId })
    response.json(amountFromId)
  }
  else if(returnId){
    const amountToId = await Journey
      .countDocuments({ rId: returnId })
    response.json(amountToId)
  }
  else {
    const journeys = await Journey.find({})
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page)
    response.json(journeys)
  }
})


module.exports = JourneysRouter