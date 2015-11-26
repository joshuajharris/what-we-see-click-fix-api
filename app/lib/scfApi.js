var request = require('request');
var promise = require('promise');

function getResponse(url) {
  return new Promise(function(resolve, reject) {
    try {
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

var SCFApi = function(config) {
  return {
    getIssuesIn: function(city) {
      return getResponse(config.apiUrl + 'issues?place_url=' + encodeURIComponent(city));
    },
    getPlacesIn: function(city) {
      return getResponse(config.apiUrl + 'places?address=' + encodeURIComponent(city));
    },
    getPlaceDetails: function(place) {
      return getResponse(config.apiUrl + 'places/' + encodeURIComponent(place));
    }
  }
};

module.exports = SCFApi;
