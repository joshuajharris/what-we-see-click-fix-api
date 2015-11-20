var Bootstrap = require('./app/Bootstrap');

var app = new Bootstrap('dev');

var server = app.init();

server.listen(8080, function(){
  console.log('Server has started on port 8080');
});
