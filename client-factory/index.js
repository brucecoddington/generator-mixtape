'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var prompter = require('../helpers/modules/prompter.js');
var directories = require('../helpers/modules/directories.js');
var tmpls = require('../helpers/modules/files.js');

var ClientFactoryGenerator = module.exports = function ClientFactoryGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-factory subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientFactoryGenerator, yeoman.generators.NamedBase);

ClientFactoryGenerator.prototype.askFor = function askFor() {
  prompter.apply(this);
};

ClientFactoryGenerator.prototype.files = function files() {
  directories.apply(this);
  tmpls.apply(this, 'factory', this.name, 'factories');
};