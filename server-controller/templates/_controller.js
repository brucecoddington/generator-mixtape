var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var <%= _.capitalize(name) %>Controller= new Controller();

<%= _.capitalize(name) %>Controller.index = function() {
  this.render();
}

module.exports = <%= _.capitalize(name) %>Controller;