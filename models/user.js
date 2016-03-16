var db = require('./config');

module.exports = db.model('User', {
    uname: String,
    pwd: String,
    uid: {
        type: String,
        default: timestamp
    },
    joined: {
        type: Date,
        default: Date.now
    }
});
