var SCFApi = require('../lib/scfApi');

var HomeController = function(server, config) {
  var scfApi = new SCFApi(config);
  return {
    initRoutes: function() {
      server.get('/map/issues/:city', function(req, res, next) {
          // do stuff
      });

      server.get('/issues/:city', function(req, res, next) {
        scfApi.getIssuesIn(req.params.city).then(function(data){
          res.send(data);
        });
        next();
      });

      server.get('/places/:city', function(req, res, next) {
        scfApi.getPlacesIn(req.params.city).then(function(data){
          res.send(data);
        });
        next();
      });

      server.get('/place/:place', function(req, res, next) {
        scfApi.getPlaceDetails(req.params.place).then(function(data){
          res.send(data);
        });
        next();
      });
    }
  }
}

module.exports = HomeController;
