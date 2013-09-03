'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var pathUtils = require('../helpers/path-utils.js');

var ClientDirectiveGenerator = module.exports = function ClientDirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating the ' + this.name + ' directive and its specs...');
};

util.inherits(ClientDirectiveGenerator, yeoman.generators.NamedBase);

ClientDirectiveGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'moduleName',
    message: 'What module will this directive be namespaced to?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;

    cb();
  }.bind(this));
};

ClientDirectiveGenerator.prototype.directories = function directories() {
  var moduleName = this.moduleName;
  var moduleDirs = this.moduleDirs = pathUtils.moduleDirectory(moduleName);
  var e2eDirs = this.e2eDirs = pathUtils.scenarioDirectory(moduleName);
  var unitDirs = this.unitDirs = pathUtils.unitDirectory(moduleName);
  var templateDirs = this.templateDirs = pathUtils.templateDirectory(moduleName);

  this.mkdir(moduleDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  this.mkdir(templateDirs);

  console.log('Created the needed directories.');
};

ClientDirectiveGenerator.prototype.files = function files() {
  var name = this.name;

  var e2eSpec = pathUtils.scenarioFile(this.e2eDirs, name);
  this.template('_directive.e2e.spec.js', e2eSpec);

  var unitSpec = pathUtils.specFile(this.unitDirs, name);
  this.template('_directive.spec.js', unitSpec);

  var directive = pathUtils.moduleFile(this.moduleDirs, name);
  this.template('_directive.js', directive);
  
  var template = pathUtils.templateFile(this.templateDirs, name);
  this.template('_directive.template.html', template);
};
