(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/template/categories.template.html', // might be wrong
    controller: CategoriesController
  })
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'items'];
  function CategoriesController(MenuDataService, items) {
    var category = this;

    category.categoryList = items ;
  };

})();
