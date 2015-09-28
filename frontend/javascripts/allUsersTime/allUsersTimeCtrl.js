var allUsersTimeFactory1 = require('../resourceFactory');

angular
  .module('controlTimeModule')
  .controller('allUsersTimeCtrl', allUsersTimeCtrl);

allUsersTimeCtrl.$inject = ['resourceFactory', '$log', '$modal'];

function allUsersTimeCtrl(resourceFactory, $log, $modal) {

  var vm = this;
  vm.allUsers = [];
  vm.editObject ={};

  resourceFactory.getAllUsers(function(allUsers) {
    vm.allUsers = allUsers;
    // console.log(vm.allUsers);
  });

  ////////////////////////////////BUTTON////////////////////////////////
  vm.items = [{
    title: 'edit date',
    templateUrl: 'modalDate.html'
  }, {
    title: 'delete date',
    templateUrl: 'modalDeleteDate.html'
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

  vm.open = function(item, template) {
    var modalInstance = $modal.open({
      templateUrl: './templates/modalTemplates/'+ template,
      controller: 'allUsersTimeCtrl as modal'

    });
    vm.editObject = item;
    
    console.log(vm.editObject.tStart);
  };


  ////////////////////////////////Modal////////////////////////////////

  ////////////////////////////////TimePicer////////////////////////////
  // vm.stime = vm.editObject.tStart;
  // vm.etime = vm.editObject.tEnd;
  vm.hstep = 1;
  vm.mstep = 1;

  vm.ismeridian = false;

  vm.update = function() {
    var s = vm.editObject.tStart;
    s.setHours( 8);
    s.setMinutes( 0 );
    vm.stime = s;

    var e = vm.editObject.tEnd;
    e.setHours( 8);
    e.setMinutes( 0 );
    vm.etime = e;
  };


  }