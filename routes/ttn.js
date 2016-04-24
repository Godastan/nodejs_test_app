var express = require('express');
var Ttn = require('../models/ttn');
var router = express.Router();

router.get('/', function(req, res, next) {
    Ttn.find({}, (err, ttns) => {
        if (err){
            throw err
        }
        res.render('ttn/main', {
            title: 'TTN Manager',
            ttns: ttns
        });
    });
});

module.exports = router;
