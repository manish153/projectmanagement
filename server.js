var express = require('express');

var server = express();

var users = require('./controllers/users');

server.get('/', function(req, res){
   res.json("This is the REST API, JSON response of the application");
});

server.use('/users',users);
server.listen(3000);