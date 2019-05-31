const express = require('express')

const server = express()

server.get('/compliment', function (req, res) {
  res.send('Hi from Tom and Dan')
})

server.get('/profile', function (req, res) {
  // res.send('Profile Page')
  var name = ''
  
  if (req.query.name == 'silvia') {
    res.sendFile(__dirname + "/silvia.html")
  }
  if (req.query.name == 'sampson') {
    res.sendFile(__dirname + "/sampson.html")
  }
})

module.exports = server
