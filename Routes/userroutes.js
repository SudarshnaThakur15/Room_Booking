const express=require("express");
const User = require("../Database/Models/user");
const router=express.Router();
  router.post('/register' ,async (req,res)=>
  {
     const newuser= await new User({firstname:req.body.firstname,lastname:req.body.lastname,contactno:req.body.contactno,Email:req.body.Email,password:req.body.password});
     try{
            newuser.save();
            console.log(req.body)
             res.send(req.body);
     }
     catch(error)
     {
        res.send("error occured");
     }
     
  })

  router.post('/login' ,async (req,res)=>{
    // const {email,password}=req.body;
    console.log("requst is: "+ JSON.stringify(req.body));
    try{
        const ans= await User.findOne({Email:req.body.Email,password:req.body.password});
        if(ans)
        {
          console.log("   answer is: "+ans)
            res.send(ans);

        }
        else{
            res.send("failed");
        }
    }
    catch(error)
    {
        res.send("error");
    }
  })

  router.get("/getallusers",async(req,res)=>
{
   try {
     const result= await User.find();
     console.log(result)
     res.send(result);
   } catch (error) {
    res.send(error)
   }
})
module.exports=router;