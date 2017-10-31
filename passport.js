const passport = require('passport');
const jwtstrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const {JWT_SECRET} = require('./configurations/index');
const userModel = require('./models/usersmodel');

passport.use(new jwtstrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
},async(payload,done)=>{
    try{
          //find the user specified in the token 
          const user = await userModel.findById(payload.sub)
          //if user doesn't exist, handle it 
          if(!user){
              return done(null,false);
          }
          //otherwise, return the user
          done(null,user)
    } catch(error){
        done(error,false);
    }
}))