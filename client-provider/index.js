'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var prompter = require('../helpers/modules/prompter.js');
var directories = require('../helpers/modules/directories.js');
var tmpls = require('../helpers/modules/files.js');

var ClientProviderGenerator = module.exports = function ClientProviderGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-provider subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientProviderGenerator, yeoman.generators.NamedBase);

ClientProviderGenerator.prototype.askFor = function askFor() {
  prompter.apply(this);
};

ClientProviderGenerator.prototype.files = function files() {
  directories.apply(this);
  tmpls.apply(this, 'provider', this.name);
};