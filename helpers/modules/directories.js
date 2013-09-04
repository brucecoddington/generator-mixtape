'use strict';
var pathUtils = require('../path-utils.js');

module.exports = function () {
  var directoryPath = this.directoryPath;

  var moduleDirs = this.moduleDirs = pathUtils.moduleDirectory(directoryPath);
  this.mkdir(moduleDirs);
  
  var e2eDirs = this.e2eDirs = pathUtils.scenarioDirectory(directoryPath);
  this.mkdir(e2eDirs);
  
  var unitDirs = this.unitDirs = pathUtils.unitDirectory(directoryPath);
  this.mkdir(unitDirs);
  
  if (this.needTemplate) {
    var templateDirs = this.templateDirs = pathUtils.templateDirectory(directoryPath);
    this.mkdir(templateDirs);
  }
};