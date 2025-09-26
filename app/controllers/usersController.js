const Users = require('../models/usersModel');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.readUsers = async(req, res) => {
    try{        
        const users = await Users.find({});
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err.message);
    }
};

/*************Login************/
exports.login = async(req, res) => {
    const username = req.body.name;
    const password = req.body.password;
    
    const users = await Users.find({});
    
    for(vl of users){
        if(username === vl.name){
            const passwordMatch = await bcrypt.compare(password, vl.password);
            if(passwordMatch){
                // Generate a JWT token
                const token = jwt.sign({id: vl._id, name: username, isAdmin: vl.isAdmin }, 'secret', { expiresIn: '1h' });
                return res.status(200).json({ token });
            }
        }
    };

    return res.status(500).json({ message: 'Invalid credentials' });
};

exports.register = async(req, res) =>{
    try{
        const data = {
            name: req.body.name,
            password: await bcrypt.hash(req.body.password, 10),
            isAdmin: req.body.isAdmin
        }
        
        const isThere = await Users.findOne({name: req.body.name});

        if(isThere)
            return res.status(500).json('Username already exist!!');

        const user = await Users.create(data);
        return res.status(200).json(user);
    }
    catch(err){
        res.status(500).json('please fill all inputs');
    }
};