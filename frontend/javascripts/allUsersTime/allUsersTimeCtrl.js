var allUsersTimeFactory1 = require('../resourceFactory');

angular
  .module('controlTimeModule')
  .controller('allUsersTimeCtrl', allUsersTimeCtrl);

allUsersTimeCtrl.$inject = ['resourceFactory', '$log', '$modal', '$scope'];

function allUsersTimeCtrl(resourceFactory, $log, $modal, $scope) {

  var vm = this;
  vm.allUsers = [];
  vm.editObject ={};

  resourceFactory.getAllUsers(function(allUsers) {
    vm.allUsers = allUsers;
    // console.log(vm.allUsers);
  });

  ////////////////////////////////BUTTON////////////////////////////////
  vm.items = [{
    title: 'edit date'
  }, {
    title: 'delete date'
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

  vm.open = function(item) {
    var modalInstance = $modal.open({
      templateUrl: './templates/modalTemplates/modalDate.html',
      controller: 'allUsersTimeCtrl as modal'

    });
    vm.editObject = item;
    $scope.$apply();
    console.log(vm.editObject._id);
  };


  ////////////////////////////////Modal////////////////////////////////

  ////////////////////////////////TimePicer////////////////////////////
  vm.mytime = new Date();

  vm.hstep = 1;
  vm.mstep = 1;

  // vm.options = {
  //   hstep: [1, 2, 3],
  //   mstep: [1, 5, 10, 15, 25, 30]
  // };

  vm.ismeridian = false;
  // vm.toggleMode = function() {
    // vm.ismeridian = ! vm.ismeridian;
  // };

  vm.update = function() {
    var d = new Date();
    d.setHours( 8);
    d.setMinutes( 0 );
    vm.mytime = d;
  };

  // vm.changed = function () {
    // $log.log('Time changed to: ' + vm.mytime);
  // };

  // vm.clear = function() {
    // vm.mytime = null;
  // };

  }