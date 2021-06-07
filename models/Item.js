const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const ItemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    // supplierID:{
    //     type: Schema.Types.ObjectId,
    //     required: true
    // },

    // categoryID:{
    //     type: Schema.Types.ObjectId,
    //     required: true
    // },

    dateAdded:{
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('items', ItemSchema);