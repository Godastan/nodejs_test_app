var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    seller_id: Schema.Types.ObjectId
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
