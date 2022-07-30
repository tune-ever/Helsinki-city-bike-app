import axios from 'axios'
const baseUrl = '/api/stations'

const getStations = (page) => {
  const request = axios.get(`${baseUrl}?page=${page}`)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(`${baseUrl}?page=all`)
  return request.then(response => response.data)
}

export default { getStations, getAll }