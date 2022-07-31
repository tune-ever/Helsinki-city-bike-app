
const Pagination = (props) => {
  const currentPage = props.currentPage
  const totalPages = props.totalPages
  const pageIndexes = new Array(10).fill(null).map((v, i) => i)

  return (
    <div>
      {(currentPage>0) && 
      <button onClick={props.prevPage}>Previous</button>}
      {pageIndexes.map(i =>
        <button onClick={() => props.updatePage(i)} key={i}>
          {i}
        </button>)}
      <button onClick={props.nextPage}>Next</button>
    </div>
  )
}

export default Pagination