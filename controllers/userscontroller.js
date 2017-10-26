var userModel = require('../models/usersmodel');

module.exports = {
    index: (req,res,next) => {
        res.send('This is the index of users');
    },
    
    createUser: async (req,res,next) =>{
        var newUser = new userModel(req.body);   
        var user = await newUser.save();
        res.status(201).json(user);
    }
};