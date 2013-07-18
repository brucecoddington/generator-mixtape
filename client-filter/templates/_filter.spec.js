(function() {
    'use strict';

    var expect = chai.expect;
    var filter, scope;

    describe('filters.<%= name %>', function () {

        beforeEach(module('filters.<%= name %>'));

        beforeEach (function () {
            inject(function($rootScope, $filter){
                scope = $rootScope.$new();
                filter = $filter('<%= name %>', {
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