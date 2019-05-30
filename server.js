const express = require('express')

const server = express()

server.get ('/compliment',function(reg,res){
    res.send ('<h3>Great to see you!</h3>')
})



module.exports = server
