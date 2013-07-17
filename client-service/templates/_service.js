(function () {
    var logger = window.debug;

    logger.info("Registering <%= _.capitalize(name) %>Service");

    angular.module('app').factory('<%= _.capitalize(name) %>Service', 
      [
        '$DEPS',
        function ($DEPS) {

          return {
            method: method
          };
        }
      ]
    );

  }());