var express = require('express');
var router = express.Router();

var userModel = require('../models/usersmodel');

router.get('/', function(req, res) {
    res.send('Okay!! works now');
});

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