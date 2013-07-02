'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientE2eSpecGenerator = module.exports = function ClientE2eSpecGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientE2eSpec subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientE2eSpecGenerator, yeoman.generators.NamedBase);

ClientE2eSpecGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
