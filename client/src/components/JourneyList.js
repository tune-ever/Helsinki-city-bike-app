import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import stationsService from '../services/stationsService'
import JourneyRow from './JourneyRow'
import Pagination from './Pagination'

const JourneyList = ({ allStations }) => {

  const [journeys, setJourneys] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalJourneys, setTotalJourneys] = useState(0)
  
  const stationsArray = []
  allStations.map(station =>
    stationsArray[station.id] = station)

  useEffect(() => {
    journeyService.getJourneys(currentPage).then(journeys =>{
      setJourneys(journeys)
    }
    )
  }, [currentPage])

  useEffect(() => {
    journeyService.getTotal().then(total => setTotalJourneys(total))
  }, [])

  
  const prevPage = () => {
    if(currentPage > 0)
      setCurrentPage(currentPage-1)
  }

  const nextPage = () => {
    if(currentPage + 1 < (totalJourneys/15))
      setCurrentPage(currentPage+1)
  }

  const updatePage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  
  if(stationsArray.length > 5)
  return (
    <div>
      <h1>Journeys</h1>
      <table>
        <thead><tr><th>Departure</th><th>Return</th>
        <th>Distance</th><th>Duration</th></tr></thead>
        <tbody>
          {journeys.map((journey) => 
            <JourneyRow key={journey._id} journey={journey} 
            stationsArray={stationsArray} />
          )}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} prevPage={prevPage}
      totalElements={totalJourneys} nextPage={nextPage}
      updatePage={updatePage} />
    </div>
  )
  else
   return(<></>)
}

export default JourneyList