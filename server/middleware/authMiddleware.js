const jwt=require('jsonwebtoken');
const authMiddleware=async(req,res,next)=>{
    try {
    const token=jwt.verify()
    } catch (error) {
        
    }
}
module.exports=authMiddleware;