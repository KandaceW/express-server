const express = require('express')

const server = express()

server.get('/compliment', function (req, res) {
  res.send('<p>Hi there</p>')
})

module.exports = server
