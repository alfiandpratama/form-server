const request = require('supertest');
const app = require('../app');

describe('POST /register', function() {
  it('should register user', function(done) {
    request(app)
      .post('/register')
      .send({
        firstName: 'testfirstName',
        lastName: 'testlastName',
        gender: '1',
        email: 'test@test.com',
        mobile: '+62843888899',
        dob: '1900/01/01'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});