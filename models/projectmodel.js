var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectModelSchema = new Schema({
	prjNumber: {type: String,  required: true, unique: true, trim: true},	
	prjName: {type: String,  required: true},	
	prjDesc: {type: String},
    prjStatus: {type: String, required: true},
    prjAssignedTo: {}, // make reference object to users for drop-down in the UI
    prjStartDate:{type: Date},
    prjEndDate:{type: Date}

 });

module.exports = mongoose.model('projectModel', projectModelSchema, 'project');