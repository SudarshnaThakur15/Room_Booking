const mongoose=require("mongoose")
const express=require("express");
const app=express();
const port=5000;
const connect=require('./Database/connection');
const rm=require("./Database/Models/roommodel");
const hotel=require("./Database/Models/hotelmodel")
const roomsroute=require("./Routes/roomroutes");
const userroutes=require("./Routes/userroutes")
const Bookingroutes=require("./Routes/Bookingroutes")
const hotelroutes=require('./Routes/hotelroutes')
// const mongoose =require('mongoose');
const user=require('./Database/Models/user');
app.use(express.json());
app.use('/api/rooms',roomsroute);
app.use('/api/users',userroutes);
app.use('/api/bookings',Bookingroutes);
app.use('/api/hotels',hotelroutes);
app.listen(port,(req,res)=>
{
  // console.log(rm.roomModel.find({}));
  console.log(`server started at ${port}`)
});

