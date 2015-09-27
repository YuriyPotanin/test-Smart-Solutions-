angular
	.module('controlTimeModule', ['ngResource', 'ngRoute', 'ui.bootstrap']);

angular
	.module('controlTimeModule')
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: './templates/allUsersTime/allUsersTime.html',
			controller: 'allUsersTimeCtrl'
		}).
		when('/task/:taskId', {
			templateUrl: './task/taskDetail.html',
			controller: 'taskDetailCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});



	});