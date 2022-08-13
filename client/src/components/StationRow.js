import React, { useState } from 'react'
import SingleStation from './SingleStation'

const StationRow = ({ station }) => {
  const [modal, setModal] = useState(false)

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
