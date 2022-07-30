import { useState, useEffect } from 'react'
import stationsService from '../services/stationsService'
import StationRow from './StationRow'

const StationsList = () => {

  const [stations, setStations] = useState([])
  const [lastIndex, setLastIndex] = useState(25)

  useEffect(() => {
    stationsService.getNext25(25).then(stations =>
      setStations(stations)
    )
  }, [])


  const nextPage = () => {
    stationsService.getNext25(lastIndex).then(
      stations => setStations(stations)
    )
    setLastIndex(lastIndex + 25)
  }
  
  const prevPage = () => {
    setLastIndex(lastIndex -25)
    stationsService.getNext25(lastIndex).then(
      stations => setStations(stations)
    )
  }

  return (
    <div>
      <table>
        <thead><tr><th>Name</th><th>Address</th></tr></thead>
        <tbody>
          {stations.map(station => 
            <StationRow key={station._id} station={station} />)}
        </tbody>
      </table>
      <button onClick={nextPage}>Next</button>
      {lastIndex > 25 && 
        <button onClick={prevPage}>Prev</button>
      }
    </div>
  )
}

export default StationsList