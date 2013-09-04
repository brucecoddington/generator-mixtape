(function () {
  'use strict';

  var expect = chai.expect;
  var service, scope;

  describe('services.<%= name %>', function () {

    beforeEach(module("<%= moduleName %>"));

    beforeEach (function () {
      inject(function($rootScope, $service){
        scope = $rootScope.$new();
        service = $service('<%= name %>', {
            $scope: scope
        }); 
      });
    });

    afterEach (function () {
        // make sure you clean up any test doubles
    });

    it('should be a passing spec', function () {
        expect(true).to.be.ok;
    });

  });

}());