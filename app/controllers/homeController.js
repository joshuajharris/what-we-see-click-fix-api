var DataApi = require('../lib/dataApi');

var HomeController = function(server, config) {
  return {
      initRoutes: function() {
        server.get('/', function(req, res, next) {
          var dataApi = new DataApi(config);
          dataApi.getResponse().then(function(data){
            res.send(data);
          });
          next();
        });
      }
  }
}

module.exports = HomeController;
