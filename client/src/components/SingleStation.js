import journeyService from "../services/journeyService"
import { useState, useEffect } from 'react'

const SingleStation = ({ station }) => {

  const [avgStart, setAvgStart] = useState(0)
  const [avgEnd, setAvgEnd] = useState(0)
  
  useEffect(() => {
    journeyService.getAverageFromStation(station.id).then(avg => setAvgStart(avg))
  }, [])

  useEffect(() => {
    journeyService.getAverageToStation(station.id).then(avg => setAvgEnd(avg))
  }, [])
  

  return (
    <div>
      <h3>Address: {station.address}</h3>
      <h4>Journeys started here: {station.startNum}</h4>
      <h4>Journeys ended here: {station.endNum} </h4>
      <h4>Average journey length from here:
        {(avgStart > 0)
            ? ' ' + (avgStart/1000).toFixed(1) + ' km'
            : ''}
      </h4>
      <h4>Average journey length to here: 
        {(avgEnd >0)
          ? ' ' + (avgEnd/1000).toFixed(1) + ' km'
          : ''}
      </h4>
    </div>
  )
}

export default SingleStation