/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.info("Registering <%= name %>");

    require('angular').module('app').factory('<%= name %>', 
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