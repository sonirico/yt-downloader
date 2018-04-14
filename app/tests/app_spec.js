const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('yt-dowloader', function () {
    describe('index path', function () {
        it('should responds with code 200', function (done) {
            chai.request(app).get('/').end(function (err, res) {
                expect(res).to.have.status(200)
            })
        });
    })
});
