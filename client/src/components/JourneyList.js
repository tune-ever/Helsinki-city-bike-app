import { useState, useEffect } from 'react'
import journeyService from '../services/journeyService'
import JourneyRow from './JourneyRow'
import Pagination from './Pagination'
import './styles.css'

const JourneyList = ({ allStations }) => {

  const [journeys, setJourneys] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalJourneys, setTotalJourneys] = useState(0)
  const [activeSortType, setActiveSortType] = useState('')
  
  const stationsArray = []
  allStations.map(station =>
    stationsArray[parseInt(station.id)] = station)

  useEffect(() => {
    if (activeSortType === 'distance'){
      journeyService.getJourneysByDistance(currentIndex).then(journeys =>{
        setJourneys(journeys)
      })
    }
    if (activeSortType === 'duration'){
      journeyService.getJourneysByDuration(currentIndex).then(journeys => {
        setJourneys(journeys)
      })
    }
    if(!activeSortType){
      journeyService.getJourneys(currentIndex).then(journeys => {
        setJourneys(journeys)
      })
    }
  }, [currentIndex])

  useEffect(() => {
    journeyService.getTotal().then(total => setTotalJourneys(total))
  }, [])

  
  const goToPrevPage = () => {
    if(currentIndex > 0)
      setCurrentIndex(currentIndex-1)
  }

  const goToNextPage = () => {
    if(currentIndex + 1 < (totalJourneys/15))
      setCurrentIndex(currentIndex+1)
  }

  const goToIndexPage = (pageIndex) => {
    // don't allow users to go to last page with sort active, 
    // too hard for database
    if(activeSortType && pageIndex > 5000)
      return
    setCurrentIndex(pageIndex)
  }
  
  const orderByDistance = () => {
    journeyService.getJourneysByDistance().then(journeys => {
      setJourneys(journeys)
    })
    setActiveSortType('distance')
  }

  const orderByDuration = () => {
    journeyService.getJourneysByDuration().then(journeys => {
      setJourneys(journeys)
    })
    setActiveSortType('duration')
  }

  if(stationsArray.length > 5)
  return (
    <div className='listComponent'>
      <h2>Journeys</h2>
      <h3>Journeys data from 05-07/2021</h3>
      <h4>{totalJourneys} journeys</h4>
      <table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Return</th>
            <th className='clickableHeader'
              onClick={orderByDistance}>Distance
            </th>
            <th className='clickableHeader'
              onClick={orderByDuration}>Duration
            </th>
          </tr>
        </thead>
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
        goToPrevPage={goToPrevPage}
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