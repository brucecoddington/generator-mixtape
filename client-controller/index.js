'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ClientControllerGenerator = module.exports = function ClientControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating the ' + this.name + ' controller and its specs...');
};

util.inherits(ClientControllerGenerator, yeoman.generators.NamedBase);

ClientControllerGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'moduleName',
    message: 'What module with this controller be namespaced to?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;

    cb();
  }.bind(this));
};

ClientControllerGenerator.prototype.directories = function directories() {
  var controllerDirs = this.controllerDirs = this._.flatten(['client/src', this.moduleName]).join('/');
  var e2eDirs = this.e2eDirs = this._.flatten(['client/test/e2e/', this.moduleName]).join('/');
  var unitDirs = this.unitDirs = this._.flatten(['client/test/unit/', this.moduleName]).join('/');

  this.mkdir(controllerDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);

  console.log('Created the needed directories.');
}

ClientControllerGenerator.prototype.files = function files() {
  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), this.name, '.e2e.spec.js'].join('');
  this.template('_controller.e2e.spec.js', e2eSpecPathAndName);
  console.log('End to end specification created.');

  var unitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), this.name, '.spec.js'].join('');
  this.template('_controller.spec.js', unitSpecPathAndName);
  console.log('Unit spec created.');

  var controllerPathAndName = [addTrailingSlash(this, this.controllerDirs), this.name, '.controller.js'].join('');
  this.template('_controller.js', controllerPathAndName);
  console.log('Controller created.');
};