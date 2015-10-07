var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
    
});


io.on('connection', function (socket) {
       
    socket.on('chat message', function (from,msg)
    {
        io.emit('chat message', from,msg);
    });

    socket.on('notifyUser', function (user) {
        io.emit('notifyUser', user);
    });
    socket.on('welcome', function (from) {
        io.emit('welcome', from);
    });

    socket.on('disconnect', function (msg1)
    {
        console.log(msg1 + ' logged out');  // logged out  
    });

});

    http.listen(3000, function(){
        console.log('listening on *:3000');
    });