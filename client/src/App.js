import JourneyList from './components/JourneyList'
import StationsList from './components/StationsList'
import { useState, useEffect } from 'react'
import stationsService from './services/stationsService'
import { BrowserRouter as Router,
   Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [allStations, setAllStations] = useState([])

  useEffect(() => {
    stationsService.getAll().then(stations => {
      setAllStations(stations)
    })
  }, [])

  return (
    <Router>
      <div>
        <NavLink className={({ isActive }) => 
        (isActive ? 'active' : 'inactive')}to='/'>
          Home</NavLink>
        <NavLink className={({ isActive }) => 
        (isActive ? 'active' : 'inactive')} to='/journeys'>
          Journeys</NavLink>
        <NavLink className={({ isActive }) => 
        (isActive ? 'active' : 'inactive')} to='/stations'>
          Stations</NavLink>
      </div>
      <Routes>
        <Route path='/journeys'
          element={<JourneyList allStations={allStations}/>}/>
        <Route path='/stations'
          element={<StationsList/>}/>
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
