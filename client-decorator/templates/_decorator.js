(function () {
  var logger = window.debug;
  logger.info('Registering <%= moduleName %>.decorators');

  angular.module('<%= moduleName %>.decorators', [])
    .config(function ($provide) {
      $provide.decorator('<%= name %>', function ($delegate) {
          // decorate the $delegate
          return $delegate;
      });
    });
}());