var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var waybillProductSchema = new Schema({
    product: Schema.Types.ObjectId,
    quantity: Number,
    price: Number,
    VAT: Number,
    markup_1: Number,
    markup_2: Number
});

var waybillSchema = new Schema({
    number: String,
    date: Date,
    organization: String,
    products: [waybillProductSchema]
});

var Waybill = mongoose.model('Waybill', waybillSchema);

module.exports = Waybill;
