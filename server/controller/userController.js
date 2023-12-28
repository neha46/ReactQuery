const User=require('../model/userModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

// resgister user
const userCtrl=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(user){
            throw new Error("user already exists")
        }
        // hashed the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt)
        req.body.password=hashedPassword;

        // creatye  new user
        const NewUser=new User(req.body)
        await NewUser.save();
        res.send({
            success:true,
            message:"NewUser register successfully",
            data:NewUser
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message,
        })
    }
}

// login user
const userLoginCtrl=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            throw  new Error("user does not exists")
        }
        //  password validation
        const validPassword=await bcrypt.compare(req.body.password,user.password)
        if(!validPassword){
            throw new Error("password is not valid")
        }
        // generate token
        const token=jwt.sign({userId:user._id},process.env.TOKEN_SECRET_KEY)
        res.send({
            success:true,
            message:"user logged in successsfully",
            data:token
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message,
        })
    }
}

// get-user

const getUserCtrl=async(req,res)=>{
    try {
        const user=await User.findById(req.body.userId)
            res.send({
                success:true,
                data:user,
                message:"user fetched successfully"
            })
        
    } catch (error) {
        res.send({
            success:false,
            message:error.message,
        })
    }
}
module.exports={
    userCtrl,
    userLoginCtrl,
    getUserCtrl
}