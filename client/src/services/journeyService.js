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

const getJourneysByDistance = (page) => {
  const request = axios.get(`${baseUrl}?sort=dis&page=${page}`)
  return request.then(response => response.data)
}

const getJourneysByDuration = (page) => {
  const request = axios.get(`${baseUrl}?sort=dur&page=${page}`)
  return request.then(response => response.data)
}

const getJourneysByDistanceReversed = (page) => {
  const request = axios.get(`${baseUrl}?sort=disrev&page=${page}`)
  return request.then(response => response.data)
}

const getJourneysByDurationReversed = (page) => {
  const request = axios.get(`${baseUrl}?sort=durrev&page=${page}`)
  return request.then(response => response.data)
}



export default { 
  getJourneys, 
  getTotal, 
  getJourneysByDistance, 
  getJourneysByDuration, 
  getJourneysByDistanceReversed, 
  getJourneysByDurationReversed 
}