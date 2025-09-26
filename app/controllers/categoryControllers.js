const Category= require('../models/category');

exports.createCategory = async(req, res) => {
    try{
        await Category.create(req.body);
        res.status(200).json('Added With Success!!');
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.readCategory = async(req, res) => {
    try{
        const category = await Category.find({});
        res.status(200).json(category);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}