(function () {
  var logger = window.debug;

  logger.info('Registering <%= _.capitalize(name) %>');

  angular.module('<%= moduleName %>.services')
    .provider('<%= name %>', [
      '$DEPS',
      function ($DEPS) {

        // Private variables

        // Private constructor
        function <%= _.capitalize(name) %>() {
          
        }

        // Public API for configuration

        // Method for instantiating
        this.$get = function () {
          return new <%= _.capitalize(name) %>();
        };
      }
    ]);

}());