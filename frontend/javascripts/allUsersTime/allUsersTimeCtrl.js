var allUsersTimeFactory1 = require('../resourceFactory');

angular
	.module('controlTimeModule')
	.controller('allUsersTimeCtrl', allUsersTimeCtrl);

allUsersTimeCtrl.$inject = ['resourceFactory', '$log'];

function allUsersTimeCtrl(resourceFactory, $log) {

	var vm = this;
	vm.allUsers = [];

	resourceFactory.getAllUsers(function(allUsers) {
		vm.allUsers = allUsers;
		console.log(vm.allUsers);
	});

////////////////////////////////BUTTON////////////////////////////////
  vm.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  vm.status = {
    isopen: false
  };

  vm.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  vm.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    vm.status.isopen = !vm.status.isopen;
  };
////////////////////////////////BUTTON////////////////////////////////

}