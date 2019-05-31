const server = require('./server')
const express = require('express')


const port = process.env.PORT || 3000


server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server listening on port:', port)
})