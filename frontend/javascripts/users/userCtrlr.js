angular
  .module('controlTimeModule')
  .controller('userCtrl', userCtrl);

userCtrl.$inject = ['resourceFactory', '$routeParams'];

function userCtrl(resourceFactory, $routeParams) {

	var vm = this;
	vm.user ={};
	vm.userId = $routeParams.userID;
	resourceFactory.getUser(vm.userId, function  (result) {
		vm.user = result;
		console.log(vm.user);
	});


}