const joi = require('joi');

module.exports = {
    validateParam: (schema, name) =>{
        return(req,res,next) => {
           console.log('req.params', req.params)
           const result = joi.validate( {param: req['params'][name]},schema);
           if(result.error){
              return res.status(400).json(result.error);
           }else{
            if(!req.value)
             req.value={};
            if(!req.value['params'])
             req.value['params'] = {}     
             
          req.value['params'][name] = result.value.param;   
        next();
           }
        }
    },

    validateBody: (schema) =>{
       return(req,res,next) => {
           const result = joi.validate(req.body,schema)

           if(result.error){
             return res.status(400).json(result.error);
           } else{
               if(!req.value)
               req.value={};

               if(!req.value['body'])
               req.value['body'] = {};

            req.value['body'] = result.value;
            next();   
           }
       }
    },    

     schemas: {          
    //   userSchema: joi.object().keys({
    //     username: joi.string().required(),
    //     password: joi.string().required(),  
    //     userEmail: joi.string().required(),
    //     userFirstName: joi.string().required()
    //   }),  

      idSchema: joi.object().keys({
      param: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
     })
    }
}




