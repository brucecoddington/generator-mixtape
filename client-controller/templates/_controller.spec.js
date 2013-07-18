(function () {
  'use strict';

  var expect = chai.expect;
  var controller, scope;

  describe('<%= moduleName %>.controllers', function() {
        
    beforeEach(module('<%= moduleName %>.controllers'));

    describe('<%= _.capitalize(name) %>Controller', function () {

      beforeEach(function (){
        inject(function($rootScope, $controller){
          scope = $rootScope.$new();
          controller = $controller('<%= _.capitalize(name) %>Controller', {
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
  });
}());