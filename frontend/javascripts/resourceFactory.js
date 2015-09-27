var app = require('./app.js');

angular
	.module('controlTimeModule')
	.factory('resourceFactory', resourceFactory);

resourceFactory.$inject = ['$resource'];

 function resourceFactory ($resource) {

	var allUsers = $resource('/api/workingDay');

	var requstMethog = {};

	requstMethog.getAllUsers = function(callback) {
		allUsers.query(function(resultate) {
			callback(resultate);
		});
	};

	return requstMethog;
}
