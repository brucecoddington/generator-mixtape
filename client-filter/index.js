'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientFilterGenerator = module.exports = function ClientFilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating the filter: ' + this.name + '.');
};

util.inherits(ClientFilterGenerator, yeoman.generators.NamedBase);

ClientFilterGenerator.prototype.setVariables = function setVariables() {
  if (this._.include(this.name, '/')) {
    var lower = this.name.toLowerCase();
    var parsed = this._.words(lower, "/");
    this.name = this._.last(parsed);
    this.path = this._.initial(parsed);
  }
}

ClientFilterGenerator.prototype.directories = function directories() {
  var filterDirs = this.filterDirs = this._.flatten(['client/app/filters', this.path]).join('/');
  var e2eDirs = this.e2eDirs = this._.flatten(['client/specs/e2e/app/filters', this.path]).join('/');
  var unitDirs = this.unitDirs = this._.flatten(['client/specs/unit/app/filters', this.path]).join('/');

  this.mkdir(filterDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);

  console.log('Created the needed directories.');
}

ClientFilterGenerator.prototype.files = function files() {
  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), this.name, '.e2e.spec.js'].join('');
  this.template('_filter.e2e.spec.js', e2eSpecPathAndName);
  console.log('End to end specification created.');

  var unitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), this.name, '.spec.js'].join('');
  this.template('_filter.spec.js', unitSpecPathAndName);
  console.log('Unit spec created.');

  var filterPathAndName = [addTrailingSlash(this, this.filterDirs), this.name, '.filter.js'].join('');
  this.template('_filter.js', filterPathAndName);
  console.log('Filter created.');
};
