var ResourceFactory = require('./resourceFactory');

angular
	.module('controlTimeModule')
	.controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['resourceFactory'];

function mainCtrl(resourceFactory, $location) {
	vm = this;
	vm.customSelected = null;
	vm.allUsers = [];


	resourceFactory.getUsers(function(users) {
		vm.allUsers = users;
		vm.allUsers.map(function(user) {
			user.q = user.fName + " " + user.lName;
			return user;
		});
	});

	vm.onSelect = function(item) {
		var location = '/#/api/users/' + item._id;
		window.location.href = location;
		vm.customSelected = '';
	};

}