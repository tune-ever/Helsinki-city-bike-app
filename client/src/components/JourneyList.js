import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import JourneyRow from './JourneyRow'

const JourneyList = () => {

  const [journeys, setJourneys] = useState([])
  const [lastIndex, setLastIndex] = useState(25)

  useEffect(() => {
    journeyService.getNext25(0).then(journeys =>
      setJourneys(journeys)
    )
  }, [])


  const nextPage = () => {
    journeyService.getNext25(lastIndex).then(
      journeys =>
        setJourneys(journeys)
    )
    setLastIndex(lastIndex + 25)
  }
  
  const prevPage = () => {
    journeyService.getNext25(lastIndex-50).then(
      journeys => setJourneys(journeys)
    )
    setLastIndex(lastIndex-50)
  }

  return (
    <div>
      <table>
        <thead><tr><th>Departure</th><th>Return</th>
        <th>Distance</th><th>Duration</th></tr></thead>
        <tbody>
          {journeys.map(journey => 
            <JourneyRow key={journey._id} journey={journey} />)}
        </tbody>
      </table>
      <button onClick={nextPage}>Next</button>
      {lastIndex > 25 && 
        <button onClick={prevPage}>Prev</button>
      }
    </div>
  )
}

export default JourneyList