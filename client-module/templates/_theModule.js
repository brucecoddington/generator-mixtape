(function () {
	'use strict';

	var logger = window.debug;
	logger.group("Registering <%= _.capitalize(name) %> module");

	var app = angular.module('<%= name %>', ['<%= name %>.directives', '<%= name %>.controllers']);

	logger.debug("<%= _.capitalize(name) %> module bootstrapped.");
	logger.groupEnd(); 

}());