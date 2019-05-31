const express = require('express')

const server = express()

server.get('/compliment', function (req, res) {
  res.send('<p>Hi there</p>')
})

server.get('/profile', function (req, res) {
  var name = ''
  
  if (req.query.name == ('silvia') {
  res.sendFile(__dirname + '/silvia.html')
  }
})



module.exports = server
