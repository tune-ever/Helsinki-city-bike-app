import { useState } from 'react'
import SingleStation from './SingleStation'

const StationRow = (props) => {
  const [modal, setModal] = useState(false)

  const station = props.station

  const toggleInfo = () => {
    setModal(!modal)
  }

  return (
    <div>
      {station.name}
      <button onClick={toggleInfo}>Info</button>
      {modal && <SingleStation station={station} />}
    </div>
  )
}

export default StationRow