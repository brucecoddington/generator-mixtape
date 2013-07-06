'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ClientControllerGenerator = module.exports = function ClientControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ClientControllerGenerator, yeoman.generators.NamedBase);

ClientControllerGenerator.prototype.setVariables = function setVariables() {
    // name is "foo/bar/truck"

    if (this._.include(this.name, '/')) {
        var lower = this.name.toLowerCase();
        var parsed = this._.words(lower, "/");
        this.name = this._.last(parsed);
        this.path = this._.initial(parsed);
    }
}

ClientControllerGenerator.prototype.directories = function directories() {
  var controllerDirs = this.controllerDirs = this._.flatten(['client/app/controllers', this.path]).join('/');
  var e2eDirs = this.e2eDirs = this._.flatten(['client/specs/e2e/app/controllers', this.path]).join('/');
  var unitDirs = this.unitDirs = this._.flatten(['client/specs/unit/app/controllers', this.path]).join('/');

  this.mkdir(controllerDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
}

ClientControllerGenerator.prototype.module = function module() {
  var modulePath = this._.flatten(['controllers', this.path]).join('/');

  this.module = [addTrailingSlash(this, modulePath), this.name, '.controller'].join('');
}

ClientControllerGenerator.prototype.files = function files() {
  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), this.name, '.e2e.spec.js'].join('');
  this.template('_controller.e2e.spec.js', e2eSpecPathAndName);

  var unitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), this.name, '.spec.js'].join('');
  this.template('_controller.spec.js', unitSpecPathAndName);

  var controllerPathAndName = [addTrailingSlash(this, this.controllerDirs), this.name, '.controller.js'].join('');
  this.template('_controller.js', controllerPathAndName);
};
