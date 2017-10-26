var userModel = require('../models/usersmodel');

module.exports = {
    index: (req,res,next) => {
        res.send('This is the index of users');
    },
    
    createUser: async (req,res,next) =>{
        var newUser = new userModel(req.body);   
        var user = await newUser.save();
        res.status(201).json(user);
    },

    getAllUsers: async (req,res,next) =>{
        // var users = new userModel();
        var users = await userModel.find();
        res.status(200).json(users);
    }
};