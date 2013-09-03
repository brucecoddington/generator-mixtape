(function () {
  var logger = window.debug;

  logger.info("Registering <%= _.capitalize(name) %>Service");

  angular.module('<%= name %>.services')
    .factory('<%= _.capitalize(name) %>', [
      '$DEPS',
      function ($DEPS) {

        return {

        };
      }
    ]);

}());