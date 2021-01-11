(function () {
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuy = this;

  ToBuy.items = ShoppingListCheckOffService.getToBuyList();
  ToBuy.isEmpty = function () {
    return ShoppingListCheckOffService.checkToBuyListEmpty();
  }
  ToBuy.removeFromToBuy = function (itemIndex) {
    ShoppingListCheckOffService.removeToBuyList(itemIndex);
  };


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var AlreadyBought = this;

  AlreadyBought.items = ShoppingListCheckOffService.getBoughtList();

  AlreadyBought.isEmpty = function () {
    return ShoppingListCheckOffService.checkBoughtListEmpty();
  }

}

function ShoppingListCheckOffService() {
  var service = this;

  var initialItems = [{
    name: 'cookies',
    quantity: 10
  }, {
    name: 'milk',
    quantity: 1
  }, {
    name: 'omelette',
    quantity: 5
  }, {
    name: 'toast',
    quantity: 5
  }, {
    name: 'blueberry',
    quantity: 1
  }, {
    name: 'taco',
    quantity: 3
  }];

  //var toBuyList = []; make it remain undefined?
  var boughtList = []; // initially empty
  var toBuyList;
  service.getToBuyList = function () {
    if (typeof(toBuyList) === 'undefined') {
      toBuyList = [];
      for (var i = 0; i < initialItems.length; i++) toBuyList.push(initialItems[i]);
    }
    return toBuyList;
  }

  service.removeToBuyList = function (itemIndex) {
    var removedItem = toBuyList[itemIndex];

    toBuyList.splice(itemIndex, 1); // remove from toBuyList
    boughtList.push(removedItem); // append to bought List

  };

  service.getBoughtList = function () {
    return boughtList;
  }

  // function to check if toBuy list is empty:
  service.checkToBuyListEmpty = function () {
    if (typeof(toBuyList) === 'undefined' || toBuyList.length === 0) return false;
    else return true;
  }

  // function to check if AlreadyBought list is empty:
  service.checkBoughtListEmpty = function () {
    return boughtList.length === 0;
  }
}

}) ();
