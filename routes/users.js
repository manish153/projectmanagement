var express = require('express');
var router = require('express-promise-router')();
var usersController = require('../controllers/userscontroller');
const {validateParam, schemas} = require('../helpers/routehelpers');

// all routes are /users
router.route('/')
.get(usersController.index)

router.route('/newuser')
.post(usersController.createUser);

router.route(`/user/:userID`)
 .get(validateParam(schemas.idSchema,'userID'),usersController.getUser)
 .patch(usersController.editUser)
 .put(usersController.replaceUser)

module.exports = router;