'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ClientDirectiveGenerator = module.exports = function ClientDirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating the ' + this.name + ' directive and its specs...');
};

util.inherits(ClientDirectiveGenerator, yeoman.generators.NamedBase);

ClientDirectiveGenerator.prototype.setVariables = function setVariables() {
    if (this._.include(this.name, '/')) {
        var lower = this.name.toLowerCase();
        var parsed = this._.words(lower, "/");
        this.name = this._.last(parsed);
        this.path = this._.initial(parsed);
    }
}

ClientDirectiveGenerator.prototype.directories = function directories() {
  var directiveDirs = this.directiveDirs = this._.flatten(['client/app/directives', this.path]).join('/');
  var e2eDirs = this.e2eDirs = this._.flatten(['client/specs/e2e/app/directives', this.path]).join('/');
  var unitDirs = this.unitDirs = this._.flatten(['client/specs/unit/app/directives', this.path]).join('/');

  this.mkdir(directiveDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);

  console.log('Created the needed directories.');
}

ClientDirectiveGenerator.prototype.module = function module() {
  var modulePath = this._.flatten(['directives', this.path]).join('/');

  this.module = [addTrailingSlash(this, modulePath), this.name, '.directive'].join('');

  console.log('RequireJS module name compiled.');
}

ClientDirectiveGenerator.prototype.files = function files() {
  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), this.name, '.e2e.spec.js'].join('');
  this.template('_directive.e2e.spec.js', e2eSpecPathAndName);
  console.log('End to end specification created.');

  var unitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), this.name, '.spec.js'].join('');
  this.template('_directive.spec.js', unitSpecPathAndName);
  console.log('Unit spec created.');

  var directivePathAndName = [addTrailingSlash(this, this.directiveDirs), this.name, '.directive.js'].join('');
  this.template('_directive.js', directivePathAndName);
  console.log('Directive created.');
};
