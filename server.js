const express = require('express')

const server = express()
var PORT = 3000

server.get('/compliment', function (req, res) {
  res.send('hello')
})

server.get('/filetest', function (req, res) {

  res.sendFile('/home/student/workspace/express-server/silvia.html')
})

server.listen(PORT)



module.exports = server
