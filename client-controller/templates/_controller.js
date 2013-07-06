/*global define*/

define(function (require) {
    
  var logger = require('logger');

  return function () {
    logger.info('Registering <%= _.capitalize(name) %>Controller');

    require('angular').module('app').controller('<%= _.capitalize(name) %>Controller',
      [
        '$scope',
        function ($scope){
            $scope.messages = {
              boo: "booyaa!"
            };

            $scope.alert = function (msg) {
              window.alert('clicked' + msg +'!');
            };
        }
      ]
    );
  };
    
});