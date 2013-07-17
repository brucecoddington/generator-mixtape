(function () {
  'use strict';

  var expect = chai.expect;
  var service, scope;

  describe('<%= name %>.service', function () {

    beforeEach(module("<%= module %>"));

    beforeEach (function () {
      inject(function($rootScope, $service){
        scope = $rootScope.$new();
        service = $service('<%= _.capitalize(name) %>Service', {
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