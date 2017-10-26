var express = require('express');
// var router = express.Router();
var router = require('express-promise-router')();

var usersController = require('../controllers/userscontroller');


router.route('/')
.get(usersController.index)

router.route('/newuser')
.post(usersController.createUser);

module.exports = router;