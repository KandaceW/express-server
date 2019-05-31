const express = require('express')
const path = require('path')
const server = express()

server.use(express.static('public'))

module.exports = server

server.get('/compliment', function (req, res) {
  res.send('<h1>Hello lovely friend!</h1>')
})

server.get('/profile', function (req, res) {
  var name = req.query.name
  if (name == 'silvia') { res.sendFile(path.join(__dirname + '/silvia.html')) }
  else if (name == 'samson') { res.sendFile(path.join(__dirname + '/samson.html')) }
  else { res.sendFile(__dirname + '/silvia.html') }
})

server.get('/profiles/:number', function (req, res) {
  if (req.params.number == 1) { res.sendFile(path.join(__dirname + '/silvia.html')) }
  else if (req.params.number == 2) { res.sendFile(path.join(__dirname + '/samson.html')) }
  else { res.sendFile(__dirname + '/silvia.html') }
})