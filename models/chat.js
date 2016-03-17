var db = require('./config');

module.exports = db.model('Chat', {
    user: String,
    text: String,
    date: {
        type: Date,
        default: Date.now
    }
});
