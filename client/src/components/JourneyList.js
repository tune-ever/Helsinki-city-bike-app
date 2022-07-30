import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import JourneyRow from './JourneyRow'
import Pagination from './Pagination'

const JourneyList = () => {

  const [journeys, setJourneys] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    journeyService.getJourneys(page).then(journeys =>{
      setJourneys(journeys)
    }
    )
  }, [page])


  const nextPage = () => {
    console.log(journeys)
  }
  
  const prevPage = () => {

  }

  return (
    <div>
      <table>
        <thead><tr><th>Departure</th><th>Return</th>
        <th>Distance</th><th>Duration</th></tr></thead>
        <tbody>
          {journeys.map((journey) => 
            <JourneyRow key={journey._id} journey={journey} />
          )}
        </tbody>
      </table>
      <Pagination page={page} />
    </div>
  )
}

export default JourneyList