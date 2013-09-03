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

var directoryPath = function directoryPath(rootPath, directoryPath) {
  return _.flatten([rootPath, directoryPath]).join('/');
};

var moduleDirectory = function moduleDirectory(directoryPath) {
  return directoryPath('client/src', directoryPath);
};

var scenarioDirectory = function scenarioDirectory(directoryPath) {
  return directoryPath('client/test/e2e', directoryPath);
};

var unitDirectory = function unitDirectory(directoryPath) {
  return directoryPath('client/test/unit', directoryPath);
};

var templateDirectory = function templateDirectory(directoryPath) {
  return directoryPath('client/assets/templates', directoryPath);
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