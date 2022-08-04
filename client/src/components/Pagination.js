import './styles.css'

const Pagination = (props) => {
  const currentPage = props.currentPage
  const totalElements = props.totalElements
  const pageIndexes = []
  const totalPages = Math.floor(totalElements/15)
  const endOfPagination = (currentPage >= totalPages-5)
  const middleOfPagination = (currentPage > 5)

  if(currentPage < 5)
    for (let i = 0; i < 9; i++)
      pageIndexes.push(parseInt(i))
  else if(endOfPagination)
    for (let i = (currentPage-4-(5-(totalPages-currentPage))); 
    i < totalPages; i++)
      pageIndexes.push(parseInt(i))
  else
    for (let i = (currentPage-4); i < (currentPage+5); i++)
      pageIndexes.push(parseInt(i))

  const active = {
    backgroundColor: 'lightgreen',
  }
  
  return (
    <div className='pagination'>
      <button onClick={props.prevPage}>{'<<'}</button>
      {(middleOfPagination) && <span>
        <button onClick={() => props.updatePage(0)}>
          1
        </button>
        <span>...</span>
      </span>}
      {pageIndexes.map(i => (currentPage === i)
        ? <button  key={i} style={active}>{i+1}</button>
        : <button onClick={() => props.updatePage(i)} key={i}>
            {i+1}
          </button>)}
      {(!endOfPagination) &&
      <span><span>...</span>
        <button onClick={() => props.updatePage(totalPages - 1)}>
        {(totalPages) ? totalPages : ''}</button>
      </span>
      }
      <button onClick={props.nextPage}>{'>>'}</button>
    </div>
  )
}

export default Pagination