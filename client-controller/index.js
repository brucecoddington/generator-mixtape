'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientControllerGenerator = module.exports = function ClientControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientController subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientControllerGenerator, yeoman.generators.NamedBase);

ClientControllerGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
