(function () {
  'use strict';

  var logger = window.debug;

  logger.debug("Registering <%= moduleName %>.directives");

  angular.module('<%= moduleName %>.directives', [])
    .directive('<%= name %>', 
      function () {
        return {
          controller: '<%= name %>Controller',
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