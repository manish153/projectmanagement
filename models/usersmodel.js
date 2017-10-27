var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersModelSchema = new Schema({
	username:{ type: String,  required: true, unique: true, trim: true},
	password:{type: String, required: true},
	userFirstName:{ type: String,  required: true},
	userLastName: String,
	userEmail: {type: String, required: true, trim: true},
	userPhone: String,
	userDOB: String	
 });

module.exports = mongoose.model('usersModel', usersModelSchema, 'users');