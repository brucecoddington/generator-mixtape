/*global define*/

define(function (require) {
    
  var logger = require('logger');

  return function () {
    logger.info('Registering {{name}}Controller');

    require('angular').module('app').controller('{{name}}Controller',
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