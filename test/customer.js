process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('customer', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET customer', () => {
        it('it should GET all the customer', (done) => {
            chai.request(server)
                .get('/customer')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    describe('/POST customer', () => {
        it('it should POST create a customer', (done) => {
            let customer = {
                customerID: 9,
                email: "trieu8@gmail.com",
                password: "123",
                role: "1"
            }
            chai.request(server)
                .post('/customer')
                .send(customer)
                .end((err, res) => {
                    console.log('res.body',res.body)
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('email').eql(customer.email);
                    res.body.should.have.property('password').eql(customer.password);
                    done();
                });
        });
    });
    describe('/DELETE/:customerID customer', () => {
        it('it should DELETE a pet given the id', (done) => {
            // TODO add a model to db then get that customerID to take this test
            let customerID = 9;
            chai.request(server)
                .delete('/customer/' + customerID)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Delete success');
                    res.body.should.have.property('code').eql(0);
                    res.body.should.have.property('customer');
                    done();
                });
        });
    });

});