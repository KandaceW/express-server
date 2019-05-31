const express = require('express')
server.use(express.static('public'))
server.get(express.urlencoded)

const server = express()

server.get('/compliment', function (req, res) {
  res.send('<p>Hi there</p>')
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
  var id = ''

  if (req.params.id == '1') {
    res.sendFile(__dirname + "/silvia.html")
  }
  if (req.params.id == '2') {
    res.sendFile(__dirname + "/sampson.html")
  }
})

server.post('/named-compliment', function (req, res) {
  var name = req.body.name
  res.send('name')
})


module.exports = server

