(function () {
  'use strict';

  var logger = window.debug;
  logger.group('Registering <%= moduleName %> module');

  var app = angular.module('<%= moduleName %>', [
    '<%= moduleName %>.controllers',
    'ui.state'
  ]);

  logger.debug('Registering states for <%= moduleName %>');

  app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        controller: '<%= _.capitalize(name)%>Controller',
        templateUrl: 'assets/templates/<%= directoryPath %>/index.html'
      });
  }]);

  logger.debug('<%= name %> module bootstrapped.');
  logger.groupEnd();
}());
