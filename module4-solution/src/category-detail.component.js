(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryDetailController', CategoryDetailController);

  CategoryDetailController.$inject = ['items', '$stateParams'];
  function CategoryDetailController(items, $stateParams) {
    var cateCtrl = this;

    console.log("shortname is: " + $stateParams.categoryShortName);
    console.log("corresponding items are: ", items);

    cateCtrl.jsonData = items;
    console.log(cateCtrl.jsonData);
  };

})();
