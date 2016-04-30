var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sellerSchema = new Schema({
    name: String
});

var Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
