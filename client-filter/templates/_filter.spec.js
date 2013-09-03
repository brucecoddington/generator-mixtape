(function() {
  'use strict';

  var expect = chai.expect;
  var filter, scope;

  describe('<%= moduleName %>.filters', function () {

    beforeEach(module('<%= moduleName %>.filters'));

    beforeEach (function () {
      inject(function($rootScope, $filter){
        scope = $rootScope.$new();
        filter = $filter('<%= name %>', {
          $scope: scope
        }); 
      });
    });

    it('should be a passing spec', function () {
      expect(true).to.be.ok;
    });
  });
});