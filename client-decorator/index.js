'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var pathUtils = require('../helpers/path-utils.js');

var ClientDecoratorGenerator = module.exports = function ClientDecoratorGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientDecorator subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientDecoratorGenerator, yeoman.generators.NamedBase);

ClientDecoratorGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'moduleName',
    message: 'What module will this controller be namespaced to?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;

    cb();
  }.bind(this));
};

ClientDecoratorGenerator.prototype.directories = function directories() {
  var moduleName = this.moduleName;
  var controllerDirs = this.controllerDirs = pathUtils.directoryPath('client/src', moduleName);
  var e2eDirs = this.e2eDirs = pathUtils.directoryPath('client/test/e2e', moduleName);
  var unitDirs = this.unitDirs = pathUtils.directoryPath('client/test/unit', moduleName);

  this.mkdir(controllerDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);

  console.log('Created the needed directories.');
};

ClientDecoratorGenerator.prototype.files = function files() {
  var name = this.name;

  var e2eSpecPathAndName = pathUtils.pathAndName(this.e2eDirs, name, '.e2e.spec.js');
  this.template('_controller.e2e.spec.js', e2eSpecPathAndName);

  var unitSpecPathAndName = pathUtils.pathAndName(this.unitDirs, name, '.spec.js');
  this.template('_controller.spec.js', unitSpecPathAndName);

  var controllerPathAndName = pathUtils.pathAndName(this.controllerDirs, name, '.controller.js');
  this.template('_controller.js', controllerPathAndName);
};
