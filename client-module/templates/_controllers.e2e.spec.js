(function () {
  'use strict';
  var expect = chai.expect;

  describe('<%= name %>.controllers', function () {

    beforeEach (function () {
      browser().navigateTo("/");
      sleep(0.5);
    });

    describe('<%= _.capitalize(name) %>Controller', function () {

      it('be a passing spec', function () {
        expect(true).to.be.ok;
      });
    });
  });
}());
