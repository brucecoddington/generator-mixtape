/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.info("Registering <%= _.capitalize(name) %>Service");

    require('angular').module('app').factory('<%= _.capitalize(name) %>Service', 
      [
        '$DEPS',
        function ($DEPS) {

          return {
            method: method
          };
        }
      ]
    );
  };
});