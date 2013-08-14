(function () {
	'use strict';

	var logger = window.debug;
	logger.group("Registering <%= _.capitalize(name) %> module");

	var app = angular.module('<%= name %>', [
    '<%= name %>.directives', 
    '<%= name %>.controllers'
    'ui.state'
  ]);

  logger.debug("Registering states for <%= name %>");

  app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        controller: '<%= _.capitalize(name)%>Controller',
        templateUrl: 'assets/templates/<%= name %>/index.html'
      });
  }]);

	logger.debug("<%= name %> module bootstrapped.");
	logger.groupEnd(); 

}());