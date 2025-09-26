const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
    name: {type: String}
})

const cv = mongoose.model('cv', cvSchema);
module.exports = cv;