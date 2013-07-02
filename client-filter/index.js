'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientFilterGenerator = module.exports = function ClientFilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientFilter subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientFilterGenerator, yeoman.generators.NamedBase);

ClientFilterGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
