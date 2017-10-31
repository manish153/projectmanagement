const JWT = require('jsonwebtoken');
var userModel = require('../models/usersmodel');
const {JWT_SECRET} = require('../configurations/index');


signToken = user => {
    return JWT.sign({
        iss: 'project_management',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() +1)   
        },JWT_SECRET);
} 

module.exports = {
    index: (req,res,next) => {
        res.send('This is the index of users');
    },
    
    createUser: async (req,res,next) =>{
        const newUser = new userModel(req.body);   
        await newUser.save();
        const token = signToken(newUser);
        res.status(200).json({token});
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