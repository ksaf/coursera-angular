(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController (SignUpService) {
  var reg = this;

  reg.submit = function (user) {
    SignUpService.isItValid(user.menu_number).then(function (response) {
      if(response === true){
        reg.menuNumberNotValid = false;
        SignUpService.saveUser(user);
        reg.informationHasBeenSaved = true;
      }
      else{
        reg.menuNumberNotValid = true;
      }
    });

  };

  reg.getUserInfo = function () {
    if(SignUpService.getUserInfo() !== 'undefined') {
      return SignUpService.getUserInfo();
    }
  };

}

})();
