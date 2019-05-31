const server = require('./server')
const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

server.use(express.static('public'))

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server listening on port:', port)
})

server.get('/compliment', function (req, res) {
  res.send('<h1>Hello lovely friend!</h1>')
})

server.get('/profile', function (req, res) {
  var name = req.query.name
  if (name == 'silvia') { res.sendFile(path.join(__dirname + '/silvia.html')) }
  else if (name == 'samson') { res.sendFile(path.join(__dirname + '/samson.html')) }
  else { res.sendFile(__dirname + '/silvia.html') }
})

server.get('/hello.png', function (req, res) {
  res.sendFile(__dirname + '/hello.png')
})