
const JourneyRow = (props) => {
  const journey = props.journey

  return (
    <tr>
      <td>{journey['Departure station name']}</td>
      <td>{journey['Return station name']}</td>
      <td>{(journey['Covered distance (m)']/1000).toPrecision(2)} km</td>
      <td>{(journey['Duration (sec'][')']/60).toPrecision(2)}
       min<br/></td>
    </tr>
  )
}

export default JourneyRow