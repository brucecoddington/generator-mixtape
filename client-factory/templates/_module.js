(function () {
  'use strict';

  var logger = window.debug;
  logger.group('Registering <%= moduleName %> module');

  angular.module('<%= moduleName %>', [
    '<%= moduleName %>.factories',
    'ui.state'
  ]);

  logger.debug('<%= name %> module bootstrapped.');
  logger.groupEnd();
}());
