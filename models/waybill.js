var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    seller: Seller
});

var Product = mongoose.model('Ttn', productSchema);

module.exports = Product;
