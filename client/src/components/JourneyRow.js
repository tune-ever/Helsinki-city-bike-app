import './styles.css'


const JourneyRow = ({ journey, stationsArray }) => {
  const departureStation = stationsArray[parseInt(journey.dId)]
  const returnStation = stationsArray[parseInt(journey.rId)]

  return (
    <tr>
      <td>{(departureStation)
        ? departureStation.name
        : 'unkown'} 
      </td>
      <td>{(returnStation)
        ? returnStation.name
        : 'unknown'}
      </td>
      <td>{(journey.dis/1000).toFixed(1)} km</td>
      <td>{(journey.dur/60).toFixed(0)}
       min<br/></td>
    </tr>
  )
}

export default JourneyRow