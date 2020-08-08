(function () {
  'use strict';
  
  angular.module('SimpleFormsApp', [])
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$scope'];
  function RegistrationController($scope) {
    var reg = this;
    reg.submit = function () {
      console.log('User clicked submit with ', reg.user);
    };
    
  }


})();
