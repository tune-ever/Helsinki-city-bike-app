
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