'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ClientServiceGenerator = module.exports = function ClientServiceGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating the  ' + this.name + ' service and its specs.');
};

util.inherits(ClientServiceGenerator, yeoman.generators.NamedBase);

ClientServiceGenerator.prototype.setVariables = function setVariables() {
    if (this._.include(this.name, '/')) {
        var lower = this.name.toLowerCase();
        var parsed = this._.words(lower, "/");
        this.name = this._.last(parsed);
        this.path = this._.initial(parsed);
    }
}

ClientServiceGenerator.prototype.directories = function directories() {
  var serviceDirs = this.serviceDirs = this._.flatten(['client/app/services', this.path]).join('/');
  var e2eDirs = this.e2eDirs = this._.flatten(['client/specs/e2e/app/services', this.path]).join('/');
  var unitDirs = this.unitDirs = this._.flatten(['client/specs/unit/app/services', this.path]).join('/');

  this.mkdir(serviceDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);

  console.log('Created the needed directories.');
}

ClientServiceGenerator.prototype.module = function module() {
  var modulePath = this._.flatten(['services', this.path]).join('/');

  this.module = [addTrailingSlash(this, modulePath), this.name, '.service'].join('');

  console.log('RequireJS module name compiled.');
}

ClientServiceGenerator.prototype.files = function files() {
  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), this.name, '.e2e.spec.js'].join('');
  this.template('_service.e2e.spec.js', e2eSpecPathAndName);
  console.log('End to end specification created.');

  var unitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), this.name, '.spec.js'].join('');
  this.template('_service.spec.js', unitSpecPathAndName);
  console.log('Unit spec created.');

  var servicePathAndName = [addTrailingSlash(this, this.serviceDirs), this.name, '.service.js'].join('');
  this.template('_service.js', servicePathAndName);
  console.log('Service created.');
};
