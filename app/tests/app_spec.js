const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server/app');

chai.use(chaiHttp);

describe('yt-downloader', function () {
    describe('index path', function () {
        it("smoke test", function () {
            expect(true).to.be.equal(true);
        });
        it('should responds with code 200', function (done) {
            chai.request(app).get('/').end(function (err, res) {
                let status_response = res.statusCode;
                done();
                expect(status_response).to.be.equal(200);
            })
        });
    })
});