'use strict';
var _ = require('lodash');

var addTrailingSlash = function addTrailingSlash(path) {
  if (!_.endsWith(path, '/')) {
    path += '/';
  }
  return path;
};

var patherize = function patherize(moduleName) {
  return moduleName.replace(/\./g, '/');
};

var pathAndName = function pathAndName(rootPath, name, suffix) {
  return [addTrailingSlash(rootPath), name, suffix].join('');
};

var directoryPath = function directoryPath(rootPath, moduleName) {
  return _.flatten([rootPath, patherize(moduleName)]).join('/');
};

var moduleDirectory = function moduleDirectory(moduleName) {
  return directoryPath('client/src', moduleName);
};

var scenarioDirectory = function scenarioDirectory(moduleName) {
  return directoryPath('client/test/e2e', moduleName);
};

var unitDirectory = function unitDirectory(moduleName) {
  return directoryPath('client/test/unit', moduleName);
};

var templateDirectory = function templateDirectory(moduleName) {
  return directoryPath('client/assets/templates', moduleName);
};

var moduleFile = function moduleFile(directory, name) {
  return pathAndName(directory, name, '.js');
};

var specFile = function specFile(directory, name) {
  return pathAndName(directory, name, '.spec.js');
};

var scenarioFile = function scenarioFile(directory, name) {
  return pathAndName(directory, name, '.e2e.spec.js');
};

var templateFile = function templateFile(directory, name) {
  return pathAndName(directory, name, '.html');
};

module.exports = {
  addTrailingSlash: addTrailingSlash,
  pathAndName: pathAndName,
  directoryPath: directoryPath,
  patherize: patherize,
  moduleDirectory: moduleDirectory,
  scenarioDirectory: scenarioDirectory,
  unitDirectory: unitDirectory,
  templateDirectory: templateDirectory,
  moduleFile: moduleFile,
  specFile: specFile,
  scenarioFile: scenarioFile,
  templateFile: templateFile
};