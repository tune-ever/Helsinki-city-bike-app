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
    if(activeSortType === 'distance'){
      journeyService.getJourneysByDistance(currentIndex).then(journeys =>{
        setJourneys(journeys)
      })
    }
    if(activeSortType === 'duration'){
      journeyService.getJourneysByDuration(currentIndex).then(journeys => {
        setJourneys(journeys)
      })
    }
    if(activeSortType === 'distanceReversed'){
      journeyService.getJourneysByDistanceReversed(currentIndex).then(journeys => {
        setJourneys(journeys)
      })
    }
    if(activeSortType === 'durationReversed'){
      journeyService.getJourneysByDurationReversed(currentIndex).then(journeys => {
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
    // too hard for database with current code
    if(activeSortType && pageIndex > 5000)
      return
    setCurrentIndex(pageIndex)
  }
  
  const orderByDistance = () => {
    setCurrentIndex(0)
    if(activeSortType === 'distance'){
      journeyService.getJourneysByDistanceReversed().then(journeys => {
        setJourneys(journeys)
      })
      setActiveSortType('distanceReversed')
      return
    }
    journeyService.getJourneysByDistance().then(journeys => {
      setJourneys(journeys)
    })
    setActiveSortType('distance')
  }

  const orderByDuration = () => {
    setCurrentIndex(0)
    if(activeSortType === 'duration'){
      journeyService.getJourneysByDurationReversed().then(journeys => {
        setJourneys(journeys)
      })
      setActiveSortType('durationReversed')
      return
    }
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
              onClick={orderByDistance}>
              Distance
              <i className='down'></i>
              <i className='up'></i>
            </th>
            <th className='clickableHeader'
              onClick={orderByDuration}>
              Duration
              <i className='down'></i>
              <i className='up'></i>
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