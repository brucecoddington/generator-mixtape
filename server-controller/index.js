'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ServerControllerGenerator = module.exports = function ServerControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating a Locomotive controller and a Mocha spec for you named: ' + this.name + '.');
};

util.inherits(ServerControllerGenerator, yeoman.generators.NamedBase);

ServerControllerGenerator.prototype.setVariables = function setVariables() {
  if (this._.include(this.name, '/')) {
    var lower = this.name.toLowerCase();
    var parsed = this._.words(lower, "/");
    this.name = this._.last(parsed);
    this.path = this._.initial(parsed);
  }
}

ServerControllerGenerator.prototype.directories = function directories() {
  var controllerDirs = this.controllerDirs = this._.flatten(['app/controllers', this.path]).join('/');
  var specDirs = this.specDirs = this._.flatten(['test/app/controllers', this.path]).join('/');

  this.mkdir(controllerDirs);
  this.mkdir(specDirs);

  console.log('Created the needed directories.');
}

ServerControllerGenerator.prototype.files = function files() {
  var specPathAndName = [addTrailingSlash(this, this.specDirs), this.name, '_controller.spec.js'].join('');
  this.template('_spec.js', specPathAndName);
  console.log('Mocha spec created.');

  var controllerPathAndName = [addTrailingSlash(this, this.controllerDirs), this.name, '.js'].join('');
  this.template('_controller.js', controllerPathAndName);
  console.log('Locomotive Controller created.');
};
