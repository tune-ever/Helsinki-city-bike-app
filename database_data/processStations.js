const fs = require('fs')
const csv = require('csv-parser')
const readJourneys = require('./processJourneys')

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

const addJourneysDataToStations = async () => {
  const stations = await readFiles()
  const journeys = await readJourneys()

  stationsTable = new Array(1000)
  stations.map(station => {
    station.startNum = 0
    station.endNum = 0
    stationsTable[parseInt(station.id)] = station
  })
  
  journeys.map(journey => {
    const returnId = parseInt(journey.rId)
    const departureId = parseInt(journey.dId)
    if(stationsTable[returnId])
      stationsTable[returnId].startNum ++
    if(stationsTable[departureId])
      stationsTable[departureId].endNum ++
    console.log('adding...')
  })
  
  return stationsTable
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

const createStationsJSON = async () => {
  const stationsTable = await addJourneysDataToStations()

  writeFile(JSON.stringify(stationsTable))

}

createStationsJSON()