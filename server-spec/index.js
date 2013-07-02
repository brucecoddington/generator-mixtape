'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ServerSpecGenerator = module.exports = function ServerSpecGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the serverSpec subgenerator with the argument ' + this.name + '.');
};

util.inherits(ServerSpecGenerator, yeoman.generators.NamedBase);

ServerSpecGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
