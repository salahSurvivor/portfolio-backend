const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema(
    {
        title: {type: String},
        cover: {type: Array},
        category: {type: String},
        hashtags: {type: Array},
        github: {type: String},
        resume: {type: String},
        description: {type: String},
        images: {type: Array},
    }
)

const portfolio = mongoose.model('portfolio', portfolioSchema);
module.exports = portfolio;