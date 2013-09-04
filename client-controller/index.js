'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var prompter = require('../helpers/modules/prompter.js');
var directories = require('../helpers/modules/directories.js');
var tmpls = require('../helpers/modules/files.js');

var ClientControllerGenerator = module.exports = function ClientControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-controller subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientControllerGenerator, yeoman.generators.NamedBase);

ClientControllerGenerator.prototype.askFor = function askFor() {
  prompter.apply(this);
};

ClientControllerGenerator.prototype.files = function files() {
  directories.apply(this);
  tmpls.apply(this, 'controller', this.name);
};