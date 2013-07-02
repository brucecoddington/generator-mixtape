'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ServerModelGenerator = module.exports = function ServerModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the serverModel subgenerator with the argument ' + this.name + '.');
};

util.inherits(ServerModelGenerator, yeoman.generators.NamedBase);

ServerModelGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
