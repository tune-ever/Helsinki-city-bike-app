import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import stationsService from '../services/stationsService'
import JourneyRow from './JourneyRow'
import Pagination from './Pagination'

const JourneyList = () => {

  const [journeys, setJourneys] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [allStations, setAllStations] = useState([])

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
    journeyService.getTotal().then(total => setTotalPages(total))
  }, [])

  useEffect(() => {
    stationsService.getAll().then(stations => {
      setAllStations(stations)
    })
  }, [])
  
  const prevPage = () => {
    setCurrentPage(currentPage-1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage+1)
  }

  const updatePage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  
  if(allStations.length > 5)
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
      totalPages={totalPages} nextPage={nextPage}
      updatePage={updatePage} />
    </div>
  )
  else
   return(<></>)
}

export default JourneyList