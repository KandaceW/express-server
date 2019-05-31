const express = require('express')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))

module.exports = server

const path = require('path')

server.get('/compliment', function(req, res){
    res.send('Sup')
})

server.get('/profile', function(req, res){
    var name = req.query.name
    if (name == 'sampson'){
        res.sendFile(path.join(__dirname, 'sampson.html'))
    } else if(name == 'silvia'){
        res.sendFile(path.join(__dirname, 'silvia.html'))
    }
})

server.get('/profiles/:id', function(req, res){
     var id = req.params.id
     if(id == 1) {
        res.sendFile(path.join(__dirname, 'silvia.html'))
     } else if(id == 2){
        res.sendFile(path.join(__dirname, 'sampson.html'))
     }
}) 

server.get("/get-name", function(req, res){
    res.sendFile(path.join(__dirname, 'get-name.html'))
   
})

server.post ("/named-compliment", function(req, res){
    console.log(req.body)
})



