const express = require('express')

const server = express()
var PORT = 3000

server.get('/compliment', function (req, res) {
  
  res.send('hello')
});

server.get('/profile', function (req, res) {
  if (req.query.name == "silvia"){
    res.sendFile('/home/student/workspace/express-server/silvia.html')
  } else if(req.query.name == "sampson"){
    res.sendFile('/home/student/workspace/express-server/sampson.html')
  }
  
});





server.listen(PORT)



module.exports = server
