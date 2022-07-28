import axios from 'axios'
const baseUrl = '/api/journeys'

const getNext25 = (lastIndex) => {
  const request = axios.get(baseUrl, {
    headers: {
      'lastIndex': lastIndex
    }
  })
  return request.then(response => response.data)
}


export default { getNext25 }