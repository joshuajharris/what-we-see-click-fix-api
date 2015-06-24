var restify = require('restify'),
    fs = require('fs');

// load controllers

var server = restify.createServer();

server
  .use(restify.fullResponse())
  .use(restify.bodyParser())

server.get('/', function(req, res, next) {
  res.send("hello world");
});

var port = process.env.PORT || 3000;
server.listen(port, function(err) {
  if(err) {
    console.error(err);
  } else {
    console.log("Server listening on port 3000");
  }
});
