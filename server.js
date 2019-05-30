const express = require('express')

const server = express()

server.get ('/compliment', function(req, res){
  res.send('Hi from Tom and Dan')
})

module.exports = server
