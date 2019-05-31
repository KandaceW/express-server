const express = require('express')

const server = express()



server.get('/compliment', (req, res) => {
  res.send('<marquee><h1>HELLO PARTY PEOPLE!!!!!!!!!!!!!!!!!!!</h1></marquee>') 
})

server.get('/profile', (req, res) => {
  const name = req.query.name
  res.sendFile(__dirname +'/silvia.html')
// if (!name) res.redirect('/compliment')
})

module.exports = server