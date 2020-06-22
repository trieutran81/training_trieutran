const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../dp');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var customerSchema = new Schema({
    customerID: {
        type: Number
        },
    email: {
        type: String, 
        required: true, 
        unique: true},
    password: { 
        type: String, 
        default: '12345678'},
    role:  { 
        type: String, 
        default: 'customer'},
	dateAdded : { type: Date, default: Date.now },
})

customerSchema.plugin(autoIncrement.plugin, 'Customers');
customerSchema.plugin(autoIncrement.plugin, { model: 'Customers', field: 'customerID',startAt:0,incrementBy: 1 });
const Customer = mongoose.model('Customers', customerSchema);


module.exports = {
    Customer
};