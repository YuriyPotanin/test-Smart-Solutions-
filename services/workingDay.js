var userRepository = require('../repositories/userRepository');
var workingDay = require('../repositories/workingDayRepository');
var async = require('async');

var workingDayService = function() {

};
workingDayService.prototype.saveWorkDayForUsers = function(data, callback) {
	var userIds = data.userIds;

	async.map(userIds, function(userId, elCallback) {
		var workdayUser = {
			date: data.date,
			tEnd: data.tEnd,
			tStart: data.tStart,
			userID: userId
		};
		workingDay.add(workdayUser, function (err, data) {
			var dataForResponse;
			if (data){
				dataForResponse = {
					workingDayId : data._id,
					userId: userId
				};
			}
			elCallback(err, dataForResponse);
		});

	}, function(err, users) {
		console.log(arguments);

		if (err) {
			callback(err);
		} else {
			callback(err, users);
		}
	});
};



module.exports = new workingDayService();