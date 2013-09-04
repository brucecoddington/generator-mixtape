(function () {
  var logger = window.debug;

  logger.info('Registering <%= moduleName %>.services');

  angular.module('<%= moduleName %>.services')
    .service('<%= name %>', {

    });

}());