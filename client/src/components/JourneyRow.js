
const JourneyRow = (props) => {
  const journey = props.journey
  const stations = props.stationsArray
  const departureStation = stations[parseInt(journey.dId)]
  const returnStation = stations[parseInt(journey.rId)]

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