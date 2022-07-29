const fs = require('fs')
const csv = require('csv-parser')

const readFiles = () => {
  const results = []
  
  return new Promise((resolve, reject) => {
  fs.createReadStream('./2021-05.csv')
    .pipe(csv(
      ['departure', 'return', 'departureId', 'departureName',
     'returnId','returName', 'distance', 'duration']
    ))
    .on('data', (data) => {
      results.push(data)
    })

  fs.createReadStream('./2021-06.csv')
    .pipe(csv(
      ['departure', 'return', 'departureId', 'departureName',
       'returnId','returName', 'distance', 'duration']
    ))
    .on('data', (data) => {
      results.push(data)
    })
  fs.createReadStream('./2021-07.csv')
    .pipe(csv(
      ['departure', 'return', 'departureId', 'departureName',
       'returnId','returName', 'distance', 'duration']
    ))
    .on('data', (data) => {
      results.push(data)
    })
    .on('end', () => {
      resolve(results)
    })
  })
}

const filteredJourneys = async () => {
  const data = await readFiles()
  const filteredResults = data.filter(journey => {
    if(journey.duration > 10 && journey.distance > 10)
      return true
  })
  let string = ''

  filteredResults.map(journey => string += JSON.stringify(journey))
  return filteredResults
}

const createJson = async () => {
  const data = await filteredJourneys()
  await fs.writeFileSync('2021050607.json', data)
}

module.exports = createJson