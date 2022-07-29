const JourneysRouter = require('express').Router()
const Journey = require('../models/journey')

JourneysRouter.get('/', async (request, response) => {
  const lastIndex = request.headers.lastindex
  const journeys = await Journey.find({}).limit(25)
  response.json(journeys)
})

module.exports = JourneysRouter