const server = require('../server')
const request = require('supertest')

test('six is afraid of seven', function () {
  expect(6).toBeLessThan(7)
})


test('is stylee', function (done) {
  request(server).get('/').end(function (err, res) {
    console.log(err);
    console.log(res);

    // expect(err).toBeFalsy();

    expect(res.name).toEqual(silvia)
    done();

  })
})