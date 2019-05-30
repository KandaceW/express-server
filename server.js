const express = require('express')

const server = express()

server.get('/compliment', function (req, res) {
  res.send('you have wonderful feet') 
})

  module.exports = server

