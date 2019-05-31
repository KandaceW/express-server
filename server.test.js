const request = require('supertest')
const server = require('./server.js')

test('Check URL parameters', function(done) {
  request(server).get('/profiles/2').end(function(err, res) {

    expect(err).toBeFalsy();

    expect(res.text).toBeTruthy();

    expect(res.text).toMatch(/slayer/)

    done()
  })
})
