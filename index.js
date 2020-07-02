const express=require('express');
const app=express();
const connectDB = require('./config/db');
app.use(express.json({extend:false}))
const PORT=5000;
//conenect Mongo
 connectDB();
//define Routes
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))

app.listen(PORT,()=>console.log(`server runs on ${PORT}`))