(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // define otherwise url state Page: lead to home
    $urlRouterProvider.otherwise('/');

    $stateProvider

    // define home state
    .state('home', {
      url: '/',
      templateUrl: 'src/template/home.template.html'
    })

    // define categories state
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/template/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // define item state
    .state('categoryDetail', {
      url: '/{categoryShortName}',
      templateUrl: 'src/template/items.template.html',
      controller: 'CategoryDetailController as cateCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }

    })
  }

})();
