import { useState, useEffect } from 'react'
import stationsService from '../services/stationsService'
import StationRow from './StationRow'
import Pagination from './Pagination'
import journeyService from '../services/journeyService'

const StationsList = ({ allStations }) => {

  const [currentStations, setCurrentStations] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const totalStations = allStations.length
  const PAGE_SIZE = 15
  const startIndex = currentPage * PAGE_SIZE
  const endIndex = startIndex + 15


  useEffect(() => {
    setCurrentStations(allStations.slice(startIndex, endIndex))
  }, [currentPage])

  useEffect(() => {
    setCurrentStations(allStations.slice(startIndex, endIndex))
  }, [allStations])

  const prevPage = () => {
    if(currentPage > 0)
      setCurrentPage(currentPage-1)
  }

  const nextPage = () => {
    if(currentPage + 1 < (totalStations/15))
      setCurrentPage(currentPage+1)
  }

  const updatePage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if(currentStations.length > 5)
  return (
    <div>
      <h1>Stations</h1>
        {currentStations.map(station => 
          <StationRow key={station._id} station={station} />)}
      <Pagination currentPage={currentPage} prevPage={prevPage}
        updatePage={updatePage} nextPage={nextPage}
        totalElements={totalStations}/>
    </div>
  )
  else
    return (<></>)
}

export default StationsList