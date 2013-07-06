/*global define*/

define(function (require) {

  var logger = require('logger');

  return function () {
    logger.info('Registering <%= _.capitalize(name) %>Filter');

    require('angular').module('app').filter('<%= _.capitalize(name) %>Filter',
      [
        '$DEP',
        function ($DEP) {
          return function (){};
        }
      ]
    );
  };
});