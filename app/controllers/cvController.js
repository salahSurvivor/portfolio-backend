const Cv = require('../models/cv');

exports.createCv = async(req, res) => {
    try{
        await Cv.create(req.body);
        res.status(200).json('Added With Success!!');
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.readCv = async(req, res) => {
    try{
        const cv = await Cv.find({});
        res.status(200).json(cv);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.updateCv = async(req, res) => {
    try{
        const {id} = req.params;
        await Cv.findByIdAndUpdate(id, req.body);
        res.status(200).json('Updated With Success!!');
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

////////////////Try Function////////////////
exports.tryFunc = async() =>{
    try {
        console.log('work');
        const cv = await Cv.find({});
        return cv; 
    } 
    catch(err){
        logger.log(err.message);
        console.log(err.message);
    }
}

