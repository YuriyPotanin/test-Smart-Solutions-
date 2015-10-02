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
	/////////////////////////////////Users/////////////////

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
	vm.addToArrey = function(keyEvent, user) {
		console.log(keyEvent.which);
		console.log(user);
		if (keyEvent.which === 13) {
			
			console.log(keyEvent.wich);
			
			vm.addedPeople.push(user);
		}
	};
	////////////////////////////////time////////////////////

	vm.stime = null;
	vm.etime = null;
	vm.hstep = 1;
	vm.mstep = 1;

	vm.ismeridian = false;

	vm.update = function() {
		var s = new Date();
		s.setHours(8);
		s.setMinutes(0);
		vm.stime = s;

		var e = new Daet();
		e.setHours(8);
		e.setMinutes(0);
		vm.etime = e;

	};


	////////////////////////date///////////////////////////////
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



}