(function () {
  'use strict';

  var expect = chai.expect;
  var controller, scope;

  describe('App', function() {
   
      describe('Controllers', function() {
          
          beforeEach(module('app.controllers'));

          describe('ControllerName', function() {
              it('should have the home controller in the app.controllers module',
                inject(function($rootScope, $controller) {
                    var scope = $rootScope.$new(),
                        controller = $controller("HomeController", {$scope: scope });
                    expect(controller).to.be.ok;
              }));
          });
      });
  });
}());
