var app = require('./app.js');

angular
	.module('controlTimeModule')
	.factory('resourceFactory', resourceFactory);

resourceFactory.$inject = ['$resource', '$rootScope'];

function resourceFactory($resource, $rootScope) {

	var workingDayBasePath = ('/api/workingDay/');
	var userBasePath = '/api/users/';
	var requstMethog = {};
	var allUsersArr = [];
	var usersArray =[];


	///////////////////////////User/////////////////////////////////
	requstMethog.getAllUsers = function(page, callback) {
		var allUsers = $resource('/api/workingDay?page='+page);
		allUsers.get(function(resultate) {
			allUsersArr = resultate.days;
			callback(resultate);
			
		});
	};

	requstMethog.getUser = function(userId, callback) {
		var user = $resource(userBasePath + userId);
		user.get(function(resultate) {
			callback(resultate);
		});
	};
	requstMethog.updateUser = function(objUser) {
		var user = $resource(userBasePath + objUser._id, null, {
			'update': {
				method: 'PUT'
			}
		});
		user.update(objUser, function(response) {
			console.log(response);
		});

	};
	requstMethog.saveNewUser = function  (objUser) {
		var user = $resource(userBasePath);
		user.save(objUser, function  (response) {
			console.log(response);
		});
	};
	requstMethog.getUsers =function  (callback) {
		var users = $resource(userBasePath);
		users.query(function  (response) {
			usersArray = response;
			callback(response);

		});
	};
	requstMethog.deleteUser = function  (id) {
		var user = $resource(userBasePath + id);
		user.delete(id, function (resp) {
			console.log(resp);
		});
	};

	/////////////////////////Time///////////////////////////////////
	requstMethog.updateTtime = function(userId, sTime, eTime) {
		var workingDay = $resource(workingDayBasePath + userId, null, {
			'update': {
				method: 'PUT'
			}
		});
		var updateTime = {};
		updateTime.tStart = sTime;
		updateTime.tEnd = eTime;

		workingDay.update(updateTime, function(response) {
	
		});

	};
	requstMethog.updateTtimeInArr = function(index, sTime, eTime) {
		allUsersArr[index].tStart = sTime;
		allUsersArr[index].tEnd = eTime;
		
		$rootScope.$emit('udateArray', allUsersArr);

	};
	requstMethog.deleteDate= function (id) {
		var day = $resource(workingDayBasePath+id);
		day.delete(id, function (resp) {

		});
	};
	return requstMethog;
}