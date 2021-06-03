const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const CategorySchema = new Schema({
    categoryName: {
        type: String,
    },

    dateAdded:{
        type: Date,
        default: Date.now
    }
});

module.exports = Category = mongoose.model('itemCategory', CategorySchema);