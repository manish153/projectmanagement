var express = require('express');
// var router = express.Router();
var router = require('express-promise-router')();

var usersController = require('../controllers/userscontroller');

// all routes are /users
router.route('/')
.get(usersController.index)

router.route('/newuser')
.post(usersController.createUser);

router.route(`/user/:userID`)
 .get(usersController.getUser)
 .patch(usersController.editUser)
 .put(usersController.replaceUser)

module.exports = router;