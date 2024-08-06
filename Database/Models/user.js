const mongoose =require("mongoose");
const schema= new mongoose.Schema({
    firstname:
    {
        type:String,
        required:true
    },
    lastname:
    {
        type:String,
        required:true
    },
    contactno:
    {
        type :Number
    },
    Email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
});
const User = mongoose.model("User",schema);
module.exports=User;