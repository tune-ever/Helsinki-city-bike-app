import { useState } from 'react'

const SearchInput = () => {

  const [searchData, setSearchData] = useState('')

  const doSearch = (event) => {
    event.preventDefault()
    console.log('test')
  }

  return (
    <form onSubmit={doSearch}>
      <input
        type='text'
        value={searchData}
        name={searchData}
        onChange={({ target }) => setSearchData(target.value)}
        placeholder='search'
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchInput