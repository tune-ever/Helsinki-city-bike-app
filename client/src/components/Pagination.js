
const Pagination = (props) => {
  const currentPage = props.currentPage
  const totalElements = props.totalElements
  const pageIndexes = new Array(9).fill(null).map((v, i) => i)

  const active = {
    backgroundColor: 'cyan',
  }
  const totalPages = Math.floor(totalElements/15)

  return (
    <div>
      <button onClick={props.prevPage}>Previous</button>
      {pageIndexes.map(i => (currentPage === i)
        ? <button  key={i} style={active}>{i+1}</button>
        : <button onClick={() => props.updatePage(i)} key={i}>
            {i+1}
          </button>)}
      {' ... '}
      <button onClick={() => props.updatePage(totalPages - 1)}>
        {(totalPages) ? totalPages : ''}</button>
      <button onClick={props.nextPage}>Next</button>
    </div>
  )
}

export default Pagination