const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const URI = process.env.URL
const bodyParser = require('body-parser')
const app = express()
mongoose.set("strictQuery", false);

mongoose.connect(URI,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('mongoose connected succesfully');
    }
})

app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}))
app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())

const userRoute = require('./routes/postRoute')
app.use('/post',userRoute)

app.listen(4000,()=>{
    console.log('app is listening at port 4000');
})