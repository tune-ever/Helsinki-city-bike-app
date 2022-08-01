import journeyService from '../services/journeyService'
import { useEffect, useState } from 'react'

const SingleStation = ({ station }) => {
  const [journeysTo, setJourneysTo] = useState(0)
  const [journeysFrom, setJourneysFrom] = useState(0)

  useEffect(() => {
    journeyService.getAmountFromStation(station.id)
      .then(response => setJourneysFrom(response))
  }, [])

  useEffect(() => {
    journeyService.getAmountToStation(station.id)
      .then(response => setJourneysTo(response))
  }, [])
  
  console.log(station)

  return (
    <div>
      <h3>{station.address}</h3>
      <h4>Journeys from here:&nbsp;
        {(journeysFrom > 0) ? journeysFrom : ''}
      </h4>
      <h4>Journeys to here:&nbsp;
        {(journeysTo > 0) ? journeysTo : ''}
      </h4>
    </div>
  )
}

export default SingleStation