module.exports = (function () {

  var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('underscore');

  // schema definition
  var {{lowerCaseName}}Schema = new Schema ({
    // Add model fields here
  });

  // Static functions
  userSchema.statics.someMethod = function (email, cb) {
    this.findOne({ email: email}, cb);
  };

  return mongoose.model('{{upperCaseName}}', userSchema);

}());