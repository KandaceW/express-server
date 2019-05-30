const express = require('express')

const server = express()
var PORT = 3000

server.get('/compliment', function(req,res){
  console.log(res, req)
  res.send('hello')
})

server.listen(3000)


module.exports = server
