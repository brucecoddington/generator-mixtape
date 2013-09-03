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
  }, {
    name: 'hasController',
    message: 'Will this directive be needing a controller?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;
    this.hasController = props.hasController;

    cb();
  }.bind(this));
};

ClientDirectiveGenerator.prototype.directories = function directories() {
  var directiveDirs = this.directiveDirs = this._.flatten(['client/src', this.moduleName]).join('/');
  var e2eDirs = this.e2eDirs = this._.flatten(['client/test/e2e', this.moduleName]).join('/');
  var unitDirs = this.unitDirs = this._.flatten(['client/test/unit', this.moduleName]).join('/');
  var templateDirs = this.templateDirs = this._.flatten(['client/assets/templates', this.moduleName]).join('/');

  this.mkdir(directiveDirs);
  this.mkdir(e2eDirs);
  this.mkdir(unitDirs);
  this.mkdir(templateDirs);

  console.log('Created the needed directories.');
}

ClientDirectiveGenerator.prototype.files = function files() {
  var e2eSpecPathAndName = [addTrailingSlash(this, this.e2eDirs), this.name, '.e2e.spec.js'].join('');
  this.template('_directive.e2e.spec.js', e2eSpecPathAndName);
  console.log('End to end specification created.');

  var unitSpecPathAndName = [addTrailingSlash(this, this.unitDirs), this.name, '.spec.js'].join('');
  this.template('_directive.spec.js', unitSpecPathAndName);
  console.log('Unit spec created.');

  var directivePathAndName = [addTrailingSlash(this, this.directiveDirs), this.name, '.directive.js'].join('');
  
  if (this.hasController.toLowerCase() === 'yes') {
    this.template('_directive.controller.js', directivePathAndName); 
  }
  else {
    this.template('_directive.link.js', directivePathAndName);
  }

  console.log('Directive created.');

  var templatePathAndName = [addTrailingSlash(this, this.templateDirs), this.name, '.html'].join('');
  this.template('_directive.template.html', templatePathAndName);
  console.log('Directive template created.');

  console.log('Do not forget to register your new directive within index.html and your Grunt build!!');
};
