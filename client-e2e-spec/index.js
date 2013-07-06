'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ClientE2eSpecGenerator = module.exports = function ClientE2eSpecGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating an end to end spec :  ' + this.name + '.');
};

util.inherits(ClientE2eSpecGenerator, yeoman.generators.NamedBase);

ClientE2eSpecGenerator.prototype.setVariables = function setVariables() {
    if (this._.include(this.name, '/')) {
        var lower = this.name.toLowerCase();
        var parsed = this._.words(lower, "/");
        this.name = this._.last(parsed);
        this.path = this._.initial(parsed);
    }
}

ClientE2eSpecGenerator.prototype.directories = function directories() {
  var e2eDirs = this.e2eDirs = this._.flatten(['client/specs/e2e', this.path]).join('/');

  this.mkdir(e2eDirs);
  
  console.log('Created the needed directories.');
}

ClientE2eSpecGenerator.prototype.files = function files() {
  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), this.name, '.e2e.spec.js'].join('');
  this.template('_e2e.spec.js', e2eSpecPathAndName);
  console.log('End to end specification created.');
};
