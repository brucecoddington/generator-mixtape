'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientProviderGenerator = module.exports = function ClientProviderGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-provider subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientProviderGenerator, yeoman.generators.NamedBase);

ClientProviderGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
