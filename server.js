const express = require('express')

const server = express()

server.get('/compliment', function (req, res) {
  res.send('Hi from Tom and Dan')
})

server.get('/profile', function (req, res) {
  res.send('this is a profile address')
})

module.exports = server
