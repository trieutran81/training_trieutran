var express = require('express');
var routerUser = express.Router();

var useController = require('../controllers/userController');
var authController = require('../controllers/authController');

// Register
routerUser.post('/register',  useController.register);

// Login
routerUser.post('/login',  useController.login);

routerUser.get('/',authController.isAuthenticated,  useController.users);


module.exports = routerUser;