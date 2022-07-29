
const StationRow = (props) => {
  const station = props.station

  return (
    <tr>
      <td>{station.name}</td>
      <td>{station.address}</td>
    </tr>
  )
}

export default StationRow