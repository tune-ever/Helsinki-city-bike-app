import './styles.css'


const JourneyRow = ({ journey, stationsArray }) => {
  const departureStation = stationsArray[parseInt(journey.dId)]
  const returnStation = stationsArray[parseInt(journey.rId)]

  return (
    <tr>
      <td>{departureStation.name}</td>
      <td>{returnStation.name}</td>
      <td>{(journey.dis/1000).toPrecision(2)} km</td>
      <td>{(journey.dur/60).toPrecision(2)}
       min<br/></td>
    </tr>
  )
}

export default JourneyRow