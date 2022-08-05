import { useState, useEffect } from 'react'
import StationRow from './StationRow'
import Pagination from './Pagination'
import './styles.css'

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

  const goToPrevPage = () => {
    if(currentPage > 0)
      setCurrentPage(currentPage-1)
  }

  const goToNextPage = () => {
    if(currentPage + 1 < (totalStations/15))
      setCurrentPage(currentPage+1)
  }

  const goToIndexPage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if(currentStations.length > 5)
  return (
    <div className='listComponent'>
      <h1>Stations</h1>
      <h4>{totalStations} stations</h4>
      <table>
        <tr><th>Name</th><th>Click a row</th></tr>
        {currentStations.map(station => 
          <StationRow 
            key={station._id} 
            station={station} 
          />
        )}
      </table>
      <Pagination 
        currentPage={currentPage} 
        goToPrevPage={goToPrevPage}
        goToIndexPage={goToIndexPage} 
        goToNextPage={goToNextPage}
        totalElements={totalStations}
      />
    </div>
  )
  else
    return (<></>)
}

export default StationsList