const express = require('express')

const server = express()

server.get('/compliment', function (req, res) {
  res.send('Hi from Tom and Dan')
})

server.get('/profile', function (req, res) {
  var name = ''

  if (req.query.name == 'silvia') {
    res.sendFile(__dirname + "/silvia.html")
  }
  if (req.query.name == 'sampson') {
    res.sendFile(__dirname + "/sampson.html")
  }
})

server.get('/profiles/:id', function (req, res) {
  var id = req.params.id

  if (req.params.id == 1) {
    res.sendFile(__dirname + "/silvia.html")
  }
  if (req.params.id == 2) {
    res.sendFile(__dirname + "/sampson.html")
  }
})

server.use(express.static('public'))

module.exports = server
