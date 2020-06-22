const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;
const customerRoute = require('./api/router/customer')
const userRoute = require('./api/router/user')

var http = require('http');
var dp = require('./api/dp')
app.use(bodyParser.json());
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/customer', customerRoute);
app.use('/user', userRoute);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
module.exports = app