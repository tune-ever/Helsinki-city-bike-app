import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import JourneyRow from './JourneyRow'
import Pagination from './Pagination'

const JourneyList = () => {

  const [journeys, setJourneys] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    journeyService.getJourneys(currentPage).then(journeys =>{
      setJourneys(journeys)
    }
    )
  }, [currentPage])

  useEffect(() => {
    journeyService.getTotal().then(total => setTotalPages(total))
  })
  
  const prevPage = () => {
    setCurrentPage(currentPage-1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage+1)
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
      <Pagination currentPage={currentPage} prevPage={prevPage}
      totalPages={totalPages} nextPage={nextPage}/>
    </div>
  )
}

export default JourneyList