
const JourneyRow = (props) => {
  const journey = props.journey

  return (
    <tr>
      <td>{journey.dId}</td>
      <td>{journey.rId}</td>
      <td>{(journey.dis/1000).toPrecision(2)} km</td>
      <td>{(journey.dur/60).toPrecision(2)}
       min<br/></td>
    </tr>
  )
}

export default JourneyRow