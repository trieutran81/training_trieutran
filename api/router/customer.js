const express = require('express');
const customerRouter = express.Router();
var Customer = require('../controllers/customerController');
customerRouter.get('/', Customer.getAllCustomer);
customerRouter.post('/', Customer.createCustomer);
customerRouter.get('/:customerID', Customer.getCustomerById);
customerRouter.put('/', Customer.updateCustomer);
customerRouter.delete('/:customerID', Customer.deleteCustomer);
module.exports = customerRouter;