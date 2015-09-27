var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var users = require('./users');

var workingDaySchema = new Schema({
	date: Date,
	userID:{type:String, ref: 'User'},
	tStart: Date,
	tEnd: Date	
	
});

module.exports = mongoose.model('WorkingDay', workingDaySchema);