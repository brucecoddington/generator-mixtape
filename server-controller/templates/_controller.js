var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var <%= name %>Controller= new Controller();

<%= name %>Controller.index = function() {
  this.render();
}

module.exports = <%= name %>Controller;