import axios from 'axios'
const baseUrl = '/api/journeys'

const get10 = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { get10 }