var allUsersTimeFactory1 = require('../resourceFactory');

angular
  .module('controlTimeModule')
  .controller('allUsersTimeCtrl', allUsersTimeCtrl);

allUsersTimeCtrl.$inject = ['resourceFactory', '$log', '$modal', '$rootScope'];

function allUsersTimeCtrl(resourceFactory, $log, $modal, $rootScope) {

  var vm = this;
  vm.allUsers = [];
  vm.users = [];
  vm.editObject = {};
  vm.currentPage = 1;
  vm.itemsPerPage = 10;
  vm.totalItems = null;

  resourceFactory.getAllUsers(vm.currentPage, function(allUsers) {
    vm.allUsers = allUsers.days;
    vm.totalItems = allUsers.count;
  });

  $rootScope.$on('udateArray', function(event, updArr) {
    vm.allUsers = updArr;
  });

  ////////////////////////////////BUTTON////////////////////////////////
  vm.action = [{
    title: 'edit time',
    templateUrl: 'modalTime.html',
    controller: 'modalTimeCtrl',
    controllerAs: 'time'
  }, {
    title: 'delete date',
    templateUrl: 'deleteDay.html',
    controller: 'deleteDayCtrl',
    controllerAs: 'delete'
  }];

  vm.status = {
    isopen: false
  };


  vm.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    vm.status.isopen = !vm.status.isopen;
  };
  ////////////////////////////////BUTTON////////////////////////////////

  ////////////////////////////////Modal////////////////////////////////

  vm.open = function(day, choice, index) {
    day.index = index;
    var modalInstance = $modal.open({
      templateUrl: './templates/modalTemplates/' + choice.templateUrl,
      controller: choice.controller,
      controllerAs: choice.controllerAs,
      bindToController: true,
      resolve: {
        items: function() {
          return day;
        }
      }


    });

  };

  vm.openNew = function(controller, template) {

    var modalInstance = $modal.open({
      templateUrl: './templates/modalTemplates/' + template,
      controller: controller,
      controllerAs: 'new',
      bindToController: true,
    });

  };
  /////////////////Pagnation//////////////////
  vm.currentPage = 1;
  vm.itemsPerPage = 2;
  vm.totalItems = 20;

  vm.pageChanged = function(page) {

    resourceFactory.getAllUsers(page, function(allUsers) {
      vm.allUsers = allUsers.days;
      vm.totalItems = allUsers.count;
    });
  };
}