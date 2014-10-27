
var http = require('http');
var chat_server = require('./chat_server');
static = require('node-static');

var file = new static.Server('./public');

var server = http.createServer(function (req, res) {
  req.addListener('end', function () {
    file.serve(req, res);
  }).resume();
});


//
chat_server.createChat(server)

server.listen(8000);

