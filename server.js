const express = require('express')

const server = express()

server.use(express.static('public'))

const path = require('path')


server.get('/compliment', function (req, res) {
  res.send('you have wonderful feet')
})


server.get('/profile', function (req, res) {
  var name = req.query.name

  if (name == 'silvia') {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  }
  else if (name == 'sampson') {
    res.sendFile(path.join(__dirname, 'sampson.html'))
  } else {
    res.send('you have wonderful feet')
  }
})

server.get('/profiles/:id', function (req, res) {
  const id = req.params.id

  if (id == 1) {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  }
  else if (id == 2) {
    res.sendFile(path.join(__dirname, 'sampson.html'))
  } else {
    res.send('you have wonderful feet')
  }
})

module.exports = server

