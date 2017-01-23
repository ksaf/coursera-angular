(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
function CategoriesController (items) {

  var ctrl = this;
  ctrl.categoryItems = items.data;

}

})();
