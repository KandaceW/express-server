const express = require('express')

const server = express()

module.exports = server

const path = require('path')

server.get('/compliment', function(req, res){
    res.send('Sup')
})

server.get('/profile', function(req, res){
    res.sendFile(path.join(__dirname, 'silvia.html'))
})



