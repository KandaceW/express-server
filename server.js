const express = require('express')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

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
  if (req.params.id == 3) {
    res.sendFile(__dirname + "/public/get-name.html")
  }
})


server.post('/named-compliment', function (req, res) {
  console.log(req.body)
  var name = req.body.name

  res.send("<h1>" + name + ", thanks for your support!</h1>")
})

module.exports = server;
