
const JourneyRow = (props) => {
  const journey = props.journey

  return (
    <li>
      Journey:<br/>
      Departure: {journey['Departure station name']}<br/>
      Return: {journey['Return station name']}<br/>
      {(journey['Covered distance (m)']/1000).toPrecision(2)} km<br/>
      {(journey['Duration (sec'][')']/60).toPrecision(2)}
       min<br/><br/>
    </li>
  )
}

export default JourneyRow