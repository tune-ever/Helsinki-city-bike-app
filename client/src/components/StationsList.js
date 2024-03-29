import React, { useState, useEffect } from 'react'
import StationRow from './StationRow'
import './styles.css'
import Filter from './Filter'
import Pagination from './Pagination'

const StationsList = ({ allStations }) => {
  const PAGE_SIZE = 15
  const [currentStations, setCurrentStations] = useState([])
  const [filter, setFilter] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const stationsAmount = allStations.length
  const totalPages = Math.floor(stationsAmount / PAGE_SIZE)

  useEffect(() => {
    setCurrentStations(
      allStations.slice(currentIndex * PAGE_SIZE, currentIndex *
        PAGE_SIZE + PAGE_SIZE)
    )
  }, [allStations])

  useEffect(() => {
    setCurrentStations(
      allStations.slice(currentIndex * PAGE_SIZE, currentIndex *
        PAGE_SIZE + PAGE_SIZE)
    )
  }, [currentIndex])

  useEffect(() => {
    setCurrentIndex(0)
    setCurrentStations(
      allStations
        .filter(
          station => station.name.toLowerCase().includes(filter.toLowerCase()))
        .slice(currentIndex * PAGE_SIZE, currentIndex * PAGE_SIZE +
          PAGE_SIZE)
    )
  }, [filter])

  useEffect(() => {
    setCurrentStations(
      allStations.slice(0, 15)
    )
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const goToIndexPage = (pageIndex) => {
    setCurrentIndex(pageIndex)
  }

  const goToPrevPage = () => {
    setFilter('')
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToNextPage = () => {
    setFilter('')
    if (currentIndex < totalPages) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className='listComponent'>
      <h2>Stations</h2>
      <h4>{stationsAmount} stations</h4>
      <h4>Data from 05-07/2021</h4>
      <h5>Click a row to view more info</h5>
      <Filter
        handleChange={handleFilterChange}
        filter={filter}
      />
      <table>
        <thead>
          <tr><th>Name</th><th></th></tr>
        </thead>
        <tbody className='expandableTable'>
          {currentStations.map(station =>
            <StationRow
              key={station._id}
              station={station}
            />
          )}
        </tbody>
      </table>
      <Pagination
        currentIndex = {currentIndex}
        totalElements = {stationsAmount}
        goToNextPage = {goToNextPage}
        goToPrevPage = {goToPrevPage}
        goToIndexPage = {goToIndexPage}
        pageSize = {PAGE_SIZE}
      />
    </div>)
}

export default StationsList
