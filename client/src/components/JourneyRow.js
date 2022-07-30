
const JourneyRow = (props) => {
  const journey = props.journey
  const stations = props.stationsArray
  const departureStation = stations[journey.dId]
  const returnStation = stations[journey.rId]

  return (
    <tr>
      <td>{(departureStation) ? departureStation.name : 'loading'}</td>
      <td>{(returnStation) ? returnStation.name : 'loading'}</td>
      <td>{(journey.dis/1000).toPrecision(2)} km</td>
      <td>{(journey.dur/60).toPrecision(2)}
       min<br/></td>
    </tr>
  )
}

export default JourneyRow