import JourneyList from './components/JourneyList'
import StationsList from './components/StationsList'
import { useState, useEffect } from 'react'
import stationsService from './services/stationsService'
import { BrowserRouter as Router,
   Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [allStations, setAllStations] = useState([])

  const padding = {
    padding: 5
  }

  useEffect(() => {
    stationsService.getAll().then(stations => {
      setAllStations(stations)
    })
  }, [])

  return (
    <Router>
      <div>
        <Link style={padding} to='/'>Home</Link>
        <Link style={padding} to='/journeys'>Journeys</Link>
        <Link style={padding} to='/stations'>Stations</Link>
      </div>
      <Routes>
        <Route path='/journeys'
          element={<JourneyList allStations={allStations}/>}/>
        <Route path='/stations'
          element={<StationsList allStations={allStations}/>}/>
        <Route path='/' element={<Home />} />
      </Routes>

      <div>
        <i>Helsinki City Bike App, Pre-assignment for 
          solita Dev academy. By: Tune-ever
        </i>
      </div>
    </Router>
  );
}

export default App;
