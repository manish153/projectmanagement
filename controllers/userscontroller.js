module.exports = {
    index: (req,res,next) => {
        res.send('This is the index of users');
    },

    index2: (req,res,next) =>{
        res.status(200).json({
            message: 'This is the REST API of the application'
          });
    }
};