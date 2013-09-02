'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var MixtapeGenerator = module.exports = function MixtapeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install']
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MixtapeGenerator, yeoman.generators.Base);

MixtapeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'prototypeName',
    message: 'What is the name of this prototype?'
  }];

  this.prompt(prompts, function (props) {
    this.prototypeName = props.prototypeName;

    cb();
  }.bind(this));
};

MixtapeGenerator.prototype.projectfiles = function projectfiles() {
  var cb = this.async();
  
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_bowerrc', '.bowerrc');
  this.template('_gitignore', '.gitignore');
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.template('_karma.unit.config.js', 'karma.unit.config.js');
  this.template('_karma.e2e.config.js', 'karma.e2e.config.js');
  this.template('_karma.ci.unit.config.js', 'karma.ci.unit.config.js');
  this.template('_karma.ci.e2e.config.js', 'karma.ci.e2e.config.js');
  this.template('_nodemonignore', '.nodemonignore');
  this.template('_readme.md', 'README.md');
  this.copy('server.js', 'server.js');
  
  cb();
};

MixtapeGenerator.prototype.app = function app() {
  var cb = this.async();

  // generate server application dirs
  this.directory('app', 'app');
  this.directory('data', 'data');
  this.directory('test', 'test');
  
  cb();
};

MixtapeGenerator.prototype.client = function client() {
  var cb = this.async();
  
  // generate client application dirs
  this.directory('client', 'client');
  
  cb();
};

MixtapeGenerator.prototype.configGen = function configGen() {
  var cb = this.async();
  
  this.mkdir('config');
  this.template('config/_properties.js', 'config/properties.js');
  this.copy('config/routes.js', 'config/routes.js');

  this.directory('config/cert', 'config/cert');
  this.directory('config/environments', 'config/environments');
  this.directory('config/initializers', 'config/intitializers');

  cb();
};