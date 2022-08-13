# Helsinki city bike app 

This is a full-stack application to display data from Helsinki city bikes.

## Deployed

<a href="https://hslbikeapp.herokuapp.com/">https://hslbikeapp.herokuapp.com/</a>

## Description

The purpose is to display journeys and stations data from Helsinki city bikes. The data is owned by City Bike Finland.

## Features

<ul>
<li>Data is stored in a real database</li>
<li>Journeys and stations data is displayed in a table format with pagination</li>
<li>User can sort journeys by distance or duration</li>
<li>User can view more data on a single station by clicking to expand in stations list</li>
<li>User can search stations by name</li>
</ul>

## Technology

<ul>
<li>MongoDb</li>
<li>Express</li>
<li>React</li>
<li>NodeJs</li>
</ul>

## Run the app with already existing database

### Prerequisites

-Node: <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>

App is tested and working on Windows environment, node v16.15.1

### Configurations

-Please copy the .env file (from email) into Helsinki-city-bike-app/server

### Running

1. 
```
cd server
npm install
npm start
```
2. Go to localhost:3003


## Set up your own database and run the app

### Prerequisites

<ul>
<li>Node: <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></li>
<li>Mongoimport: <a href="https://www.mongodb.com/docs/database-tools/installation/installation/">https://www.mongodb.com/docs/database-tools/installation/installation/</a> (You also need to add mongoimport to path(environment variables))</li>
</ul>

App is tested and working on Windows environment, node v16.15.1

### Configurations

1. Create a MongoDb atlas database: <a href="https://www.mongodb.com/docs/atlas/getting-started/">https://www.mongodb.com/docs/atlas/getting-started/</a>

2. Download helsinki city bikes 2021-05.csv and stations dataset from 
<a href="https://github.com/solita/dev-academy-2022-fall-exercise">https://github.com/solita/dev-academy-2022-fall-exercise</a> Copy into helsinki-city-bike-app/database_data

3. Process csvs into json
```
cd database_data
npm install
node processJourneys.js // generate a journeys.json
node processStations.js // generate a stations.json
```
4. Import files to database:
```
mongoimport --db=bikeapp --collection=stations --file=stations.json --uri="<mongodb-uri>" --jsonArray

mongoimport --db=bikeapp --collection=journeys --file=journeys.json --uri="<mongodb-uri>" --jsonArray
```

5. Create a .env file into helsinki-city-bike-app/server.
Write into .env:
MONGODB_URI = <'mongodb-connection-uri><br/>
PORT = 3003

6. 
```
cd server
npm install
npm start
```
7. Go to localhost:3003

## TODO

<ul>
<li>Tests</li>
<li>Search journeys</li>
<li>Filter journeys data</li>
<li>Show stations on a map</li>
<li>Adding journeys or stations</li>
</ul>