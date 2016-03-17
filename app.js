 /*
Express Js
  */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    io = require('./socket');

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
