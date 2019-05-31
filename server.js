const express = require("express");

const server = express();

server.get("/compliment", (req, res) => {
  res.send("<marquee><h1>HELLO PARTY PEOPLE!!!!!!!!!!!!!!!!!!!</h1></marquee>");
});

server.get("/profile/:name", (req, res) => {
  const name = req.params.name;

  if (name === "Sylvia") {
    res.sendFile(__dirname + "/sylvia.html");
    // res.redirect("/sampson.html");
  } else if (name === "Sampson") {
    res.sendFile(__dirname + "/sampson.html");
  } else {
    res.send("Nope");
  }

  server.get('/profiles/:id', (req, res) => {
    const id = req.params.id

    const users = {
      1: 'sylvia',
      2: 'sampson'
    }
    res.sendFile("YO")
  }),
  // const filePath = path.join(__dirname, "public", name.toLowerCase() + ".html");
  // res.sendFile(filePath);
  // })




module.exports = server
