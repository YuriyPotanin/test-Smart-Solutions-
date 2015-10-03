var app = require('./app.js');

angular
	.module('controlTimeModule')
	.factory('resourceFactory', resourceFactory);

resourceFactory.$inject = ['$resource', '$rootScope'];

function resourceFactory($resource, $rootScope) {

	var workingDayBasePath = ('/api/workingDay/');
	var userBasePath = '/api/users/';
	var requstMethod = {};
	var allUsersArr = [];
	var usersArray = [];
	var currentPage = 1;
	var totalPages = 1;

	requstMethod.getAllUsers = function(page, callback) {
		currentPage = page;
		var allUsers = $resource('/api/workingDay?page=' + page);
		allUsers.get(function(result) {
			allUsersArr = result.days;
			totalPages = Math.ceil(result.count / 10);
			callback(result);

		});
	};

	requstMethod.getUser = function(userId, callback) {
		var user = $resource(userBasePath + userId);
		user.get(function(resultate) {
			callback(resultate);
		});
	};
	requstMethod.updateUser = function(objUser) {
		var user = $resource(userBasePath + objUser._id, null, {
			'update': {
				method: 'PUT'
			}
		});
		user.update(objUser, function(response) {
			console.log(response);
		});

	};
	requstMethod.saveNewUser = function(objUser) {
		var user = $resource(userBasePath);
		user.save(objUser, function(response) {
			console.log(response);
		});
	};
	requstMethod.getUsers = function(callback) {
		var users = $resource(userBasePath);
		users.query(function(response) {
			usersArray = response;
			callback(response);

		});
	};

	requstMethod.deleteUser = function(id) {
		var user = $resource(userBasePath + id);
		user.delete(id, function(resp) {
			console.log(resp);
		});
	};

	requstMethod.saveNewWorkDay = function(dataToBeSaved, users) {
		var newWorkDay = $resource(workingDayBasePath, {}, {
			'save': {method:'POST', isArray:true}
		});
		
		newWorkDay.save(dataToBeSaved, function(resp) {
			if (currentPage === totalPages){
				var data = resp.map(function(el){
					var user = users.filter(function(userEl){
						return userEl._id === el.userId;
					});

					if (user.length){
						user = user[0];
					}

					var obj = {
						_id: el.workingDayId,
						date: dataToBeSaved.date,
						tEnd: dataToBeSaved.tEnd,
						tStart: dataToBeSaved.tStart,
						userID: user
					};
					return obj;
				});

				[].push.apply(allUsersArr, data);
				$rootScope.$emit('udateArray', allUsersArr);
			}
		});
	};
	

	requstMethod.updateTime = function(userId, sTime, eTime) {
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

	requstMethod.updateTimeInArr = function(index, sTime, eTime) {
		if (allUsersArr[index]){
			allUsersArr[index].tStart = sTime;
			allUsersArr[index].tEnd = eTime;

			$rootScope.$emit('udateArray', allUsersArr);
		}
	};

	requstMethod.deleteDate = function(id) {
		var day = $resource(workingDayBasePath + id);
		day.delete(id, function(resp) {

		});
	};
	return requstMethod;
}