const express = require("express");

const server = express();

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

server.get("/compliment", function(req, res) {
  // res.send("I like your feet.");
  res.sendFile(__dirname + "/public/get-name.html");
});

server.post("/named-compliment", function(req, res) {
  //console.log(req.body);
  res.send("<h2>"+req.body.name+" you have great fingernails</h2>");
});

server.get("/profile", function(req, res) {
  var name = "";
  if (req.query.name == "silvia") {
    console.log("name", name);
    res.sendFile(__dirname + "/silvia.html");
  }
  if (req.query.name == "sampson") {
    res.sendFile(__dirname + "/sampson.html");
  }
});

server.get("/profiles/:id", function(req, res) {
  if (req.params.id == 1) {
    res.sendFile(__dirname + "/silvia.html");
  }
  if (req.params.id == 2) {
    res.sendFile(__dirname + "/sampson.html");
  }
});

server.get("/named-compliment", function(req, res) {
  res.sendFile(__dirname + "I like your feet.");
});

module.exports = server;
