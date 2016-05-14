var express = require('express');
var router = express.Router();

var Organization = require('../models/organization');
var Product = require('../models/product');
var Price = require('../models/price');
var Seller = require('../models/seller');
var Waybill = require('../models/waybill');

router.get('/organization', (req, res, next) => {
    Organization.find({}, (err, organizations) => {
        if (err){
            throw err
        }
        res.render('main/organization', {
            title: 'Organization',
            organizations: organizations
        });
    });
});

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

router.get('/price', (req, res, next) => {
    Price.find({}, (err, prices) => {
        if (err){
            throw err
        }
        res.render('main/price', {
            title: 'Price',
            prices: prices
        });
    });
});

router.get('/seller', (req, res, next) => {
    Seller.find({}, (err, sellers) => {
        if (err){
            throw err
        }
        res.render('main/seller', {
            title: 'Seller',
            sellers: sellers
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
