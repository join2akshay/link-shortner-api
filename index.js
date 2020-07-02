const express=require('express');
const app=express();
const connectDB = require('./config/db');
app.use(express.json({extend:false}))
const PORT=5000;
//conenect Mongo
 connectDB();


app.listen(PORT,()=>console.log(`server runs on ${PORT}`))