'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientModuleGenerator = module.exports = function ClientModuleGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientModule subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientModuleGenerator, yeoman.generators.NamedBase);

ClientModuleGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
