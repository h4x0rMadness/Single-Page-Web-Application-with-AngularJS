(function () {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json')
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'controller',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;

  controller.hasPressedButton = true;
  // controller.displayMessage = (controller.hasPressedButton
  //                             && controller.found.length === 0);
  controller.items = [];
  controller.searchTerm = "";
  controller.logMenuList = function(searchTerm) {
    controller.items = [];
    controller.hasPressedButton = true;


    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);

    promise.then(function (items) {
      if (items && items.length > 0) {
        controller.items = items;
      }
    })
    .catch(function (error) {
      console.log("some error!");
    });

    console.log('hasPressed: ' + controller.hasPressedButton +" length is 0: "+
    controller.items.length === 0 + " display? " + controller.displayMessage);
    controller.displayMessage = (controller.hasPressedButton
                                && controller.items.length === 0);
  };

  controller.removeItem = function (index) {
    controller.items.splice(index, 1);
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    // send GET request to get json
    return $http({
      method: "GET",
      url: ApiBasePath
    })
    .then(function (response) {
      var foundItems = [];

      var data = response.data['menu_items'];
      var numItems = data.length;

      for (var i = 0; i < numItems; i++) {
        //var description = data['']
        var desc = data[i]['description'];
        if (desc.indexOf(searchTerm) !== -1) {
          foundItems.push(data[i]);
        }
      }
      return foundItems;
    });
  };
}

}) ();
