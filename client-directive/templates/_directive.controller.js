/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.info('Registering <%= _.capitalize(name) %>Directive');

    require('angular').module('app').directive('<%= _.capitalize(name) %>Directive', 
      [
        '$DEPS',
        function ($DEPS) {
          
          var controller = function ($scope, $element) {

          };

          return {
            controller: controller,
            replace: true,
            require: '???',
            restrict: 'E',
            scope: {},
            templateUrl: 'assets/templates/template.html',
            transclude: true
          };
        }
      ]
    );

  };
});