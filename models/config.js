var mongoose = require('mongoose');
var url = 'mongodb://localhost/reactChat';

mongoose.connect(url, function () {
    console.log('mongodb connected');
});

mongoose.secretKey = "essess";

module.exports = mongoose;
