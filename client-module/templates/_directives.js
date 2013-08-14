(function () {
  'use strict';

  var logger = window.debug;

  logger.debug("Registering <%= name %>.directives");

  angular.module('<%= name %>.directives', []);

  // Directives go here -----------

  // Example: 
    // .directive('sampleDirective', 
    //   function () {
    //     return {
    //       controller: <%= _.capitalize(name) %>Controller,
    //       replace: true,
    //       transclude: true,
    //       restrict: 'A',
    //       scope: {},
    //       templateUrl: 'assets/templates/<%= name %>/sampleDirective.html'
    //     };
    //   }
    // );

}());