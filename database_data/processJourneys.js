const fs = require('fs')
const csv = require('csv-parser')

const readJourneys = () => {
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
    .on('end', () => {
      resolve(results)
    })
  })
}

const convertJourneystoJSON = async () => {
  const data = await readJourneys()
  console.log(data)

  const converted = []

  data.map(row => {
    newJourney = {
      dId: row.dId,
      rId: row.rId,
      dis: parseInt(row.dis),
      dur: parseInt(row.dur)
    }
    converted.push(newJourney)
  })

  console.log(converted)


  console.log("start writing file")
  writeFile(JSON.stringify(converted))
}

const writeFile = (data) => {
  fs.writeFile('journeys.json', data, (err) =>{
    if(err)
      console.log(err)
    else {
      console.log("File written")
    }
  })
}

convertJourneystoJSON()

module.exports = readJourneys