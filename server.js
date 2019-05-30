const express = require("express");

const server = express();

server.get("/compliment", function(req, res) {
  res.send("I like your feet.");
});

server.get("/profile", function(req, res) {
  res.sendFile(__dirname + "/silvia.html");
});

module.exports = server;
