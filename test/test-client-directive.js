/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('client directive generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }
      done();
    }.bind(this));
  });

  it('creates expected files with a path included in the name argument', function (done) {
    this.directive = helpers.createGenerator('mixtape:client-directive', [
      '../../client-directive'
    ], ['with/a/path/test']);

    var expected = [
      // add files you expect to exist here.
      'client/app/directives/with/a/path/test.directive.js',
      'client/specs/e2e/app/directives/with/a/path/test.e2e.spec.js',
      'client/specs/unit/app/directives/with/a/path/test.spec.js'
    ];

    this.directive.options['skip-install'] = true;
    this.directive.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files without a path included in the name argument', function (done) {
    this.directive = helpers.createGenerator('mixtape:client-directive', [
      '../../client-directive'
    ], ['test']);

    var expected = [
      // add files you expect to exist here.
      'client/app/directives/test.directive.js',
      'client/specs/e2e/app/directives/test.e2e.spec.js',
      'client/specs/unit/app/directives/test.spec.js'
    ];

    this.directive.options['skip-install'] = true;
    this.directive.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });  
});
