const express = require('express')

const server = express()

const path = require('path')

server.get('/compliment', function (req, res) {
  res.send('<h1 style= "color: blue">I like ur shirt :)</h1>')
})

server.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, "silvia.html"))
})

module.exports = server