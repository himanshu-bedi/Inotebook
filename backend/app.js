const express=require('express');
const dotenv=require('dotenv');
const app=express();
var cors = require('cors')




app.use(cors());
app.use(express.json());
dotenv.config({path:'./config.env'});
require('./db/conn');



app.use(require("./routes/auth"));
app.use(require("./routes/notes"));


app.get('/',(req,res)=>{
    res.send("hii");
})

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})