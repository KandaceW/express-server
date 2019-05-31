const express = require('express')

const server = express()
var PORT = 3000

server.use(express.static('/home/student/workspace/express-server/public'))


server.get('/profile', function (req, res) {
  if (req.query.name == "silvia"){
    res.sendFile('/home/student/workspace/express-server/silvia.html')
  } else if(req.query.name == "sampson"){
    res.sendFile('/home/student/workspace/express-server/sampson.html')
  }
  
});

server.get('/profiles', function (req, res) {
  if (req.query.id == 1){
    res.sendFile('/home/student/workspace/express-server/silvia.html')
  } else if(req.query.id == 2){
    res.sendFile('/home/student/workspace/express-server/sampson.html')
  }
  
});






server.listen(PORT)



module.exports = server
