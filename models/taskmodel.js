var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskModelSchema = new Schema({		
	taskame: {type: String,  required: true},	
	taskDesc: {type: String},
    taskStatus: {type: String, required: true},
    taskAssignedTo: {}, // make reference object to users for drop-down in the UI
    taskStartDate:{type: Date},
    taskEndDate:{type: Date}
 });

module.exports = mongoose.model('taskModel', taskModelSchema, 'tasks');