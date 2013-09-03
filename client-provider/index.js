'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var pathUtils = require('../helpers/path-utils.js');

var ClientProviderGenerator = module.exports = function ClientProviderGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-provider subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientProviderGenerator, yeoman.generators.NamedBase);

ClientProviderGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'moduleName',
    message: 'What module will this controller be namespaced to?'
  },
  {
    name: 'directoryPath',
    message: 'What directory will contain this decorator?',
    default: ''
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;
    this.directoryPath = props.directoryPath;

    cb();
  }.bind(this));
};

ClientProviderGenerator.prototype.directories = function directories() {
  var directoryPath = this.directoryPath;
  var moduleDirs = this.moduleDirs = pathUtils.moduleDirectory(directoryPath);
  var e2eDirs = this.e2eDirs = pathUtils.scenarioDirectory(directoryPath);
  var unitDirs = this.unitDirs = pathUtils.unitDirectory(directoryPath);
  
  this.mkdir(moduleDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  
  console.log('Created the needed directories.');
};

ClientProviderGenerator.prototype.files = function files() {
  var name = this.name;

  this.template('_provider.e2e.spec.js', pathUtils.scenarioFile(this.e2eDirs, name));
  this.template('_provider.spec.js', pathUtils.specFile(this.unitDirs, name));
  this.template('_provider.js', pathUtils.moduleFile(this.moduleDirs, name));
};