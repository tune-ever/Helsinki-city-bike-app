import React from 'react'

const Filter = ({ filter, handleChange }) => {
  return (
    <input
      type='text'
      value={filter}
      onChange={handleChange}
      placeholder='filter'
    />
  )
}

export default Filter

Filter.propTypes = {
  filter: React.propTypes.string,
  handleChange: React.proptypes.func
}
