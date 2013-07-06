define(function(require) {
    'use strict';

    var expect = require('chai').expect;
    var angular = require('angular');
    var mocks = require('ngMocks');

    require('ngStrap');

    var app, directive, scope;

    describe('<%= name %>.directive', function () {

        beforeEach (function () {
            app = angular.module("app", []);
            require('<%= module %>')();
            angular.mock.module('app');

            inject(function($rootScope, $directive){
                scope = $rootScope.$new();
                directive = $directive('<%= _.capitalize(name) %>Directive', {
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