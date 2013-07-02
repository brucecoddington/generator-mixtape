'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ServerControllerGenerator = module.exports = function ServerControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the serverController subgenerator with the argument ' + this.name + '.');
};

util.inherits(ServerControllerGenerator, yeoman.generators.NamedBase);

ServerControllerGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
