(function (){
    'use strict';

    var expect = chai.expect;

    describe('_.capitalize(moduleName)', function() {
     
        describe('Directives', function() {

            describe('<%= _.capitalize(name) %>', function () {

                var appDirectives, scope, elm;

                beforeEach(function () {
                    angular.mock.module('<%= moduleName %>.directives');
                });

                beforeEach(module( 'assets/templates/<%= moduleName %>/<%= name %>.html'));
                
                beforeEach(function () {
                    
                    inject(function($rootScope, $compile){
                        scope = $rootScope.$new();

                        elm = angular.element(
                            '<div class="container">' + 
                                '<div <%= _.slugify(name) %>>This is a test</div>' +
                            '</div>');

                        $compile(elm)(scope);
                        scope.$digest();
                    });
                });

                it('should replace the text with the template', function() {
                    var container = elm.find('div');

                    expect(container.text()).to.equal('This is a test.');
                });

            });

        });
    });
}());