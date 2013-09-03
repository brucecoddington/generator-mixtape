(function () {
  'use strict';

  var logger = window.debug;
  logger.debug("Registering <%= moduleName %>.directives");

  angular.module('<%= moduleName %>.directives', [])
    .directive('<%= name %>',
      function () {
        return {
          link: function (scope, element, attrs, controller) {

          },
          replace: true,
          transclude: true,
          restrict: 'A',
          //require : '???', // add a parent if needed 
          scope: {},
          controller: '<%= name %>Controller',
          templateUrl: 'assets/templates/<%= moduleName %>/<%= name %>.html'
        };
      }
    );

}());