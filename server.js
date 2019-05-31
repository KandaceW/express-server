const express = require("express");

const server = express();

server.use(express.static("public"));

server.get("/compliment", function(req, res) {
  res.send("I like your feet.");
});

server.get("/profile", function(req, res) {
  var name = ""
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

module.exports = server;
