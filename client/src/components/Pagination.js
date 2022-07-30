
const Pagination = (props) => {
  const currentPage = props.currentPage
  const totalPages = props.totalPages
  return (
    <div>
      {(currentPage>0) && 
      <button onClick={props.prevPage}>Previous</button>
      }
      <button onClick={props.nextPage}>Next</button>
    </div>
  )
}

export default Pagination