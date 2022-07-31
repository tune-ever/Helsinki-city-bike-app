import JourneyList from './components/JourneyList'
import StationsList from './components/StationsList'
import CurrentStation from './components/CurrentStation'
import { useState, useEffect } from 'react'
import stationsService from './services/stationsService'

function App() {
  const [allStations, setAllStations] = useState([])

  useEffect(() => {
    stationsService.getAll().then(stations => {
      setAllStations(stations)
    })
  }, [])

  return (
    <div className="main">
      <JourneyList allStations={allStations} />
      <StationsList allStations={allStations} />
    </div>
  );
}

export default App;
