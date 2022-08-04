
const SingleStation = ({ station }) => {

  return (
    <div>
      <h3>Address: {station.address}</h3>
      <h4>Journeys started here: {station.startNum}</h4>
      <h4>Journeys ended here: {station.endNum} </h4>
    </div>
  )
}

export default SingleStation