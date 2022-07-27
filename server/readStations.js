const fs = require('fs')
const csv = require('csv-parser')

const readFiles = () => {
  const results = []
  
  return new Promise((resolve, rejesct) => {
  fs.createReadStream('../asemat.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      resolve(results)
    })
  })
}

const getStations = async () => {
  const data = await readFiles()
  return data
}


module.exports = getStations