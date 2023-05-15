const express=require('express');
const router=express.Router();
const User=require('../models/Users')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const fetchUser=require('../middleware/fetchUser');

const secret="Hiiamhimanshubediiloveyoubaby";

router.post('/api/auth/createUser',async(req,res)=>{
    console.log(req.body);
    var {name,email,password,date}=req.body;

    if(!name||!email||!password||password.length<5||!email.includes("@"))
    {
        return res.status(422).json({message:"Fill fields Properly"});
    }

    const userexists=await User.findOne({email});
     password=await bcrypt.hash(password,12);
    
    
    const data={
        user:{
           id:userexists?userexists._id:'',
        }
    }
    

    if(userexists)
    {
        res.status(401).send({message:"User already exists"});
    }
    else
    {
        const newuser=new User({name,email,password,date});
        newuser.save();
        data.user.id=newuser._id;
        const authtoken=jwt.sign(data,secret);
        res.send({authtoken});
    }

   
    
})

router.post('/api/auth/login',async(req,res)=>{
    try
    {
        const {email,password}=req.body;
        if(!email||!password||email.length<5||!email.includes("@"))
        {
            return res.status(422).json({message:"No field Must be empty"});
        }

        const userexists=await User.findOne({email:email});

        if(userexists)
        {
            console.log(userexists);
           
            const passwordcompare=await bcrypt.compare(password,userexists.password);

           // const usertoken=await userexists.generateAuthToken();
            // console.log(usertoken);

            const data={
                user:{
                   id:userexists._id,
                }
            }

            // res.cookie('bedicookie',usertoken,{
            //     httpOnly:true
            // })

            if(passwordcompare)
            {
                const authtoken=jwt.sign(data,secret);
                res.status(201).json({message:"Login Successfull"});
                console.log("passwords match");
            }
            else
            {
                res.status(422).json({message:"Password doen't match"});
                console.log("passwords dont match");
            }
        }
        else
        {
            console.log("user doesnt exist");
            return res.status(422).json({message:"User doesnot exist"});
        }
    }
catch(err)
{
    console.log(err);
}
    
})

router.post("/api/auth/getuser",fetchUser,async(req,res)=>{
    try{
      const userid=req.id;
      console.log(userid);
      const user=await User.findById(userid).select("-password");
      console.log(user);
      res.send(user);
    }
    catch(e)
    {
        console.log(e);
        return res.status(422).json({message:"User doesnot exist"});

    }
})

module.exports=router;
