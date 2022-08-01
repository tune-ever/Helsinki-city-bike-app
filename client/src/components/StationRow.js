import { useState } from 'react'
import SingleStation from './SingleStation'

const StationRow = (props) => {
  const [modal, setModal] = useState(false)

  const station = props.station

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      {station.name}
      <button onClick={toggleModal}>Info</button>
    </div>
  )
}

export default StationRow