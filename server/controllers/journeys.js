const JourneyRouter = require('express').Router()
const Journey = require('../models/journey')

JourneyRouter.get('/', async (request, response) => {
  const journeys = await Journey
    .find({})
  response.json(journeys)
})

JourneyRouter.post('/', async (request, response) => {
  const body = request.body

  const journey = new Journey({
    departure: body.departure,
    return: body.return,
    departureId: body.departureId,
    departureName: body.departureName,
    returnId: body.returnId,
    returnName: body.returnName,
    distance: body.distance,
    duration: body.duration
  })
  await journey.save()

  response.status(201)
})

module.exports = JourneyRouter