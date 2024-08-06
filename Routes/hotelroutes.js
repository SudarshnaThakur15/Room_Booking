const express=require("express");
const router=express.Router();
const mongoose= require("mongoose")
const hotel=require('../Database/Models/hotelmodel');

router.get("/getallhotels",async(req,res)=>
{
    try{
     const hotels= await hotel.find({});
    //  console.log(hotels)
         res.send(hotels);
    }
    catch(error)
    {
    console.log(error);
    res.send(error);
    }
});
module.exports=router;