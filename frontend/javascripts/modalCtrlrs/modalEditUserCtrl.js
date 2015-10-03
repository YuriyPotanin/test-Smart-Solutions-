var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('modalEditUserCtrl', modalEditUserCtrl);

modalEditUserCtrl.$inject = ['resourceFactory', '$modalInstance', 'items', '$modal'];

function modalEditUserCtrl(resourceFactory, $modalInstance, items, $modal) {
	var vm = this;
	vm.user = items;
	
	delete vm.user.__v;
	console.log(vm.user);
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


	vm.saveUpdateUser = function() {
		resourceFactory.updateUser(vm.user);
		$modalInstance.close();
	};
	vm.cancel = function () {	
		$modalInstance.close();
	};
}