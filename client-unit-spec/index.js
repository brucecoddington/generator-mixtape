'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientUnitSpecGenerator = module.exports = function ClientUnitSpecGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientUnitSpec subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientUnitSpecGenerator, yeoman.generators.NamedBase);

ClientUnitSpecGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
