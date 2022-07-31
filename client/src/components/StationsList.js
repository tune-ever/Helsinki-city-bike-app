import { useState, useEffect } from 'react'
import stationsService from '../services/stationsService'
import StationRow from './StationRow'
import Pagination from './Pagination'

const StationsList = () => {

  const [stations, setStations] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

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
    setCurrentPage(currentPage+1)
  }

  const updatePage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if(stations.length > 5)
  return (
    <div>
      <h1>Stations</h1>
      <table>
        <thead><tr><th>Name</th><th>Address</th></tr></thead>
        <tbody>
          {stations.map(station => 
            <StationRow key={station._id} station={station} />)}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} prevPage={prevPage}
        updatePage={updatePage} nextPage={nextPage}/>
    </div>
  )
  else
    return (<></>)
}

export default StationsList