define(function(require) {
    'use strict';

    var expect = require('chai').expect;
    var angular = require('angular');
    var mocks = require('ngMocks');

    require('ngStrap');

    var app, service, scope;

    describe('<%= specName %>.service', function () {

        beforeEach (function () {
            app = angular.module("app", []);
            require('<%= module %>')();
            angular.mock.module('app');

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
});