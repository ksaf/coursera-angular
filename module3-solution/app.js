(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {

  var ctrl = this;

  ctrl.search = function() {
    if(ctrl.searchTerm === '' || ctrl.searchTerm === 'undefined' || ctrl.found === []){
      ctrl.found = [];
    }
    else {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function (response) {
        ctrl.found = response;
      });
    }
  };

  ctrl.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(ctrl.found, itemIndex);
  };

};

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {

  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      })
      .then(function (response) {
        var foundItems = {};
        var found = [];
        foundItems = response.data.menu_items;
        for(var i=0; i<foundItems.length; i++){
          if(foundItems[i].description.toLowerCase().indexOf(searchTerm) !== -1){
            found.push(foundItems[i]);
          }
        }
        return found;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      });
  };

  service.removeItem = function (items, itemIndex) {
    items.splice(itemIndex, 1);
  };

};

function foundItems () {
  var ddo;

  ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;

};

})();
