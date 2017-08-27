const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

console.log(__dirname + '/../public');
console.log(publicPath);

var app = express();
app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New User connected');
    
    socket.on('disconnect', () => {
        console.log('Disconnected from the client');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});