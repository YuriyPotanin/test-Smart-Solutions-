var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('deleteDayCtrl', deleteDayCtrl);

deleteDayCtrl.$inject = ['resourceFactory', '$modalInstance', 'items', '$modal'];

function deleteDayCtrl(resourceFactory, $modalInstance, items, $modal) {
	var vm = this;
	vm.day = items;
	console.log(vm.day);
	
	vm.deleteDate = function(id) {
		console.log(id);
		resourceFactory.deleteDate(id);
		$modalInstance.close();
		location.href = '/';
	};
	vm.cancel = function() {
		$modalInstance.close();
	};
}