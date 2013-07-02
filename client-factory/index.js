'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientFactoryGenerator = module.exports = function ClientFactoryGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientFactory subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientFactoryGenerator, yeoman.generators.NamedBase);

ClientFactoryGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
