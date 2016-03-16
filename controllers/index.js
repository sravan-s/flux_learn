var express = require('express'),
    router = express.Router(),
    uuid = require('node-uuid'),
    User = require('../models/user');

router.get('/:var(login)?', function (req, res) {
    res.render('login', {});
});
router.get('/signup', function (req, res) {
    res.render('signup', {});
});
router.get('/chat', function (req, res) {
    res.render('chat', {});
});

router.post('/addUser', function (req, res) {
    req.body.uid = uuid.v4();
    var currentUser = new User(req.body);
    try {
        currentUser.save(function (err) {
            if (err) {
                res.send({
                    success: false
                });
            } else {
                res.send({
                    success: true
                });
            }
        });
    } catch(err){
        console.log(err);
        res.send({
            success: false
        });
    }
});
router.post('/auth', function (req, res) {
    var uinfo = {
        uname: req.body.uname,
        pwd: req.body.pwd
    };
    try {
        User.findOne(uinfo, function(err, resp) {
            if(err) {
                res.send({
                    success: false
                })
            } else {
                
                res.send({
                    session: res.session,
                    success: true
                });
            }
        });
    } catch(err){
        console.log(err);
        res.send({
            success: false
        });
    }
});

module.exports = router;
