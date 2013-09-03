'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var pathUtils = require('../helpers/path-utils.js');

var ClientFilterGenerator = module.exports = function ClientFilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating the filter: ' + this.name + '.');
};

util.inherits(ClientFilterGenerator, yeoman.generators.NamedBase);

ClientFilterGenerator.prototype.askFor = function askFor() {
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

ClientFilterGenerator.prototype.setVariables = function setVariables() {
  if (this._.include(this.name, '/')) {
    var lower = this.name.toLowerCase();
    var parsed = this._.words(lower, '/');
    this.name = this._.last(parsed);
    this.path = this._.initial(parsed);
  }
};

ClientFilterGenerator.prototype.directories = function directories() {
  var directoryPath = this.directoryPath;
  var moduleDirs = this.moduleDirs = pathUtils.moduleDirectory(directoryPath);
  var e2eDirs = this.e2eDirs = pathUtils.scenarioDirectory(directoryPath);
  var unitDirs = this.unitDirs = pathUtils.unitDirectory(directoryPath);
  
  this.mkdir(moduleDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  
  console.log('Created the needed directories.');
};

ClientFilterGenerator.prototype.files = function files() {
  var name = this.name;

  this.template('_filter.e2e.spec.js', pathUtils.scenarioFile(this.e2eDirs, name));
  this.template('_filter.spec.js', pathUtils.specFile(this.unitDirs, name));
  this.template('_filter.js', pathUtils.moduleFile(this.moduleDirs, name));
};
