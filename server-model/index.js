'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ServerModelGenerator = module.exports = function ServerModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating a Locomotive/Mongoose model: ' + this.name + '.');
};

util.inherits(ServerModelGenerator, yeoman.generators.NamedBase);

ServerModelGenerator.prototype.setVariables = function setVariables() {
  if (this._.include(this.name, '/')) {
    var lower = this.name.toLowerCase();
    var parsed = this._.words(lower, "/");
    this.name = this._.last(parsed);
    this.path = this._.initial(parsed);
  }
}

ServerModelGenerator.prototype.directories = function directories() {
  var modelDirs = this.modelDirs = this._.flatten(['app/models', this.path]).join('/');
  var specDirs = this.specDirs = this._.flatten(['test/app/models', this.path]).join('/');

  this.mkdir(modelDirs);
  this.mkdir(specDirs);

  console.log('Created the needed directories.');
}

ServerModelGenerator.prototype.files = function files() {
  var specPathAndName = [addTrailingSlash(this, this.specDirs), this.name, '.spec.js'].join('');
  this.template('_spec.js', specPathAndName);
  console.log('Mocha spec created.');

  var modelPathAndName = [addTrailingSlash(this, this.modelDirs), this.name, '.js'].join('');
  this.template('_model.js', modelPathAndName);
  console.log('Mongoose schema created.');
};