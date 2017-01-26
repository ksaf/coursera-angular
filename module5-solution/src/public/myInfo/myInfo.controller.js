(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService', 'favItem', 'ApiPath'];
function MyInfoController (SignUpService, favItem, ApiPath) {
  var info = this;

  info.infor = SignUpService.getUserInfo();

  info.favItem = favItem;

  info.basePath = ApiPath;
}

})();
