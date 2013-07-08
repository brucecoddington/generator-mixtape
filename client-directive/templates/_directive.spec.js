define(function(require) {
    'use strict';

    var expect = require('chai').expect;
    var angular = require('angular');
    var mocks = require('ngMocks');

    require('ngStrap');

    var app, directive, scope;

    describe('<%= name %>.directive', function () {

          // load the templates
        beforeEach(module('<%= template %>'));

        beforeEach(inject(function($rootScope, $compile) {
            // we might move this tpl into an html file as well...
            elm = angular.element(
                '<div>' +
                'mock your dom here' +
                '</div>');

            scope = $rootScope;
            $compile(elm)(scope);
            scope.$digest();
        }));

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