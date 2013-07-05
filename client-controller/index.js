'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ClientControllerGenerator = module.exports = function ClientControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ClientControllerGenerator, yeoman.generators.NamedBase);

ClientControllerGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
      {
        name: 'module',
        message: 'What will '
      },
      {
        name: 'specName',
        message: 'What is the name of this prototype?'
      }
  ];

  this.prompt(prompts, function (props) {
    this.prototypeName = props.prototypeName;

    cb();
  }.bind(this));
}

ClientControllerGenerator.prototype.setVariables = function setVariables() {
    // name is "foo/bar/truck"

    if (_.include(this.name, '/')) {
        var parsed = _.words(this.name);
        this.name = 
    }
    else {

    }

    // get the directories as an array

    // get the controller name

    // create the module name 
}

ClientControllerGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
