const mongoose=require('mongoose')

const mongo_url="mongodb://localhost:27017/task1"
const default_url=process.env.MONGO_URL||mongo_url;

const db=async()=>{
    try {
        await mongoose.connect(default_url);
        console.log("database connect successfully")
    } catch (error) {
        console.log("data base connection error")
    }
}
module.exports=db;