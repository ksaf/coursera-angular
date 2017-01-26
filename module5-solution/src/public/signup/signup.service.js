(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];

function SignUpService ($http, ApiPath) {
  var service = this;

  service.saveUser = function (user) {
    service.user = user;
  }

  service.getUserInfo = function () {
    return service.user;
  }

  service.isItValid = function (short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
      return true;
    })
    .catch(function (e) {
      return false;
    });
  };

  service.getFavoriteItem = function (short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
      return response.data;
    })
  }

}

})();
