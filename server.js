var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var logger = require('morgan');
var server = express();

//middleware
server.use(logger('dev'));
server.use(bodyParser.json());

//controllers
var users = require('./routes/users');

//Routes
server.get('/',(req, res, next) => {
  //res.json("This is the REST API, JSON response of the application");
  res.status(200).json({
  message: 'This is the REST API of the application'
})
});

 //controller routes
 server.use('/users',users);
 

//catch 404 errors and forward them to error handlers 
server.use((req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Error handling 
server.use((err,req,res,next) => {
  var error = server.get('env') === 'development' ? err : {};
  var status = error.status || 500;

    //respond to client
    res.status(status).json({
       error: {
         message: error.message
       }
    });

  //respond to terminal
  console.error(err);
});


//database connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PROJECT_DB',{ useMongoClient: true });

//Start the server
const port = server.get('port') || 3000
server.listen(port,() => console.log(`server is listening on port ${port}`));