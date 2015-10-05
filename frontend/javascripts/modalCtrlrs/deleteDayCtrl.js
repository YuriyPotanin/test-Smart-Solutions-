var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('deleteDayCtrl', deleteDayCtrl);

deleteDayCtrl.$inject = ['resourceFactory', '$modalInstance', 'items', '$modal'];

function deleteDayCtrl(resourceFactory, $modalInstance, items, $modal) {
	var vm = this;
	vm.day = items;
	
	vm.deleteDate = function(id) {
		resourceFactory.deleteDate(id);
		$modalInstance.close();
		location.href = '/';
	};
	vm.cancel = function() {
		$modalInstance.close();
	};
}