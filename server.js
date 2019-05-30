const express = require('express')

const server = express()

module.exports = server

server.get('/compliment', (req, res) => {
res.send('<marquee><h1>HELLO PARTY PEOPLE!!!!!!!!!!!!!!!!!!</h1></marquee>') 

})