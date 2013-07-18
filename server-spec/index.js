'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ServerSpecGenerator = module.exports = function ServerSpecGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the serverSpec subgenerator with the argument ' + this.name + '.');
};

util.inherits(ServerSpecGenerator, yeoman.generators.NamedBase);

ServerSpecGenerator.prototype.setVariables = function setVariables() {
  if (this._.include(this.name, '/')) {
    var lower = this.name.toLowerCase();
    var parsed = this._.words(lower, "/");
    this.name = this._.last(parsed);
    this.path = this._.initial(parsed);
  }
}

ServerSpecGenerator.prototype.directories = function directories() {
  var specDirs = this.specDirs = this._.flatten(['test', this.path]).join('/');
  this.mkdir(specDirs);

  console.log('Created the needed directories.');
}

ServerSpecGenerator.prototype.files = function files() {
  var specPathAndName = [addTrailingSlash(this, this.specDirs), this.name, '.spec.js'].join('');
  this.template('_spec.js', specPathAndName);
  console.log('Mocha spec created.');
};
