var express = require('express'),
    router = express.Router();

router.get('/:var(login)?', function (req, res) {    
    res.render('login', {
    });
});
router.get('/signup', function (req, res) {    
    res.render('signup', {
    });
});
router.get('/chat', function (req, res) {    
    res.render('chat', {
    });
});

module.exports = router;
