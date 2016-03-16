var mongoose = require('mongoose');
var url = 'mongodb://localhost/reactChat';

mongoose.connect(url, function () {
    console.log('mongodb connected');
});

module.exports = mongoose;
