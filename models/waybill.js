var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var waybillSchema = new Schema({
    organization_id: Schema.Types.ObjectId,
    number: Number,
    date: Date,
    product_id: Schema.Types.ObjectId,
    quantity: Number,
    price: Number,
    VAT: Number
});

var Waybill = mongoose.model('Waybill', waybillSchema);

module.exports = Waybill;
