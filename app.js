var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var cors = require('cors');
var bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.options('*', cors());
var users = {};


port = process.env.PORT || 8080


server.listen(port, function() {
    console.log('server is listening on port %s', port)
});

app.post('/adduser', function(req, res){

})

app.get('/', function(req, res){
    res.send('you are on the right path');
});


io.on('connection', function(socket){
    console.log('a new connection has been created');

    socket.on('new user', function(data){
        if (data in users){
            socket.emit('user creation failed');
        }else {
            socket.myName = data;
            users[socket.myName] = socket;
            socket.emit('user created', {users: Object.keys(users)});
        }
        
    });
});