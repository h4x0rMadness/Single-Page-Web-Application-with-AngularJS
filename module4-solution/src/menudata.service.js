(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('RestApiPath', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'RestApiPath'];
  function MenuDataService($http, RestApiPath) {
    var service = this;
    // this method should return a promise
    // which is a result of using the $http service
    service.getAllCategories  = function () {
      //console.log("inside getAllCategories");
      return $http({
        method: "GET",
        url: RestApiPath + '/categories.json'
      })
      .then(function (response) {
        return response.data;
      });
    };

    //
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: RestApiPath + '/menu_items.json?category=' + categoryShortName
      })
      .then(function (response) {
        return response.data;
      });
    };

  }
})();
