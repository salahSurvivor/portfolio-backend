const portfolio = require('../models/portfolio');

exports.createPortfolio =  async(req, res) => {
    try{
        const portF = await portfolio.create(req.body);
        res.status(200).json(portF);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.readPortfolio = async(req, res) => {
    try{
        const portF = await portfolio.find({});
        res.status(200).json(portF);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.updatePortfolio = async(req, res) => {
    try{
        const {id} = req.params;
        const portF = await portfolio.findByIdAndUpdate(id, req.body);
        res.status(200).json(portF);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.deletePortfolio = async(req, res) => {
    try{
        const {id} = req.params;
        const portF = await portfolio.findByIdAndRemove(id, req.body);
        res.status(200).json(portF);
    }
    catch(err){
        res.status(500).json(err.message);
    } 
}

exports.upload = (req, res) => {
    res.status(200).json({ message: 'Files uploaded successfully' });
};
