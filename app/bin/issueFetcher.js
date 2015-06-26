var request = require("request")

function getJSON(url, callback) {
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      callback(body);
    }
  });
}

function getJSONCallback(res) {
//console.log(res.metadata.pagination.next_page_url);
  if(res.metadata.pagination.next_page_url != null) {
    var issues = res.issues;
    for(var i=0; i < issues.length; i++){
      console.log(issues[i]);
    }
    getJSON(res.metadata.pagination.next_page_url, getJSONCallback);
  }
}

getJSON('http://seeclickfix.com/api/v2/issues?place_url=' + process.argv[2].toString() + '&state=VA&per_page=100', getJSONCallback);
