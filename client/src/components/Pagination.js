import './styles.css'
import PropTypes from 'prop-types'
import React from 'react'

const Pagination = ({
  currentIndex,
  totalElements,
  goToNextPage,
  goToPrevPage,
  goToIndexPage,
  pageSize
}) => {
  const totalPages = Math.floor(totalElements / pageSize)

  return (
    <div className='pagination'>
      <button onClick={() => goToIndexPage(0)}>{'<<'}</button>
      <button onClick={goToPrevPage}>{'<'}</button>
      <button>{currentIndex + 1}</button>
      <button onClick={goToNextPage}>{'>'}</button>
      <button onClick={() => goToIndexPage(totalPages)}>{'>>'}</button>
    </div>
  )
}

Pagination.propTypes = {
  currentIndex: PropTypes.number,
  totalElements: PropTypes.number,
  goToNextPage: PropTypes.func,
  goToPrevPage: PropTypes.func,
  goToIndexPage: PropTypes.func,
  pageSize: PropTypes.number
}

export default Pagination
