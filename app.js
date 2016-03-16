var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


var server   = require('http').createServer(app);
var io       = require('socket.io')(server);
server.listen(3001, function() {
    console.log("server @ 3001");
});
io.on('connection', function(socket) {
    console.log('skada');
});

app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(require('./middlewares'));
app.use(require('./controllers'));
app.use("/assets", express.static(__dirname + '/assets'));

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
