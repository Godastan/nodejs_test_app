var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var priceSchema = new Schema({
    product: Schema.Types.ObjectId,
    price: Number,
    date: Date
});

var Price = mongoose.model('Price', priceSchema);

module.exports = Price;