const express=require("express");
const router=express.Router();
const mongoose= require("mongoose")
const Room=require('../Database/Models/roommodel');
const Booking = require("../Database/Models/bookingmodel")
router.get("/getallrooms",async(req,res)=>
{
    try{
     const rooms= await Room.find({});
    //  console.log(rooms);
     res.send(rooms);
    }
    catch(error)
    {
    console.log(error);
    res.send(error);
    }
});
 
router.post("/getroombyid",async(req,res)=>
{
  try{
      const roomid=req.body.roomid;
      const room=await Room.findOne({_id:roomid});
     res.send(room);
  }catch(error)
  {
    console.log(error);
    res.send(error);
  }
});
router.post("/getbookingbyuserid",async (req,res)=>{
  const userid=req.body.userid;
  // console.log("hello")
 try {
   const data= await Booking.find({userid:userid});
   res.send(data);
 } catch (error) {
  console.log(error)
 }
});
router.get("/getallrooms",async(req,res)=>
{
   try {
     const result= await Room.find();
     console.log(result)
     res.send(result);
   } catch (error) {
    res.send(error)
   }
})
module.exports=router;
