require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.MONGODB_URI

const USETESTDB = 0

module.exports = {
  MONGODB_URI,
  PORT
}