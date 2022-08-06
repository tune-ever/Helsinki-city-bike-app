import './styles.css'

const Pagination = ({ currentIndex, totalElements, goToNextPage,
    goToPrevPage, goToIndexPage, pageSize }) => {
      
  const pageIndexes = []
  const totalPages = Math.floor(totalElements/pageSize)
  const endOfPagination = (currentIndex >= totalPages-5)
  const middleOfPagination = (currentIndex > 5)

  if(currentIndex < 5)
    for (let i = 0; i < 9; i++)
      pageIndexes.push(parseInt(i))
  else if(endOfPagination)
    for (let i = (currentIndex-4-(5-(totalPages-currentIndex))); 
    i < totalPages; i++)
      pageIndexes.push(parseInt(i))
  else
    for (let i = (currentIndex-4); i < (currentIndex+5); i++)
      pageIndexes.push(parseInt(i))

  const active = {
    backgroundColor: '#2F6696',
    color: 'whitesmoke'
  }
  
  return (
    <div className='pagination'>
      <button onClick={goToPrevPage}>{'<'}</button>
      {(middleOfPagination) && <span>
        <button onClick={() => goToIndexPage(0)}>
          1
        </button>
        <span>...</span>
      </span>}
      {pageIndexes.map(i => (currentIndex === i)
        ? <button  key={i} style={active}>{i+1}</button>
        : <button onClick={() => goToIndexPage(i)} key={i}>
            {i+1}
          </button>)}
      {(!endOfPagination) &&
      <span><span>...</span>
        <button onClick={() => goToIndexPage(totalPages - 1)}>
        {(totalPages) ? totalPages : ''}</button>
      </span>
      }
      <button onClick={goToNextPage}>{'>'}</button>
    </div>
  )
}

export default Pagination