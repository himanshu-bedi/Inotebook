const jwt=require('jsonwebtoken');
const secret="Hiiamhimanshubediiloveyoubaby";

const fetchUser=(req,res,next)=>{
   try {
    const token=req.header('auth-token');
    console.log(token);

    if(!token)
    {
        res.status(401).send({message:"User not found"});
    }
    
      const data=jwt.verify(token,secret);
      console.log(data);
      req.id=data.user.id;
      next();
   } catch (error) {
     console.log(error);
     res.send(error);
   }

   
}

module.exports=fetchUser;