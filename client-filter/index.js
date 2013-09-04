'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var prompter = require('../helpers/modules/prompter.js');
var directories = require('../helpers/modules/directories.js');
var tmpls = require('../helpers/modules/files.js');

var ClientFilterGenerator = module.exports = function ClientFilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-filter subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientFilterGenerator, yeoman.generators.NamedBase);

ClientFilterGenerator.prototype.askFor = function askFor() {
  prompter.apply(this);
};

ClientFilterGenerator.prototype.files = function files() {
  directories.apply(this);
  tmpls.apply(this, 'filter', this.name);
};