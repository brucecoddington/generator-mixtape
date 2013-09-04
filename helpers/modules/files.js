'use strict';
var pathUtils = require('../path-utils.js');

module.exports = function (type, name, plural) {
  var tmpl = function (ext) {
    return ['_', type, ext].join('');
  };

  plural = plural || type + 's';

  this.template(tmpl('.e2e.spec.js'), pathUtils.scenarioFile(this.e2eDirs, plural));
  this.template(tmpl('.spec.js'), pathUtils.specFile(this.unitDirs, plural));
  this.template(tmpl('.js'), pathUtils.moduleFile(this.moduleDirs, plural));
  this.template('_module.js', pathUtils.moduleFile(this.moduleDirs, name));
  
  if (this.needTemplate) {
    this.template(tmpl('.html'), pathUtils.templateFile(this.templateDirs, name));
  }
};