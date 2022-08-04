import { useState } from 'react'
import SingleStation from './SingleStation'

const StationRow = (props) => {
  const [modal, setModal] = useState(false)

  const station = props.station

  const toggleInfo = () => {
    setModal(!modal)
  }

  return (
    <tr onClick={toggleInfo}>
      <td>{station.name}</td>
      <td>{modal && <SingleStation station={station} />}</td>
    </tr>
  )
}

export default StationRow