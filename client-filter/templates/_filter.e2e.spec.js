(function () {
  'use strict';

  describe('<%= moduleName %>.filters', function () {

    beforeEach (function () {
      browser().navigateTo("/");
      sleep(0.5);
    });

    it('be a passing spec', function () {
      expect(true).to.be.ok;
    });
  });

}());