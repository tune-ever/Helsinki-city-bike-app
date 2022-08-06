import { useState, useEffect } from 'react'
import StationRow from './StationRow'
import Pagination from './Pagination'
import './styles.css'
import SearchForm from './SearchForm'
import stationsService from '../services/stationsService'

const StationsList = () => {

  const [currentStations, setCurrentStations] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [pageSize, setPageSize] = useState(15)
  const startIndex = currentIndex * pageSize
  const endIndex = startIndex + pageSize
  const [allStations, setAllStations] = useState([])
  const [searchStations, setSearchStations] = useState([])
  const totalStations = allStations.length

  useEffect(() => {
    stationsService.getAll().then(stations => {
      setAllStations(stations)
    })
  }, [])

  useEffect(() => {
    setCurrentStations(allStations.slice(startIndex, endIndex))
  }, [currentIndex])

  useEffect(() => {
    setCurrentStations(allStations.slice(startIndex, endIndex))
  }, [allStations])


  const goToPrevPage = () => {
    if(currentIndex > 0)
      setCurrentIndex(currentIndex-1)
  }

  const goToNextPage = () => {
    if(currentIndex + 1 < (totalStations/15))
      setCurrentIndex(currentIndex+1)
  }

  const goToIndexPage = (pageIndex) => {
    setCurrentIndex(pageIndex)
  }

  const handleSearch = (value) => {
    setSearchStations(
      allStations.filter(station => 
        station.name.toLowerCase().includes(value))
    )
  }

  if(!currentStations.length > 5)
    return (<></>)
  else
    return (
      <div className='listComponent'>
        <h2>Stations</h2>
        <h4>{totalStations} stations</h4>
        <SearchForm handleSearch={handleSearch} />
        <table>
          <thead>
            <tr><th>Name</th><th>Click a row</th></tr>
          </thead>
          <tbody>
            {currentStations.map(station => 
              <StationRow 
                key={station._id} 
                station={station} 
              />
            )}
          </tbody>
        </table>
        <Pagination 
          currentIndex={currentIndex} 
          goToPrevPage={goToPrevPage}
          goToIndexPage={goToIndexPage} 
          goToNextPage={goToNextPage}
          totalElements={totalStations}
          pageSize = {pageSize}
        />
      </div>
    )
}

export default StationsList