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

MixtapeGenerator.prototype.app = function app() {
  var cb = this.async();

  // generate server application dirs
  this.mkdir('app');
  this.mkdir('app/controllers');
  this.template('app/controllers/_application_controller.js', 'app/controllers/application_controller.js');

  this.mkdir('app/models');
  this.mkdir('app/services');
  
  this.mkdir('app/views');
  this.mkdir('app/views/application');
  this.template('app/views/application/_index.jade', 'app/views/application/index.jade');
  
  this.mkdir('app/views/templates');
  
  cb();
};

MixtapeGenerator.prototype.projectfiles = function projectfiles() {
  var cb = this.async();
  
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_bowerrc', '.bowerrc');
  this.template('_gitignore', '.gitignore');
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_karma.unit.config.js', 'karma.unit.config.js');
  this.template('_karma.e2e.config.js', 'karma.e2e.config.js');
  this.template('_karma.ci.unit.config.js', 'karma.ci.unit.config.js');
  this.template('_karma.ci.e2e.config.js', 'karma.ci.e2e.config.js');
  this.template('_nodemonignore', '.nodemonignore');
  this.template('_readme.md', 'readme.md');
  this.copy('server.js', 'server.js');  
  
  cb();
};

MixtapeGenerator.prototype.configGen = function configGen() {
  var cb = this.async();
  
  this.mkdir('config');
  this.template('config/_properties.js', 'config/properties.js');
  this.copy('config/routes.js', 'config/routes.js');

  this.directory('config/bootstrap', 'config/bootstrap');

  this.mkdir('config/environments');
  this.template('config/environments/_all.js', 'config/environments/all.js');
  this.template('config/environments/_debug.js', 'config/environments/debug.js');
  this.template('config/environments/_development.js', 'config/environments/development.js');
  this.template('config/environments/_production.js', 'config/environments/production.js');

  this.directory('config/initializers', 'config/intitializers');

  cb();
};

MixtapeGenerator.prototype.gruntTasks = function gruntTasks() {
  var cb = this.async();
  
  this.directory('grunt_tasks', 'grunt_tasks');  
  
  cb();
};

MixtapeGenerator.prototype.serverSpecs = function serverSpecs() {
  var cb = this.async();
  
  this.directory('test', 'test');  
  
  cb();
};

MixtapeGenerator.prototype.client = function client() {
  var cb = this.async();
  
  // generate client application dirs
  this.mkdir('client');

  this.mkdir('client/src');
  this.template('client/src/_main.js', 'client/src/main.js');

  this.mkdir('client/src/filters');
  this.mkdir('client/src/services');
  this.mkdir('client/dist');  

  // Add the Tests
  this.directory('client/test', 'client/test');
  
  cb();
};

MixtapeGenerator.prototype.appModule = function appModule() {
  var cb = this.async();

  this.mkdir('client/src/app');
  this.template('client/src/app/_app.js', 'client/src/app/app.js');
  this.template('client/src/app/_controllers.js', 'client/src/app/controllers.js');
  this.template('client/src/app/_directives.js', 'client/src/app/directives.js');

  cb();
}

MixtapeGenerator.prototype.assets = function assets() {
  var cb = this.async();
  
  // client assets directories
  this.mkdir('client/assets');
  this.mkdir('client/assets/css');
  this.mkdir('client/assets/font');
  this.directory('client/assets/img', 'client/assets/img');
  this.directory('client/assets/templates', 'client/assets/templates');
  this.directory('client/assets/js', 'client/assets/js'); 
  this.directory('client/assets/less', 'client/assets/less');

  cb(); 
};