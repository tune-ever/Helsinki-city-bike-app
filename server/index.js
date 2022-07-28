const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const axios = require('axios')
const baseUrl = 'http://localhost:3003/api/journeys'


server.listen(3003, () => {
  console.log('server running on port 3003')
})

