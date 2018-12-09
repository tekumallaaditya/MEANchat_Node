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



port = process.env.PORT || 8080


server.listen(port, function() {
    console.log('server is listening on port %s', port)
});

app.post('/adduser', function(req, res){

})

app.get('/', function(req, res){
    res.send('you are on the right path');
});

var users ={};

io.on('connection', function(socket){
    console.log('a new connection has been created');
    function updateUserList(){
        console.log(Object.keys(users))
        io.sockets.emit('userList', Object.keys(users));
    }

    socket.on('new user', function(data){
        
        if (users[data.chatName]){
            console.log('user not created-->' + data.chatName + 'users area-->>' + users)
            socket.emit('user creation failed', {user: data.chatName, msg: 'user name already exists'});
        }else {
            console.log('new user created'+ data.chatName + 'users area-->>' + users[data.chatName]);
            socket.myName = data.chatName;
            users[socket.myName] = socket;
            io.sockets.emit('user created', {user: data.chatName, msg: 'new user created'});
            updateUserList();
        }

        
        
    });

    socket.on('send message', function(data){
        console.log('received a message from ->' + data.user + 'message is ->' + data.msg);
        io.sockets.emit('chat message', {user: data.user, msg: data.msg});
    });

    socket.on('user left', function(data){
        console.log('user left->' + data.user);
        delete users[data.user];
        updateUserList();
    })

});