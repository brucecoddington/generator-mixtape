'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var addTrailingSlash = function addTrailingSlash(task, path) {
  if (!task._.endsWith(path, '/')) {
    path += "/";
  }

  return path; 
};

var ClientModuleGenerator = module.exports = function ClientModuleGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the clientModule subgenerator with the argument ' + this.name + '.');
};

util.inherits(ClientModuleGenerator, yeoman.generators.NamedBase);

ClientModuleGenerator.prototype.directories = function directories() {
  // create the module directories in the src folder
  var moduleDirs = this.moduleDirs = this._.flatten(['client/src', this.name]).join('/');
  var e2eDirs = this.e2eDirs = this._.flatten(['client/test/e2e', this.name]).join('/');
  var unitDirs = this.unitDirs = this._.flatten(['client/test/unit', this.name]).join('/');
  var templateDirs = this.templateDirs = this._.flatten(['client/assets/templates', this.name]).join('/');

  this.mkdir(moduleDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  this.mkdir(templateDirs);
}

ClientModuleGenerator.prototype.files = function files() {
  var dirE2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), 'directives.e2e.spec.js'].join('');
  this.template('_directives.e2e.spec.js', dirE2eSpecPathAndName);

  var dirUnitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), 'directives.spec.js'].join('');
  this.template('_directives.spec.js', dirUnitSpecPathAndName);

  var directivePathAndName = [addTrailingSlash(this, this.moduleDirs), 'directives.js'].join('');
  this.template('_directives.js', directivePathAndName);

  var templatePathAndName = [addTrailingSlash(this, this.templateDirs), 'sampleDirective.html'].join('');
  this.template('_directive.tmpl.html', templatePathAndName);

  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), 'controllers.e2e.spec.js'].join('');
  this.template('_controllers.e2e.spec.js', e2eSpecPathAndName);

  var unitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), 'controllers.spec.js'].join('');
  this.template('_controllers.spec.js', unitSpecPathAndName);

  var controllerPathAndName = [addTrailingSlash(this, this.moduleDirs), 'controllers.js'].join('');
  this.template('_controllers.js', controllerPathAndName);

  var modulePathAndName = [addTrailingSlash(this, this.moduleDirs), this.name, '.js'].join('');
  this.template('_theModule.js', modulePathAndName);

  var indexPathAndName = [addTrailingSlash(this, this.templateDirs), 'index.html'].join('');
  this.template('_theModules.html', indexPathAndName);
};