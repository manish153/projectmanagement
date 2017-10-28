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
    },

    getUser: async(req,res,next) =>{

//       const {userID} = req.value.params;

       //const result = joi.validate(req.params, idSchema);
       //console.log('result -- >',result)
       var {userID} = req.params;
       var user = await userModel.findById(userID);
       console.log('fetched ', user);
       res.status(200).json(user);
    },

    editUser: async(req,res,next) => {
       var {userID} = req.params;
       var newUser = req.body;
       await userModel.findByIdAndUpdate(userID,newUser);
       res.status(200).json({success : true})
    },

    replaceUser: async(req,res,next) => {
       console.log('replace user in user controller');
    }
};