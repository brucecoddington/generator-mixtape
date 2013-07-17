(function () {
  'use strict';

  var logger = window.debug;

  angular.module('<%= moduleName %>.controllers', []).
    controller('<%= _.capitalize(name) %>Controller', [
      '$scope',
      function ($scope){
         
      }
    ]);

    logger.debug('Registered <%= moduleName %>.<%= _.capitalize(name) %>Controller');

}());