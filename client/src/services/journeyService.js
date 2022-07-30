import axios from 'axios'
const baseUrl = '/api/journeys'

const getJourneys = (page) => {
  const request = 
    axios.get(`${baseUrl}?page=${page}`)
  return request.then(response => response.data)
}


export default { getJourneys }