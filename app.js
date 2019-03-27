var express = require('express');
var app = express();
// var http = require('http').Server(app);
var io = require('socket.io')(); //(http)

const port = process.env.PORT || 3000;

//tell express where our static files are (js, images, css, etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

io.attach(server);

//socket.io chat app stuff to follow
io.on('connection', function(socket){
    console.log('a user has connected', socket);

    socket.on('disconnect', function(){
        console.log('a user has disconnected');
    });
})