var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizationSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['IP', 'ChTUP']
    }
});

var Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
