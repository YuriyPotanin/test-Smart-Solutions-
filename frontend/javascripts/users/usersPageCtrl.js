var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('usersPageCtrl', usersPageCtrl);

usersPageCtrl.$inject = ['resourceFactory', '$modal', '$rootScope'];

function usersPageCtrl(resourceFactory, $modal, $rootScope) {

	var vm = this;
	vm.allUsers = [];
	$rootScope.$on('udateUsersArray', function(event, updArr) {
		vm.allUsers = updArr;

	});
	resourceFactory.getUsers(function(users) {
		vm.allUsers = users;

	});
	vm.openNew = function(controller, template) {

		var modalInstance = $modal.open({
			templateUrl: './templates/modalTemplates/' + template,
			controller: controller,
			controllerAs: 'new',
			bindToController: true,
		});

	};
}