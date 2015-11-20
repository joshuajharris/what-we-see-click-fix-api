var SCFApi = require('../lib/scfApi');

var HomeController = function(server, config) {
  return {
    initRoutes: function() {
      server.get('/places/:city', function(req, res, next) {
        var scfApi = new SCFApi(config);
        scfApi.getPlacesIn(req.params.city).then(function(data){
          res.send(data);
        });
        next();
      });

      server.get('/place/:place', function(req, res, next) {
        var scfApi = new SCFApi(config);
        scfApi.getPlaceDetails(req.params.place).then(function(data){
          res.send(data);
        });
        next();
      });
    }
  }
}

module.exports = HomeController;
