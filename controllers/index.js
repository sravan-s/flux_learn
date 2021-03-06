var express = require('express'),
    router = express.Router(),
    uuid = require('node-uuid'),
    User = require('../models/user'),
    Chat = require('../models/chat'),
    config = require('../models/config'),
    cookieParser = require('cookie-parser'),
    io = require('../socket');
    jwt = require('jsonwebtoken');

router.use(cookieParser());

/**
 Page routing
 */
router.get('/:var(login)?', function (req, res) {
    res.render('login', {});
});
router.get('/signup', function (req, res) {
    res.render('signup', {});
});
router.get('/chat', function (req, res) {
    res.render('chat', {});
});

/**
    REST API
 */
router.post('/addUser', function (req, res) {
    req.body.uid = uuid.v4();
    var currentUser = new User(req.body);
    try {
        User.findOne({uname: req.body.uname}, function(err, data) {
            if(!!data) {
                res.send({
                    success: false,
                    message: "User Already exist"
                });
            } else {
                currentUser.save(function(err) {
                    if(err) {
                        res.send({
                            success: false,
                            message: "Couldn't add user"
                        });
                    } else {
                        res.send({
                            success: true
                        });
                    }
                });
            }
        });
    } catch (err) {
        console.log('catch');
        console.log(err);
        res.send({
            success: false,
            message: "Db Exception"
        });
    }
});
router.post('/auth', function (req, res) {
    var uinfo = {
        uname: req.body.uname,
        pwd: req.body.pwd
    };
    try {
        User.findOne(uinfo, function (err, resp) {
            if(!resp) {
                resp = {
                    length: -1
                };
            }
            if (err || resp.length == -1) {
                res.send({
                    success: false,
                    message: "Cannot login, please verify your username and password"
                })
            } else {
                var session = {
                    uid: resp.uid,
                    time: new Date(),
                    user: resp.uname
                },
                token = jwt.sign(JSON.stringify(session), config.secretKey, {
                    expiresIn: 36000
                });
                res.send({
                    success: true,
                    token: token
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false
        });
    }
});
router.post('/addChat', function(req, res) {
    jwt.verify(req.cookies.token, config.secretKey, function(err, result) {
        var chatObj = {
            user: result.user,
            text: req.body.text,
        }
        var newChat = new Chat(chatObj);
        newChat.save(function (err) {
            if (err) {
                res.send({
                    success: false
                });
            } else {
                res.send({
                    success: true
                });
                Chat
                    .find()
                    .sort('-date')
                    .limit(1)
                    .exec(function(err, post) {
                        if(!err) {
                            io.emit('newMsg', {
                                success: true,
                                data: {
                                    user: post[0].user,
                                    date: post[0].date,
                                    text: post[0].text
                                }
                            });
                        }
                    });
            }
        });
    });
});
router.get('/getChat', function(req, res) {
    var chats = new Chat();
    Chat
        .find()
        .sort('-date')
        .limit(10)
        .exec(function(err, posts) {
            var temp = {},
                p = [];
            posts.forEach( function(post) {
                p.push({
                    user: post.user,
                    date: post.date,
                    text: post.text
                });
            });
            if(err) {
                res.send({
                    success: false
                });
            } else {
                res.send({
                    success: true,
                    data: p.reverse()
                });
            }
        });
    
});

module.exports = router;
