'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientServiceGenerator = module.exports = function ClientServiceGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientService subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientServiceGenerator, yeoman.generators.NamedBase);

ClientServiceGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
