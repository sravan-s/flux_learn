/*
Socket
 */
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

io.set('origins', '*:*');
server.listen(3001, function() {
    console.log("Socket server @ 3001");
});

module.exports = io;
