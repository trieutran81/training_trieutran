const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../dp');
const autoIncrement = require('mongoose-auto-increment');

var customerSchema = new Schema({
    customerID: {
        type: Number, 
        required: true, 
        unique: true},
    email: {
        type: String, 
        required: true, 
        unique: true},
    password: { 
        type: String, 
        required: true },
    role:  { 
        type: String, 
        required: true,
        default: 'customer'},
	dateAdded : { type: Date, default: Date.now },
})

const Customer = mongoose.model('Customers', customerSchema);
autoIncrement.initialize(mongoose.connection);
customerSchema.plugin(autoIncrement.plugin, { model: 'Customers', field: 'customerID' });

module.exports = {
    Customer
};