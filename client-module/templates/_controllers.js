(function () {
  'use strict';

  var logger = window.debug;

  angular.module('<%= name %>.controllers', [])
    .controller('<%= _.capitalize(name) %>Controller', [
      '$scope',
      function ($scope) {
         
      }
    ]);

  logger.debug('Registered <%= name %>.<%= _.capitalize(name) %>Controller');

}());