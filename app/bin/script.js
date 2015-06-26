var fs = require('fs');
var col;

fs.readFile("norfolk.geojson", 'utf-8', function(err, data){
  if(err) console.error(err);
  //col = JSON.parse(data).issues;
/*
  //console.log((geo)); 
  for(var i = 0; i < col.length; i++){
    console.log(JSON.stringify(col[i]));
  }*/
});
