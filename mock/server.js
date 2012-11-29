var http = require('http');
var qs = require('querystring');

var host = 'localhost';
var port = 1337;

var server = http.createServer(function (req, res) {
  var body = "";
  res.writeHead(200, {
    'Content-Type': req.headers['content-type']
  });
  req.on('data', function(chunk){
    body += chunk;
  });
  req.on('end', function(){
    res.end(makeSendData(body));
  });
});

server.listen(port, host);

server.on('request', function(req, res){
  console.log(req.url + ' "' + req.headers['user-agent'] + '"');
});

function makeSendData(data) {
  var json = qs.parse(data);
  console.log(json.pass);
  
  var storeData = {};
  if (json.pass == 'abc') {
    storeData.url = "http://localhost:1337/";
    storeData.groupId = "aaa";
    storeData.storeId = "bbb";
    storeData.authCode = "ccc";
  } else {
    storeData.url = "http://google.com/";
    storeData.groupId = "google";
    storeData.storeId = "google";
    storeData.authCode = "google";
  }

  return JSON.stringify(storeData);
}

console.log('Server running at http://' + host + ':' + port + '/');
