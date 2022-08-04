import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import JourneyRow from './JourneyRow'
import Pagination from './Pagination'
import './styles.css'

const JourneyList = ({ allStations }) => {

  const [journeys, setJourneys] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalJourneys, setTotalJourneys] = useState(0)
  
  const stationsArray = []
  allStations.map(station =>
    stationsArray[parseInt(station.id)] = station)

  useEffect(() => {
    journeyService.getJourneys(currentPage).then(journeys =>{
      setJourneys(journeys)
    }
    )
  }, [currentPage])

  useEffect(() => {
    journeyService.getTotal().then(total => setTotalJourneys(total))
  }, [])

  
  const goToPreviousPage = () => {
    if(currentPage > 0)
      setCurrentPage(currentPage-1)
  }

  const goToNextPage = () => {
    if(currentPage + 1 < (totalJourneys/15))
      setCurrentPage(currentPage+1)
  }

  const goToIndexPage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  
  if(stationsArray.length > 5)
  return (
    <div>
      <h1>Journeys</h1>
      <h3>Journeys data from 05-07/2021</h3>
      <h4>{totalJourneys} journeys</h4>
      <table>
        <thead><tr><th>Departure</th><th>Return</th>
        <th>Distance</th><th>Duration</th></tr></thead>
        <tbody>
          {journeys.map((journey) => 
            <JourneyRow 
              key={journey._id} 
              journey={journey} 
              stationsArray={stationsArray} 
            />
          )}
        </tbody>
      </table>
      <Pagination 
        currentPage={currentPage} 
        goToPreviousPageage={goToPreviousPage}
        totalElements={totalJourneys} 
        goToNextPage={goToNextPage}
        goToIndexPage={goToIndexPage} 
      />
    </div>
  )
  else
   return(<></>)
}

export default JourneyList