var app = require('./app.js');

angular
	.module('controlTimeModule')
	.factory('resourceFactory', resourceFactory);

resourceFactory.$inject = ['$resource'];

function resourceFactory($resource) {

	var allUsers = $resource('/api/workingDay');
	var userBasePath = '/api/users/';
	var requstMethog = {};

	requstMethog.getAllUsers = function(callback) {
		allUsers.query(function(resultate) {
			callback(resultate);
		});
	};

	requstMethog.getUser = function(userId,callback) {
		var user = $resource(userBasePath + userId);
		user.get(function(resultate) {
			callback(resultate);
		});
	};
	return requstMethog;
}