var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var {{upperCaseName}}Controller= new Controller();

{{upperCaseName}}Controller.index = function() {
  this.render();
}

module.exports = CONTROLLER_NAME;