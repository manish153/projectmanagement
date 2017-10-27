var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empModelSchema = new Schema({
	empID:{type: String,  required: true, unique: true, trim: true},	
	empFirstName:{type: String,  required: true},
	empLastName: String,
	empEmail:{type: String, required: true, trim: true},
	empPhone: String,
    empDOB: String,	
    empAddress: String,
    empStatus:{type: String, required: true}
 });

module.exports = mongoose.model('empModel', empModelSchema, 'employee');