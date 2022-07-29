const fs = require('fs')
const csv = require('csv-parser')

const readFiles = () => {
  const stations = []
  
  return new Promise((resolve, rejesct) => {
  fs.createReadStream('./asemat.csv')
    .pipe(csv({
      mapHeaders: ({ header, index }) => {
        if(index === 1)
          return 'id'
        if(index === 2) 
          return 'name'
        if(index === 5)
          return 'address'
        if(index === 11)
          return 'x'
        if(index === 12)
          return 'y'
        else
          return null
      }
    }))
    .on('data', (data) => stations.push(data))
    .on('end', () => {
      resolve(stations)
    })
  })
}

const getStations = async () => {
  const data = await readFiles()
  
  return data
}

const writeFile = (data) => {
  fs.writeFile('stations.json', data, 'utf8', (err) =>{
    if(err)
      console.log(err)
    else {
      console.log("File written")
      console.log(fs.readFileSync('stations.json', 'utf-8'))
    }
  })
}

module.exports = { getStations }