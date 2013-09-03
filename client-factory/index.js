'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var pathUtils = require('../helpers/path-utils.js');

var ClientFactoryGenerator = module.exports = function ClientFactoryGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the client-factory subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientFactoryGenerator, yeoman.generators.NamedBase);

ClientFactoryGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'moduleName',
    message: 'What module will this factory be namespaced to?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;

    cb();
  }.bind(this));
};

ClientFactoryGenerator.prototype.directories = function directories() {
  var moduleName = this.moduleName;
  var moduleDirs = this.moduleDirs = pathUtils.moduleDirectory(moduleName);
  var e2eDirs = this.e2eDirs = pathUtils.scenarioDirectory(moduleName);
  var unitDirs = this.unitDirs = pathUtils.unitDirectory(moduleName);
  
  this.mkdir(moduleDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  
  console.log('Created the needed directories.');
};

ClientFactoryGenerator.prototype.files = function files() {
  var name = this.name;

  var e2eSpec = pathUtils.scenarioFile(this.e2eDirs, name);
  this.template('_factory.e2e.spec.js', e2eSpec);

  var unitSpec = pathUtils.specFile(this.unitDirs, name);
  this.template('_factory.spec.js', unitSpec);

  var decorator = pathUtils.moduleFile(this.moduleDirs, name);
  this.template('_factory.js', decorator);
};
