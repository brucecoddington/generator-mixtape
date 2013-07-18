(function () {
  'use strict';

  var logger = window.debug;

  var <%= name %>Controller = function ($scope, $element) {
    $element.bind('click', function () {
      console.log('Turn up the volume.');
    });
  };

  logger.debug("Registering <%= moduleName %>.directives");

  angular.module('<%= moduleName %>.directives', [])
    .directive('<%= name %>', 
      function () {
        return {
          controller: <%= name %>Controller,
          replace: true,
          transclude: true,
          restrict: 'A',
          //require : '???', // add a parent if needed 
          scope: {},
          templateUrl: 'assets/templates/<%= moduleName %>/<%= name %>.html'
        };
      }
    );

}());