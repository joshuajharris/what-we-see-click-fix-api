var restify = require('restify');
var config = require('../config');

var Bootstrap = function() {
  this.init = function() {
    var server = restify.createServer();
    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    var HomeController = require('./controllers/homeController.js');

    var homeController = new HomeController(server, config);
    homeController.initRoutes();

    return server;
  };

  return this;
}

module.exports = Bootstrap;
