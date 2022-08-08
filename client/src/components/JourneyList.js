import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import JourneyRow from './JourneyRow'
import Pagination from './Pagination'
import './styles.css'

const JourneyList = ({ allStations }) => {

  const [journeys, setJourneys] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalJourneys, setTotalJourneys] = useState(0)
  
  const stationsArray = []
  allStations.map(station =>
    stationsArray[parseInt(station.id)] = station)

  useEffect(() => {
    journeyService.getJourneys(currentIndex).then(journeys =>{
      console.log(journeys)
      setJourneys(journeys)
    }
    )
  }, [currentIndex])

  useEffect(() => {
    journeyService.getTotal().then(total => setTotalJourneys(total))
  }, [])

  
  const goToPreviousPage = () => {
    if(currentIndex > 0)
      setCurrentIndex(currentIndex-1)
  }

  const goToNextPage = () => {
    if(currentIndex + 1 < (totalJourneys/15))
      setCurrentIndex(currentIndex+1)
  }

  const goToIndexPage = (pageIndex) => {
    setCurrentIndex(pageIndex)
  }
  
  const orderByDistance = () => {
    journeyService.getJourneysByDistance().then(journeys => {
      console.log(journeys)
      setJourneys(journeys)
    })
  }

  if(stationsArray.length > 5)
  return (
    <div className='listComponent'>
      <h2>Journeys</h2>
      <h3>Journeys data from 05-07/2021</h3>
      <h4>{totalJourneys} journeys</h4>
      <table>
        <thead><tr><th>Departure</th><th>Return</th>
        <th onClick={orderByDistance}>Distance</th><th>Duration</th></tr></thead>
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
        currentIndex={currentIndex} 
        goToPreviousPageage={goToPreviousPage}
        totalElements={totalJourneys} 
        goToNextPage={goToNextPage}
        goToIndexPage={goToIndexPage}
        pageSize = '15'
      />
    </div>
  )
  else
   return(<></>)
}

export default JourneyList