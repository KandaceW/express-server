const express = require('express')

const server = express()
var PORT = 3000

server.use(express.static('/home/student/workspace/express-server/public'))
server.use(express.urlencoded({extended: true}));


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

server.get('/get-name', function (req, res) {
  res.sendFile('/home/student/workspace/express-server/public/get-name.html')
});

server.post('/get-name', (req, res)=> {
  const name = req.body.name;
  const nameQuery = "?name="
  if(name === "silvia" || name === "Silvia"){
    res.redirect('/profile' + nameQuery + name)
  }else if(name == "sampson" || name == "Sampson"){
    res.redirect('/profile' + nameQuery + name)
  }else{
    res.send(name + ", You need to set up a profile!")
  }
  res.end();
})






server.listen(PORT)



module.exports = server
