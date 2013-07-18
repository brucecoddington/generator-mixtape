(function () {
  'use strict';

  var logger = window.debug;

  angular.module('filters').
    filter('<%= name %>', [
        '$DEP',
        function ($DEP) {
          return function (){};
        }
      ]);

    logger.debug('Registered filters.<%= name %>');

}());