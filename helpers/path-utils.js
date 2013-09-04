'use strict';
var _ = require('lodash');
_.str = require('underscore.string');

var addTrailingSlash = function addTrailingSlash(path) {
  if (!_.str.endsWith(path, '/')) {
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

var directoryPath = function directoryPath(rootPath, dPath) {
  return _.flatten([rootPath, dPath]).join('/');
};

var moduleDirectory = function moduleDirectory(dPath) {
  return directoryPath('client/src', dPath);
};

var scenarioDirectory = function scenarioDirectory(dPath) {
  return directoryPath('client/test/e2e', dPath);
};

var unitDirectory = function unitDirectory(dPath) {
  return directoryPath('client/test/unit', dPath);
};

var templateDirectory = function templateDirectory(dPath) {
  return directoryPath('client/assets/templates', dPath);
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