var userRepository = require('../repositories/userRepository');
var workingDay = require('../repositories/workingDayRepository');
var async = require('async');

var workingDayService = function() {

};
workingDayService.prototype.getAllUsersWorkDays = function(callback) {
	userRepository.getAll(function(err, data) {
		async.map(data, function(user, asyncCallback) {
			var userObject = user.toObject();
			workingDay.findByIdUser(userObject._id, function(err, workingDaysArray) {
				userObject.workingDays = workingDaysArray;
				asyncCallback(null, userObject);
			});
		}, function(errFromIterator, results) {
			if (errFromIterator) {
				callback(errFromIterator);
			}
			callback(null, results);
		});
	});
};



module.exports = new workingDayService();