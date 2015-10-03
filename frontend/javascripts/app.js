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
		when('/api/users/:userID', {
			templateUrl: './templates/users/user.html',
			controller: 'userCtrl as user'
		}).
		otherwise({
			redirectTo: '/'
		});
});