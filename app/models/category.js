const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {type: String},
});

const category = mongoose.model('categorys', categorySchema);
module.exports = category;