const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;
const customerRoute = require('./api/router/customer')
const userRoute = require('./api/router/user')

var http = require('http');
var dp = require('./api/dp')
app.use(bodyParser.json());
app.use('/customer', customerRoute);
app.use('/user', userRoute);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
module.exports = app