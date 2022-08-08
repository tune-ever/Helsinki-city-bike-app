import { useState, useEffect } from 'react'
import StationRow from './StationRow'
import './styles.css'
import Filter from './Filter'
import stationsService from '../services/stationsService'

const StationsList = () => {

  const [currentStations, setCurrentStations] = useState([])
  const [allStations, setAllStations] = useState([])
  const [filter, setFilter] = useState('')
  const stationsAmount = allStations.length

  useEffect(() => {
    stationsService.getAll().then(stations => {
      setAllStations(stations)
    })
  }, [])

  useEffect(() => {
    setCurrentStations(allStations)
  }, [allStations])

  useEffect(() => {
    setCurrentStations(
      allStations.filter(
        station => station.name.toLowerCase().includes(filter)
      )
    )
  }, [filter])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className='listComponent'>
      <h2>Stations</h2>
      <h4>{stationsAmount} stations</h4>
      <Filter handleChange={handleFilterChange} />
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
    </div>
    )
}

export default StationsList