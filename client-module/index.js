'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var pathUtils = require('../helpers/path-utils.js');

var ClientModuleGenerator = module.exports = function ClientModuleGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientModule subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientModuleGenerator, yeoman.generators.NamedBase);

ClientModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'directoryPath',
    message: 'What directory will contain this decorator?',
    default: ''
  }];

  this.prompt(prompts, function (props) {
    this.directoryPath = props.directoryPath;

    cb();
  }.bind(this));
};

ClientModuleGenerator.prototype.directories = function directories() {
  var directoryPath = this.directoryPath;
  var moduleDirs = this.moduleDirs = pathUtils.moduleDirectory(directoryPath);
  var e2eDirs = this.e2eDirs = pathUtils.scenarioDirectory(directoryPath);
  var unitDirs = this.unitDirs = pathUtils.unitDirectory(directoryPath);
  var templateDirs = this.templateDirs = pathUtils.templateDirectory(directoryPath);

  this.mkdir(moduleDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  this.mkdir(templateDirs);

  console.log('Created the needed directories.');
};

ClientModuleGenerator.prototype.files = function files() {
  this.template('_directives.e2e.spec.js', pathUtils.pathAndName(this.e2eDirs, 'directives.e2e.spec.js'));
  this.template('_directives.spec.js', pathUtils.pathAndName(this.unitDirs, 'directives.spec.js'));
  this.template('_directives.js', pathUtils.pathAndName(this.moduleDirs, 'directives.js'));
  this.template('_directive.tmpl.html', pathUtils.pathAndName(this.templateDirs, 'sampleDirective.html'));
  this.template('_controllers.e2e.spec.js', pathUtils.pathAndName(this.e2eDirs, 'controllers.e2e.spec.js'));
  this.template('_controllers.spec.js', pathUtils.pathAndName(this.unitDirs, 'controllers.spec.js'));
  this.template('_controllers.js', pathUtils.pathAndName(this.moduleDirs, 'controllers.js'));
  this.template('_theModule.js', pathUtils.pathAndName(this.moduleDirs, this.name, '.js'));
  this.template('_theModule.html', pathUtils.pathAndName(this.templateDirs, 'index.html'));
};