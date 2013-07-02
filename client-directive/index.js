'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientDirectiveGenerator = module.exports = function ClientDirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientDirective subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientDirectiveGenerator, yeoman.generators.NamedBase);

ClientDirectiveGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
