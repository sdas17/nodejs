import userModule from "../models/userModule.js";

export const registerController = async(req,res,next) => { 
    
    try {
        const {name,email,password,location}=req.body

        if (!name) {
            next('name is require')
        }
        if (!email) {
            next('email is require')
        }
        if (!password) {
            next('password is require greater 6 char')
        }
        const exitinguser=await userModule.findOne({email});
        if (exitinguser) {
          next('email')
        }
        const exitinguser1=await userModule.create({name,email,password,location});

        if (exitinguser1) {
            return res.status(200).send({
                succes:false,
                message:'user Created Register please Login'
            });
        }

    } catch (error) {
        // console.log(error);
        // res.status(400).send({
        //     message:'Error in Register Controller',
        //     succes:false,
        //     error
        // })
        next(error);
    }
};


