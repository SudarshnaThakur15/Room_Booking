const mongoose=require('mongoose');
const schema= new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        maxcount:
        {
            type:Number,
            required:true
        },
        phonenumber:
        {
            type:Number,
            required:true
        },
        rentpernight:
        {
            type:Number,
            required:true
        },
        imageurls:[],
        currentbookings:[],
        typeofroom:
        {
            type:String,
            required:true
        },
        discription:
        {
            type:String,
            required:true

        }

    },
    {
        timestamps:true
    }
    
);
const roomModel=mongoose.model("rooms",schema);
// test(roomModel);
// async function test (roomModel1)
// {  console.log( await roomModel1.find({}));}
module.exports=roomModel

// const r1=new roomModel({
//   name:"SPOT ON 37669 Hotel hari sai lodge near regimental bazar shivaji nagar hyderabaad",
//   imageurls:["./images/image3","./images/dining3","./images/pool3"],
//   rentpernight:1500,
//   typeofroom:"delux",
//   maxcount:3,
//   phonenumber:1234567890,
//   currentbookings:[],
//   discription:"Furnished and modest property situated in regimental bazar shivaji nagar"
// })
// r1.save();