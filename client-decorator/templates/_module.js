(function () {
  'use strict';

  var logger = window.debug;
  logger.group('Registering <%= moduleName %> module');

  angular.module('<%= moduleName %>', [
    '<%= moduleName %>.decorators',
    'ui.state'
  ]);

  logger.debug('<%= name %> module bootstrapped.');
  logger.groupEnd();
}());
