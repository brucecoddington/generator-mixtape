(function () {
  var logger = window.debug;

  logger.info('Registering <%= name %>.services');

  angular.module('<%= name %>.services')
    .factory('<%= _.capitalize(name) %>', [
      '$DEPS',
      function ($DEPS) {

        return {

        };
      }
    ]);

}());