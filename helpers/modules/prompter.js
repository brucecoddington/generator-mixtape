'use strict';

module.exports = function (type) {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [];

  if (typeof this.env.options.moduleName === 'undefined') {
    prompts.push({name: 'moduleName', message: 'What module will the ' + type + ' be namespaced to?'});
  }
  else {
    this.moduleName = this.env.options.moduleName;
  }

  if (typeof this.env.options.directoryPath === 'undefined') {
    prompts.push({name: 'directoryPath', message: 'Which directory will contain the ' + type + '?', default: ''});
  }
  else {
    this.directoryPath = this.env.options.moduleName;
  }

  if (prompts.length > 0) {
    this.prompt(prompts, function (props) {
      this.moduleName = this.moduleName || props.moduleName;
      this.directoryPath = this.directoryPath || props.directoryPath;

      cb();
    }.bind(this));
  }
};