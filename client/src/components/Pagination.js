import './styles.css'

const Pagination = ({ currentIndex, totalElements, goToNextPage,
    goToPrevPage, goToIndexPage, pageSize }) => {

  const totalPages = Math.floor(totalElements/pageSize)

  return (
    <div className='pagination'>
      <button onClick={() => goToIndexPage(0)}>{'<<'}</button>
      <button onClick={goToPrevPage}>{'<'}</button>
      <button>{currentIndex+1}</button>
      <button onClick={goToNextPage}>{'>'}</button>
      <button onClick={() => goToIndexPage(totalPages)}>{'>>'}</button>
    </div>
  )
}

export default Pagination