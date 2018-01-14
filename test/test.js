var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello Bill', function(done) {
    request(app).get('/').expect('hello Bill', done);
  });
});