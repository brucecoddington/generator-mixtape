(function () {
  'use strict';
  var expect = chai.expect;

  describe('<%= moduleName %>.decorators', function () {

    beforeEach (function () {
      browser().navigateTo("/");
      sleep(0.5);
    });

    it('be a passing spec', function () {
      expect(true).to.be.ok;
    });
  });

}());