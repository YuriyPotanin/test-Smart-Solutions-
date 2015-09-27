var allUsersTimeFactory1 = require('../resourceFactory');

angular
	.module('controlTimeModule')
	.controller('allUsersTimeCtrl', allUsersTimeCtrl);

allUsersTimeCtrl.$inject = ['resourceFactory', '$log', '$modal'];

function allUsersTimeCtrl(resourceFactory, $log, $modal) {

	var vm = this;
	vm.allUsers = [];

	resourceFactory.getAllUsers(function(allUsers) {
		vm.allUsers = allUsers;
		console.log(vm.allUsers);
	});

////////////////////////////////BUTTON////////////////////////////////
  vm.items = [
    {title :'edit date'},
    {title:'delete date'}
  ];

  vm.status = {
    isopen: false
  };


  vm.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    vm.status.isopen = !vm.status.isopen;
  };
////////////////////////////////BUTTON////////////////////////////////

////////////////////////////////Modal////////////////////////////////
  vm.open = function () {
    var modalInstance = $modal.open({
      templateUrl: './templates/date/modalDate.html',
      controller: 'dateCtrl'
    });
  };


////////////////////////////////Modal////////////////////////////////
}