(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.itemsToBuy = ShoppingListCheckOffService.itemsToBuy();

  toBuyList.buy = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.itemsAlreadyBought = ShoppingListCheckOffService.itemsAlreadyBought();

};

function ShoppingListCheckOffService() {
  var service = this;

  var itemsAlreadyBought = [];

  var itemsToBuy = [
  {
    name: "cookies",
    quantity: 10
  },
  {
    name: "milk",
    quantity: 2
  },
  {
    name: "spaghetti",
    quantity: 3
  },
  {
    name: "bread",
    quantity: 1
  },
  {
    name: "chocolates",
    quantity: 4
  }];

  service.itemsToBuy = function () {
    return itemsToBuy;
  };

  service.buyItem = function (itemIndex) {
    itemsAlreadyBought.push(itemsToBuy.splice(itemIndex,1)[0]);
  };

  service.itemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };

};

})();
