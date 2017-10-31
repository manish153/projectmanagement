var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

 usersModelSchema.pre('save', async function(next){
	 try{
		//Generate salt 
		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(this.password,salt)		

		//normal password replaced by hashed value 
		this.password = passwordHash;
		next();
	 }catch(error){
       next(error);
	 }
 });

 usersModelSchema.methods.isValidPassword = async function(newPassword){
	 try{
         return await bcrypt.compare(newPassword,this.password);
	 }catch(error){
       throw new Error(error);
	 }
 }

module.exports = mongoose.model('usersModel', usersModelSchema, 'users');