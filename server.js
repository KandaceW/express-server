
// links to express server
const express = require('express')
// calling(function) the server var to link to server
const server = express()

// server.get finds path and runs function and sends file to server
server.get ('/compliment',function(req,res){
    res.send ('<h3>Great to see you!</h3>')
})

server.get ('/profile/:name',function(req,res){
    var name = req.params.name

    if(name == 'profile'){
        res.sendFile(__dirname+"/silvia.html")
    
    } else if(name == 'about') {
        res.sendFile(__dirname+"/sampson.html")
    }
})

// server.get ('/about',function(reg,res){
//     res.sendFile(__dirname+"/sampson.html")





module.exports = server
