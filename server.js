const express = require("express");

const server = express();

server.get("/compliment", function(req, res) {
  res.send("I like your feet.");
});

module.exports = server;
