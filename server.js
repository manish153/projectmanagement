const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const server = express();

server.use(helmet());
//middleware
server.use(logger('dev'));
server.use(bodyParser.json());

//controllers
const users = require('./routes/users');

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

// to kill node process in windows use the following command in cmd 
//  tasklist
//  -> taskkill /F /IM node.exe 