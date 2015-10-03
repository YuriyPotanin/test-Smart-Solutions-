var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('modalUserCntrl', modalUserCntrl);

modalUserCntrl.$inject = ['resourceFactory', '$modalInstance', '$modal'];

function modalUserCntrl(resourceFactory, $modalInstance, items, $modal) {
	var vm = this;
	vm.user = {};
	vm.user.date = new Date();
	vm.user.fName = null;
	vm.user.lName = null;
	vm.user.sex = null;
	vm.user.tel = null;



	delete vm.user.__v;
	vm.user.date = new Date(vm.user.date);
	vm.open = function($event) {
		vm.status.opened = true;

	};
	vm.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	vm.status = {
		opened: false
	};


	vm.saveUser = function() {
		resourceFactory.saveNewUser(vm.user);
		$modalInstance.close();
	};
	
	vm.cancel = function() {
		$modalInstance.close();
	};
}