var express = require('express');
var router = express.Router();

var usersController = require('../controllers/userscontroller');
var userModel = require('../models/usersmodel');

router.route('/')
.get(usersController.index)


router.route('/newuser')
.post(function(req, res) {        
    var user = new userModel();
    //user.userFirstName = req.body.userFirstName;
    user.userFirstName = 'Manish';    
 
    user.save(function(err) {
         if (err)
             res.send(err);
         res.json({ message: 'User created!' });
     });
});

module.exports = router;