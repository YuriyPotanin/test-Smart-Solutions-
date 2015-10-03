var app = require('../app');

angular
	.module('controlTimeModule')
	.controller('modalDayCtrl', modalDayCtrl);

modalDayCtrl.$inject = ['resourceFactory', '$modalInstance'];

function modalDayCtrl(resourceFactory, $modalInstance) {
	var vm = this;
	vm.allUsers = [];
	vm.addedPeople = [];
	vm.customSelected = null;

	resourceFactory.getUsers(function(users) {
		vm.allUsers = users;
		createArrayRorSearch(vm.allUsers);
		console.log(vm.allUsers);
	});

	var createArrayRorSearch = function(arr) {

		vm.ArrForSearchUser = arr.map(function(user) {
			user.q = user.fName + " " + user.lName;
			return user;
		});
	};

	vm.addToArray = function(user) {
		vm.addedPeople.push(user);
	};

	vm.onSelect = function(item) {
		vm.addToArray(item);
		vm.customSelected = '';
	};


	vm.stime = new Date();
	vm.etime = new Date();
	vm.hstep = 1;
	vm.mstep = 1;

	vm.ismeridian = false;

	vm.date = new Date();
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

	vm.submit = function() {
		var people = vm.addedPeople.map(function(user) {
			return user._id;
		});
		var saveObject = {
			date: vm.date,
			tEnd: vm.etime,
			tStart: vm.stime,
			userIds: people
		};

		resourceFactory.saveNewWorkDay(saveObject, vm.addedPeople, function (data) {
			console.log(data);
		});
		$modalInstance.close();

	};
	vm.cancel = function  () {
		$modalInstance.close();
	};

}