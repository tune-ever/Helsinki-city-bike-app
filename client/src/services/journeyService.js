import axios from 'axios'
const baseUrl = '/api/journeys'

const getNext25 = (rowsToSkip) => {
  const request = axios.get(baseUrl, {
    headers: {
      'rowstoskip': rowsToSkip
    }
  })
  return request.then(response => response.data)
}


export default { getNext25 }