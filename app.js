var express = require('express'),
    app = express();

app.set('view engine', 'jade');

app.use(require('./middlewares'));
app.use(require('./controllers'));
app.use("/assets", express.static(__dirname + '/assets'));

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
