var express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    config = require('../models/config'),
    cookieParser = require('cookie-parser');

router.use(cookieParser());
router.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
    if(req.url == '/chat') {
        if (token) {
            jwt.verify(token, config.secretKey, function (err, decoded) {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    req.decoded = decoded;
                    console.log(decoded);
                    next();
                }
            });

        } else if(req.url == '/chat') {
            res.redirect('/login');
        } else {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
    } else {
        next();
    }
});

module.exports = router;
