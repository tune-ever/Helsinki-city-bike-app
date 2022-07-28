import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
const JourneyList = () => {
  const [journeys, setJourneys] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    journeyService.get50().then(journeys => 
      setJourneys(journeys)
    )
  })

  return (
    <div>

    </div>
  )
}