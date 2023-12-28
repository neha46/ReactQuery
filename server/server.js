const express=require('express');
const app=express();
require('dotenv').config();
const db=require('./config/db.config');
const userRoute=require('./routes/userRoutes')

app.use(express.json());
const port=process.env.PORT || 8000;

// routes
app.use('/api/users',userRoute)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

// database conenction
db();