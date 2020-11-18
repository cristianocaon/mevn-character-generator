require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/characters')

const server = express()

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to MongoDB!'))

server.use(express.json())
server.use(cors())

server.use('/characters', router)

server.listen(3000, () => console.log('Server running at http://localhost:3000'))

