var request = require('request');
var promise = require('promise');

var DataApi = function(config) {
  return {
    getResponse: function() {
      return new Promise(function(resolve, reject) {
        try {
          var url = config.apiUrl + 'Virginia+Beach+VA';
          var options = {
            method: 'GET',
            url: url
          };
          request(options, function(err, res, data) {
            if (err) reject(err);
            if (res.statusCode !== 200) {
              reject(new Error(res.body));
            } else {
              data = JSON.parse(data);
            }
            resolve(data);
          });
        } catch (apiErr) {
          reject(apiErr);
        }
      });
    }
  }
}

module.exports = DataApi;
