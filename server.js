const express = require('express')
const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))




const path = require('path')




server.get('/compliment', function (req, res) {
  res.send('you have wonderful fingers')
})

server.post('/named-compliment', function (req, res) {
  var name = req.body.name

  res.redirect(`/profile?name=${name}`)
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

server.post('/named-compliment')



module.exports = server

