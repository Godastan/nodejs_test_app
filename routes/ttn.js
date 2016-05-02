var express = require('express');
var Organization = require('../models/organization');
var router = express.Router();

router.get('/', function(req, res, next) {
    Organization.find({}, (err, orgs) => {
        if (err){
            throw err
        }
        res.render('ttn/main', {
            title: 'TTN Manager',
            ttns: orgs
        });
    });
});

module.exports = router;
