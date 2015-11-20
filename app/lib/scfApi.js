var request = require('request');
var promise = require('promise');

var SCFApi = function(config) {
  return {
    getPlacesIn: function(city) {
      return new Promise(function(resolve, reject) {
        try {
          var url = config.apiUrl + 'places?address=' + encodeURIComponent(city);
          var options = {
            method: 'GET',
            url: url
          };
          request(options, function(err, res, data) {
            if (err) reject(err);
            if (res.statusCode !== 200) reject(new Error(res.body));
            else data = JSON.parse(data);
            resolve(data);
          });
        } catch (apiErr) {
          reject(apiErr);
        }
      });
    },
    getPlaceDetails: function(place) {
      return new Promise(function(resolve, reject) {
        try {
          var url = config.apiUrl + 'places/' + encodeURIComponent(place);
          var options = {
            method: 'GET',
            url: url
          };
          request(options, function(err, res, data) {
            if (err) reject(err);
            if (res.statusCode !== 200) reject(new Error(res.body));
            else data = JSON.parse(data);
            resolve(data);
          });
        } catch (apiErr) {
          reject(apiErr);
        }
      });
    }
  }
};

module.exports = SCFApi;