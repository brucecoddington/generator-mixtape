/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.info("Registering {{serviceName}}");

    require('angular').module('app').factory('{{serviceName}}', 
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