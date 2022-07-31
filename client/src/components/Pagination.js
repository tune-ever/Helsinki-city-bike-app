
const Pagination = (props) => {
  const currentPage = props.currentPage
  const totalPages = props.totalPages
  const pageIndexes = new Array(9).fill(null).map((v, i) => i)

  return (
    <div>
      <button onClick={props.prevPage}>Previous</button>
      {pageIndexes.map(i =>
        <button onClick={() => props.updatePage(i)} key={i}>
          {i+1}
        </button>)}
      {' ... '}
      <button onClick={props.nextPage}>Next</button>
    </div>
  )
}

export default Pagination