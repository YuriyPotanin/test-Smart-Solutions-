var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('modalTimeCtrl', modalTimeCtrl);

modalTimeCtrl.$inject = ['resourceFactory', '$modalInstance', 'items'];

function modalTimeCtrl(resourceFactory, $modalInstance, items) {
	var vm = this;
	vm.selectObject = items;

	vm.stime = vm.selectObject.tStart;
	vm.etime = vm.selectObject.tEnd;
	vm.hstep = 1;
	vm.mstep = 1;

	vm.ismeridian = false;

	vm.update = function() {
		var s = vm.selectObject.tStart;
		s.setHours(8);
		s.setMinutes(0);
		vm.stime = s;

		var e = vm.selectObject.tEnd;
		e.setHours(8);
		e.setMinutes(0);
		vm.etime = e;

	};

	vm.saveObjectTime = function(userId, sTime, eTime) {
		resourceFactory.updateTime(userId, sTime, eTime);
		resourceFactory.updateTimeInArr(items.index, sTime, eTime);
		$modalInstance.close();
	};
	vm.cancel = function () {
		$modalInstance.close();
	};
}