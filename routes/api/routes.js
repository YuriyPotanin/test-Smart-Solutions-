var users = require('./users');
var workingDay = require('./workingDay');
module.exports = function(app){
	return {
		users: users(app),
		workingDay:workingDay(app)
	};
};
