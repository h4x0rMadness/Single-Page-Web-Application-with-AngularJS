(function () {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['userProfile'];
  function MyInfoController(userProfile) {
    var $myInfoCtrl = this;
    $myInfoCtrl.user = userProfile;
  };
})();
