/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('client controller generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }
      done();
    }.bind(this));
  });

  it('creates expected files with a path included in the name argument', function (done) {
    this.clientController = helpers.createGenerator('mixtape:client-controller', [
      '../../client-controller'
    ], ['with/a/path/test']);

    var expected = [
      // add files you expect to exist here.
      'client/app/controllers/with/a/path/test.controller.js',
      'client/specs/e2e/app/controllers/with/a/path/test.e2e.spec.js',
      'client/specs/unit/app/controllers/with/a/path/test.spec.js'
    ];

    this.clientController.options['skip-install'] = true;
    this.clientController.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files without a path included in the name argument', function (done) {
    this.clientController = helpers.createGenerator('mixtape:client-controller', [
      '../../client-controller'
    ], ['test']);

    var expected = [
      // add files you expect to exist here.
      'client/app/controllers/test.controller.js',
      'client/specs/e2e/app/controllers/test.e2e.spec.js',
      'client/specs/unit/app/controllers/test.spec.js'
    ];

    this.clientController.options['skip-install'] = true;
    this.clientController.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });  
});
