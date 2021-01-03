(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.evalMsg = function() {
    var msg = $scope.lunch;
    var evaluation = "";

    if (typeof(msg) == 'undefined' || msg.length == 0)
      evaluation = "Please enter data first";
    else {
      console.log(typeof(msg) == 'undefined');
      const list = msg.split(",");

      if (list.length <= 3) evaluation = "Enjoy!";
      else evaluation = "Too much!";
    }

    return evaluation;
  };

  $scope.clickEvent = function() {
    $scope.Msg = $scope.evalMsg();
  };
}




})();
