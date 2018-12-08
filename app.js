var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


port = process.env.PORT || 8080


server.listen(port, function() {
    console.log('server is listening on port %s', port)
});

app.get('/', function(req, res){
    res.send('you are on the right path');
});


io.on('connection', function(socket){
    console.log('a new connection has been created');
});