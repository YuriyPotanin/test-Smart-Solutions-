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
		when('/api/usersPage/', {
			templateUrl: './templates/users/usersPage.html',
			controller: 'usersPageCtrl as users'
		}).
		otherwise({
			redirectTo: '/'
		});
});