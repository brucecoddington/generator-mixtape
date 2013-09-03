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

module.exports = {
  addTrailingSlash: addTrailingSlash,
  pathAndName: pathAndName,
  directoryPath: directoryPath,
  patherize: patherize
};