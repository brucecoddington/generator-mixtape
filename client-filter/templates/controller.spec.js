define(function(require) {
    'use strict';

    var expect = require('chai').expect;
    var angular = require('angular');
    var mocks = require('ngMocks');

    require('ngStrap');

    var app, controller, scope;

    describe('{{specName}}.controller', function () {

        beforeEach (function () {
            app = angular.module("app", []);
            require('{{controllerUrl}}')();
            angular.mock.module('app');

            inject(function($rootScope, $controller){
                scope = $rootScope.$new();
                controller = $controller('{{controllerName}}', {
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