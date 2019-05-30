const express = require('express')

const server = express()

const path = require('path')

server.get('/compliment', function (req, res) {
  res.send('you have wonderful feet')
})

server.get('/profile', function (req, res) {
  var name = req.query.name
  console.log(name)
  if (name == 'silvia') {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  }
  else if (name == 'sampson') {
    res.sendFile(path.join(__dirname, 'sampson.html'))
  }
})

// server.get('/profile', function (req, res) {
//     res.sendFile(path.join(__dirname, 'silvia.html')) 
//   })


module.exports = server

