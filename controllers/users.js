var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('Okay!! works now');
});

router.post('/', function(req, res) {
    res.send('POST handler for /users route.');
});

module.exports = router;