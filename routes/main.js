var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Waybill = require('../models/waybill');

router.get('/product', (req, res, next) => {
    Product.find({}, (err, products) => {
        if (err){
            throw err
        }
        res.render('main/product', {
            title: 'Product',
            products: products
        });
    });
});

router.get('/waybill', (req, res, next) => {
    Waybill.find({}, (err, waybills) => {
        if (err){
            throw err
        }
        res.render('main/waybill', {
            title: 'Waybill',
            waybills: waybills
        });
    });
});

module.exports = router;
