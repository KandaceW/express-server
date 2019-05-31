const express = require('express')

const server = express()

server.use(express.static('public'))

server.use(express.urlencoded({
  extended: true
}))

const path = require('path')

server.get('/compliment', function (req, res) {
  res.send('<h1 style= "color: blue">I like ur shirt :)</h1>')
})

server.get('/profile', function (req, res) {
  var name = req.query.name

  if (name == 'silvia') {
    res.sendFile(path.join(__dirname, "silvia.html"))
  } else if (name == 'sampson') {
    res.sendFile(path.join(__dirname, "sampson.html"))
  } else {
    res.sendFile(path.join(__dirname, "/public/get-name.html"))
  }
})

server.get('/profiles/:id', function (req, res) {
  var id = req.params.id

  if (id == '1') {
    res.sendFile(path.join(__dirname, "silvia.html"))
  } else if (id == '2') {
    res.sendFile(path.join(__dirname, "sampson.html"))
  } else {
    res.sendFile(path.join(__dirname, "/public/get-name.html"))
  }
})

server.post("/named-compliment", function (req, res) {
  var name = req.body.name
  res.send("<h1>You look great today " + name + "!</h1>")
})

module.exports = server