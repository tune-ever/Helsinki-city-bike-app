import axios from 'axios'
const baseUrl = '/api/journeys'

const getJourneys = (page) => {
  const request = axios.get(`${baseUrl}?page=${page}`)
  return request.then(response => response.data)
}

const getTotal = () => {
  const request = axios.get(`${baseUrl}?total=1`)
  return request.then(response => response.data)
}

const getJourneysByDistance = () => {
  const request = axios.get(`${baseUrl}?sort=dis`)
  return request.then(response => response.data)
}

export default { getJourneys, getTotal, getJourneysByDistance }