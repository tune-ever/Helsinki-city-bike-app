import React from 'react'
import PropTypes from 'prop-types'

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
  filter: PropTypes.string,
  handleChange: PropTypes.func
}
