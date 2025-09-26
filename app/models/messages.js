const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    subject: {type: String},
    message: {type: String},
});

const msg = mongoose.model('messages', messageSchema);
module.exports = msg;