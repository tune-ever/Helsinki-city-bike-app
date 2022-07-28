import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import JourneyRow from './JourneyRow'

const JourneyList = () => {

  const [journeys, setJourneys] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    journeyService.get10().then(journeys =>
      setJourneys(journeys)
    )
  }, [])

  return (
    <div>
      {journeys.map(journey => 
        <JourneyRow key={journey._id} journey={journey} />)}
    </div>
  )
}

export default JourneyList