const mongoose =require( "mongoose");
const schema=new mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    roomid:
    {
        type:String,
        required:true

    },
    userid:
    {
        type:String,
        required:true
    },
    fromdate:
    {
        type:String,
        required:true
    },
    todate:
    {
        type:String,
        required:true
    },
    totalamount:
    {
        type:Number,
        required:true
    }
    ,
    totaldays:
    {
        type:Number,
        required:true
    },
    transectionid:
    {
        type:String,
        required:true
    }
    ,
    statusobject:{type:String,
        required:true,
        default:"booked"
    },

},{timestamps:true});
 const bookingmodel=mongoose.model("bookingAroom",schema);
 module.exports=bookingmodel;