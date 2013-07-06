/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('client service generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }
      done();
    }.bind(this));
  });

  it('creates expected files with a path included in the name argument', function (done) {
    this.service = helpers.createGenerator('mixtape:client-service', [
      '../../client-service'
    ], ['with/a/path/test']);

    var expected = [
      // add files you expect to exist here.
      'client/app/services/with/a/path/test.service.js',
      'client/specs/e2e/app/services/with/a/path/test.e2e.spec.js',
      'client/specs/unit/app/services/with/a/path/test.spec.js'
    ];

    this.service.options['skip-install'] = true;
    this.service.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files without a path included in the name argument', function (done) {
    this.service = helpers.createGenerator('mixtape:client-service', [
      '../../client-service'
    ], ['test']);

    var expected = [
      // add files you expect to exist here.
      'client/app/services/test.service.js',
      'client/specs/e2e/app/services/test.e2e.spec.js',
      'client/specs/unit/app/services/test.spec.js'
    ];

    this.service.options['skip-install'] = true;
    this.service.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });  
});
