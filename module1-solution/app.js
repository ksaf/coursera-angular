(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', FoodController);

FoodController.$inject = ['$scope'];

function FoodController($scope) {
  $scope.submit = function () {
    $scope.message = calculateMessage($scope.food || "");
  };
};

function calculateMessage (foodString) {
  var message = "";
  foodString = foodString.split(',');
  var actualLength = 0;

  for (var i =0; i<foodString.length; i++){
    if (foodString[i].trim() !== "") {
      actualLength += 1;
    }
  }

  if(actualLength == 0){
    message = "Please enter data first";
  }
  else if(actualLength <=3 ){
    message = "Enjoy!";
  }
  else {
    message = "Too much!";
  }

  return message;
};

})();
