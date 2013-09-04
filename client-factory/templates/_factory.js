(function () {
  var logger = window.debug;

  logger.info('Registering <%= name %>.services');

  angular.module('<%= name %>.services', [])
    .factory('<%= name %>', [
      '$DEPS',
      function ($DEPS) {

        return {

        };
      }
    ]);

}());