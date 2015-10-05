var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	fName: String,
	lName: String,
	sex: String,
	tel: String,
	role: String,
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);