import { useState, useEffect } from 'react'
import stationsService from '../services/stationsService'
import StationRow from './StationRow'
import Pagination from './Pagination'

const StationsList = ({ allStations }) => {

  const [stations, setStations] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  
  const totalStations = allStations.length

  useEffect(() => {
    stationsService.getStations(currentPage).then(stations =>{
      setStations(stations)
    }
    )
  }, [currentPage])

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

  if(stations.length > 5)
  return (
    <div>
      <h1>Stations</h1>
        {stations.map(station => 
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