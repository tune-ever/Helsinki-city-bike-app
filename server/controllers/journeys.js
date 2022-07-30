const JourneysRouter = require('express').Router()
const Journey = require('../models/journey')

JourneysRouter.get('/', async (request, response) => {
  const rowsToSkip = request.headers.rowstoskip
  console.log(rowsToSkip)
  const journeys = await Journey.find({}).skip(rowsToSkip).limit(25)
  response.json(journeys)
})

module.exports = JourneysRouter