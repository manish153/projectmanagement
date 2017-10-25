var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersModelSchema = new Schema({
	userFirstName:{ type: String,  required: true},
	userLastName: String,
	userEmail: String,
	userPhone: String,
	userDOB: String,	
 });

module.exports = mongoose.model('usersModel', usersModelSchema, 'users');