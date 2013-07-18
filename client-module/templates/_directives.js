(function () {
  'use strict';

  var logger = window.debug;

  var clickableTitleController = function ($scope, $element) {
    $element.bind('click', function () {
      console.log('Turn up the volume.');
    });
  };

  logger.debug("Registering <%= name %>.directives");

  angular.module('<%= name %>.directives', [])
    .directive('clickableTitle', 
      function () {
        return {
          controller: clickableTitleController,
          replace: true,
          transclude: true,
          restrict: 'A',
          scope: {},
          templateUrl: 'assets/templates/<%= name %>/clickableTitle.html'
        };
      }
    );

}());