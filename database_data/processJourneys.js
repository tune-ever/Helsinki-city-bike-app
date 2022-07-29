const fs = require('fs')
const csv = require('csv-parser')
const { getStations } = require('./processStations')

const readFiles = () => {
  const results = []
  
  return new Promise((resolve, reject) => {
  fs.createReadStream('./2021-05.csv')
    .pipe(csv({
      mapHeaders: ({ header, index }) => {
        if(index === 2)
          return 'dId'
        if(index === 4) 
          return 'rId'
        if(index === 6)
          return 'dis'
        if(index === 7)
          return 'dur'
        else
          return null
      }
    }))
    .on('data', (data) => {
      if(data.dur >= 10 && data.dis >= 10)
        results.push(data)
    })

  fs.createReadStream('./2021-06.csv')
    .pipe(csv({
      mapHeaders: ({ header, index }) => {
        if(index === 2)
          return 'dId'
        if(index === 4) 
          return 'rId'
        if(index === 6)
          return 'dis'
        if(index === 7)
          return 'dur'
        else
          return null
      }
    }))
    .on('data', (data) => {
      if(data.dur >= 10 && data.dis >= 10)
        results.push(data)
    })
  fs.createReadStream('./2021-07.csv')
    .pipe(csv({
      mapHeaders: ({ header, index }) => {
        if(index === 2)
          return 'dId'
        if(index === 4) 
          return 'rId'
        if(index === 6)
          return 'dis'
        if(index === 7)
          return 'dur'
        else
          return null
      }
    }))
    .on('data', (data) => {
      if(data.dur >= 10 && data.dis >= 10)
        results.push(data)
    })
    .on('end', () => {
      resolve(results)
    })
  })
}

const filteredJourneys = async () => {
  const data = await readFiles()
  const stations = await getStations()
  
  stations.sort((a, b) => a.id - b.id)
  stations.map(station => {
    station.id = parseInt(station.id, 10)
    station.journeys = []
  })

  data.map(journey => {
    stations.map(station => {
      if(parseInt(journey.dId, 10) === station.id){
        station.journeys.push(journey)
        console.log("working")
      }
    })
  })

  console.log("trying to convert to JSON")
  writeFile(JSON.stringify(stations))
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


filteredJourneys()