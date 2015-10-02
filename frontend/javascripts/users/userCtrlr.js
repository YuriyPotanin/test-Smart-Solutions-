
angular
  .module('controlTimeModule')
  .controller('userCtrl', userCtrl);

userCtrl.$inject = ['resourceFactory', '$routeParams', '$modal'];

function userCtrl(resourceFactory, $routeParams, $modal ) {

	var vm = this;
	vm.user ={};

	vm.userId = $routeParams.userID;
	resourceFactory.getUser(vm.userId, function  (result) {
		vm.user = result;

	});


  vm.open = function(user, template, controller) {
   
    var modalInstance = $modal.open({
      templateUrl: './templates/modalTemplates/' + template,
      controller: controller,
      controllerAs: 'users',
      bindToController: true,
      resolve: {
        items: function() {
          return user;
        }
      }


    });
    
  };

}