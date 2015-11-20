var restify = require('restify');
var config = require('../config');

var Bootstrap = function(env) {
  this.init = function() {
    // var config = new AppConfig(env);

    var server = restify.createServer();

    server.get('/', function(req, res, next) {
      res.send('Hello World');
      next();
    });

    return server;
  }

  return this;
}

module.exports = Bootstrap;
