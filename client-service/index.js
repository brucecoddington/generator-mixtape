'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var pathUtils = require('../helpers/path-utils.js');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += '/';
  }

  return path;
};

var ClientServiceGenerator = module.exports = function ClientServiceGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating the  ' + this.name + ' service and its specs.');
};

util.inherits(ClientServiceGenerator, yeoman.generators.NamedBase);

ClientServiceGenerator.prototype.askFor = function askFor() {
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

ClientServiceGenerator.prototype.directories = function directories() {
  var directoryPath = this.directoryPath;
  var moduleDirs = this.moduleDirs = pathUtils.moduleDirectory(directoryPath);
  var e2eDirs = this.e2eDirs = pathUtils.scenarioDirectory(directoryPath);
  var unitDirs = this.unitDirs = pathUtils.unitDirectory(directoryPath);
  
  this.mkdir(moduleDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  
  console.log('Created the needed directories.');
};

ClientServiceGenerator.prototype.files = function files() {
  var name = this.name;

  this.template('_provider.e2e.spec.js', pathUtils.scenarioFile(this.e2eDirs, name));
  this.template('_provider.spec.js', pathUtils.specFile(this.unitDirs, name));
  this.template('_provider.js', pathUtils.moduleFile(this.moduleDirs, name));
};
