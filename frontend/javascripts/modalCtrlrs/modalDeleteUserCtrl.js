var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('modalDeleteUserCtrl', modalDeleteUserCtrl);

modalDeleteUserCtrl.$inject = ['resourceFactory', '$modalInstance', 'items', '$modal'];

function modalDeleteUserCtrl(resourceFactory, $modalInstance, items, $modal) {
	var vm = this;
	vm.user = items;
	vm.deleteUser = function  (argument) {

		resourceFactory.deleteUser(vm.user._id);
		$modalInstance.close();
		location.href='/';
	};
	vm.cancel =function () {
		$modalInstance.close();
	};
}