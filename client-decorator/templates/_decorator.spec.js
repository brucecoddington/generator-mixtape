(function () {
  'use strict';

  var expect = chai.expect;
  var service, scope;

  describe('<%= moduleName %>.decorators', function () {

    beforeEach(module("<%= moduleName %>.decorators"));

    beforeEach (function () {
      inject(function($rootScope, $service) {
        scope = $rootScope.$new();
        service = $service('<%= name %>', {
            $scope: scope
        }); 
      });
    });

    it('should be a passing spec', function () {
        expect(true).to.be.ok;
    });

  });

}());