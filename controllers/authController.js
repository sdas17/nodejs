import userModule from "../models/userModule.js";

export const registerController = async(req,res) => { 
    try {
        const {name,email,password}=req.body

        if (!name) {
            return req.status(400).send({succes:false,message:'please provide name'})
        }
        if (!email) {
            return req.status(400).send({succes:false,message:'please provide name'})
        }
        if (!password) {
            return req.status(400).send({succes:false,message:'please provide name'})
        }
        const exitinguser=await userModule.findOne({email});
        if (exitinguser) {
            return res.status(200).send({
                succes:false,
                message:'Email alredy Register please Login'
            });
        }
        const exitinguser1=await userModule.create({name,email,password});
        if (exitinguser1) {
            return res.status(200).send({
                succes:false,
                message:'user Created Register please Login'
            });
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({
            message:'Error in Register Controller',
            succes:false,
            error
        })
    }
};


