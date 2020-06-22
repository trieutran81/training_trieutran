var dp = require('../dp')
const ct = require('../models/customer');
var Customer = ct.Customer;
var getAllCustomer = (req, res) => {
    Customer.find().then((results) => {
        res.status(200).json(results)
    }, (e) => {
        res.status(400).send(e);
    });
}
var createCustomer = (req, res) => {
    var customer = Customer({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    // result = User.addUser(user);
    customer.save().then((customer) => {
        res.send(customer);
    }, (e) => {
        res.status(400).send(e);
    });
}
var getCustomerById = (req, res) => {
    var query = { customerID: req.params.customerID };
    Customer.findOne(query).then((results) => {
        res.status(200).json(results)
    }, (e) => {
        res.status(400).send(e)
    })
}
var updateCustomer = (req, res) => {
    var query = { customerID: req.body.customerID };

    Customer.findOneAndUpdate(query, {
        email: req.body.email,
        role: req.body.role
    }, { upsert: true }, (e, raw) => {
        if (e) {
            res.status(400).send('Invalid customer supplied',e);
        }
        res.send(raw);
    });
}
var deleteCustomer = (req, res) => {
    var query = { customerID: req.params.customerID };
    var result = {code:0,message:'Delete success'}
    Customer.deleteOne(query, (e, raw) => {
        if (e) {
            result.code = 400;
            result.message = 'Invalid customer supplied';

            res.status(400).send(result);
        }
        result.customer = raw;
        res.send(result);
    });
}
module.exports = {
    getAllCustomer,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}