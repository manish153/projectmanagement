var express = require('express');
var router = require('express-promise-router')();
var usersController = require('../controllers/userscontroller');
const {validateParam, schemas} = require('../helpers/routehelpers');
const passport = require('passport');
const passportConf = require('../passport');

const passportJWT = passport.authenticate('jwt',{session: false});
const passportLocal = passport.authenticate('local',{session: false})

// all routes are /users
router.route('/')
.get(usersController.index)

router.route('/newuser')
.post(usersController.createUser);

router.route('/allusers')
.get(passportJWT, usersController.getAllUsers);

router.route('/tempTest')
.post(passportLocal, usersController.tempTest);

router.route(`/user/:userID`)
 .get(validateParam(schemas.idSchema,'userID'),usersController.getUser)
 .patch(usersController.editUser)
 .put(usersController.replaceUser)

module.exports = router;