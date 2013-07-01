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
  this.template('app/views/templates/_footer.jade', 'app/views/templates/footer.jade');
  this.template('app/views/templates/_header.jade', 'app/views/templates/header.jade');
  this.template('app/views/templates/_underfooter.jade', 'app/views/templates/underfooter.jade');  
  
  cb();
};

MixtapeGenerator.prototype.projectfiles = function projectfiles() {
  var cb = this.async();
  
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_bowerrc', '.bowerrc');
  this.copy('_gitignore', '.gitignore');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_karma.unit.config.js', 'karma.unit.config.js');
  this.copy('_karma.e2e.config.js', 'karma.e2e.config.js');
  this.copy('_nodemonignore', '.nodemonignore');
  this.copy('_readme.md', 'readme.md');
  this.copy('server.js', 'server.js');  
  
  cb();
};

MixtapeGenerator.prototype.configGen = function configGen() {
  var cb = this.async();
  
  this.mkdir('config');
  this.template('config/_properties.js', 'config/properties.js');
  this.copy('config/routes.js', 'config/routes.js');

  this.mkdir('config/bootstrap');
  this.copy('config/bootstrap/socket.js', 'config/bootstrap/socket.js');

  this.mkdir('config/environments');
  this.template('config/environments/_all.js', 'config/environments/all.js');
  this.template('config/environments/_debug.js', 'config/environments/debug.js');
  this.template('config/environments/_development.js', 'config/environments/development.js');
  this.template('config/environments/_production.js', 'config/environments/production.js');
  this.template('config/environments/_test.js', 'config/environments/test.js');

  this.mkdir('config/initializers');
  this.copy('config/initializers/00_mongo.js', 'config/initializers/00_mongo.js');
  this.copy('config/initializers/01_session.js', 'config/initializers/01_session.js');  
  
  cb();
};

MixtapeGenerator.prototype.gruntTasks = function gruntTasks() {
  var cb = this.async();
  
  this.mkdir('grunt_tasks');
  this.copy('grunt_tasks/docco.js', 'grunt_tasks/docco.js');
  this.copy('grunt_tasks/manifest.js', 'grunt_tasks/manifest.js');
  this.copy('grunt_tasks/run-app.js', 'grunt_tasks/run-app.js');  
  
  cb();
};

MixtapeGenerator.prototype.serverSpecs = function serverSpecs() {
  var cb = this.async();
  
  this.mkdir('specs');
  this.copy('specs/sample.js', 'specs/sample.js');  
  
  cb();
};

MixtapeGenerator.prototype.client = function client() {
  var cb = this.async();
  
  // generate client application dirs
  this.mkdir('client');
  this.copy('client/config.js', 'client/config.js');

  this.mkdir('client/app');
  this.template('client/app/_app.js', 'client/app/app.js');
  this.template('client/app/_routes.js', 'client/app/routes.js');

  this.mkdir('client/app/controllers');
  this.template('client/app/controllers/_nav.controller.js', 'client/app/controllers/nav.controller.js');
  this.template('client/app/controllers/_home.controller.js', 'client/app/controllers/home.controller.js');

  this.mkdir('client/app/directives');
  this.mkdir('client/app/filters');
  this.mkdir('client/app/services');

  this.mkdir('client/assets/templates');
  this.mkdir('client/dist');  
  
  cb();
};

MixtapeGenerator.prototype.assets = function assets() {
  var cb = this.async();
  
  // client assets directories
  this.mkdir('client/assets');
  this.mkdir('client/assets/css');
  this.mkdir('client/assets/font');
  this.mkdir('client/assets/img');
  this.copy('client/assets/img/bg.jpg', 'client/assets/img/bg.jpg');
  this.copy('client/assets/img/fancybox_loading.gif', 'client/assets/img/fancybox_loading.gif');
  this.copy('client/assets/img/glyphicons-halflings-white.png', 'client/assets/img/glyphicons-halflings-white.png');
  this.copy('client/assets/img/glyphicons-halflings.png', 'client/assets/img/glyphicons-halflings.png');
  this.copy('client/assets/img/glyphicons-white.png', 'client/assets/img/glyphicons-white.png');
  this.copy('client/assets/img/glyphicons-white.svg', 'client/assets/img/glyphicons-white.svg');
  this.copy('client/assets/img/glyphicons.png', 'client/assets/img/glyphicons.png');
  this.copy('client/assets/img/glyphicons.svg', 'client/assets/img/glyphicons.svg');   
  
  cb(); 
};

MixtapeGenerator.prototype.jadeTemplates = function jadeTemplates() {
  var cb = this.async();
  
  this.mkdir('client/assets/jade');
  this.template('client/assets/jade/_main.jade', 'client/assets/jade/main.jade');

  // samples
  this.mkdir('client/assets/jade/three');
  this.mkdir('client/assets/jade/four');
  this.mkdir('client/assets/jade/home');
  this.template('client/assets/jade/three/_index.jade', 'client/assets/jade/three/index.jade');
  this.template('client/assets/jade/four/_index.jade', 'client/assets/jade/four/index.jade');
  this.template('client/assets/jade/home/_index.jade', 'client/assets/jade/home/index.jade');  
  
  cb();
};

MixtapeGenerator.prototype.clientLibs = function clientLibs() {
  var cb = this.async();
  
  // assets/js directories
  this.mkdir('client/assets/js');
  this.mkdir('client/assets/js/components');
  this.mkdir('client/assets/js/lib');
  this.copy('client/assets/js/lib/angular-mocks-1.1.5.js', 'client/assets/js/lib/angular-mocks-1.1.5.js');    
  
  cb();
};

MixtapeGenerator.prototype.clientLess = function clientLess() {
  var cb = this.async();
  
  // assets less directory
  this.mkdir('client/assets/less');
  this.copy('client/assets/less/bootswatch.less', 'client/assets/less/bootswatch.less');
  this.copy('client/assets/less/custom.less', 'client/assets/less/custom.less');
  this.copy('client/assets/less/gradients.less', 'client/assets/less/gradients.less');
  this.copy('client/assets/less/mixins.less', 'client/assets/less/mixins.less');
  this.copy('client/assets/less/shadows.less', 'client/assets/less/shadows.less');
  this.copy('client/assets/less/style.less', 'client/assets/less/style.less');
  this.copy('client/assets/less/styleIE.less', 'client/assets/less/styleIE.less');
  this.copy('client/assets/less/styleIE9.less', 'client/assets/less/styleIE9.less');
  this.copy('client/assets/less/variables.less', 'client/assets/less/variables.less');  
  
  cb();
};

MixtapeGenerator.prototype.clientSpecs = function clientSpecs() {
  var cb = this.async();
  
  this.mkdir('client/specs');
  this.copy('client/specs/spec-main.js', 'client/specs/spec-main.js');

  this.mkdir('client/specs/e2e');
  this.mkdir('client/specs/e2e/app');
  this.mkdir('client/specs/e2e/app/controllers');
  this.copy('client/specs/e2e/app/controllers/nav.controller.e2e.spec.js', 'client/specs/e2e/app/controllers/nav.controller.e2e.spec.js');

  this.mkdir('client/specs/unit');
  this.mkdir('client/specs/unit/app');
  this.mkdir('client/specs/unit/controllers');
  this.copy('client/specs/unit/app/controllers/nav.controller.spec.js', 'client/specs/unit/app/controllers/nav.controller.spec.js'); 

  cb(); 
};