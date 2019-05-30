const express = require('express')

const server = express()

server.get('/compliment', function (req, res) {
  res.send('<h1 style= "color: blue">I like ur shirt :)</h1>')
})

module.exports = server