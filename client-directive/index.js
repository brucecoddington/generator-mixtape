'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var prompter = require('../helpers/modules/prompter.js');
var directories = require('../helpers/modules/directories.js');
var tmpls = require('../helpers/modules/files.js');

var ClientDirectiveGenerator = module.exports = function ClientDirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-directive subgenerator with the argument ' + this.name + '.');
  this.needTemplate = true;
};

util.inherits(ClientDirectiveGenerator, yeoman.generators.NamedBase);

ClientDirectiveGenerator.prototype.askFor = function askFor() {
  prompter.apply(this);
};

ClientDirectiveGenerator.prototype.files = function files() {
  directories.apply(this);
  tmpls.apply(this, 'directive', this.name);
};