var db = require('./config');

module.exports = db.model('User', {
    uname: String,
    pwd: String,
    uid: {
        type: String,
        default: (new Date()).getTime()
    },
    joined: {
        type: Date,
        default: Date.now
    }
});
