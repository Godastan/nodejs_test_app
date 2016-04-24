var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ttnSchema = new Schema({
    title: String,
    price: Number,
    quantity: Number,
    vat: Number
});

var Ttn = mongoose.model('Ttn', ttnSchema);

module.exports = Ttn;
