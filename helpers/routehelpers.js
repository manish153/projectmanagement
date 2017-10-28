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

    schemas: {       
      idSchema: joi.object().keys({
      param: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
     })
    }
}




