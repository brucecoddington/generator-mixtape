define(function(require) {
    'use strict';

    var expect = require('chai').expect;
    var angular = require('angular');
    var mocks = require('ngMocks');

    require('ngStrap');

    var app, filter, scope;

    describe('<%= specName %>.filter', function () {

        beforeEach (function () {
            app = angular.module("app", []);
            require('<%= module %>')();
            angular.mock.module('app');

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