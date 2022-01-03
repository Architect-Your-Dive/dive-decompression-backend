const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const noDRouter = require('./noDecompression/noD-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api', noDRouter)

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server
