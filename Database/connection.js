
const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://Sudarshna:@cluster0.umpoorn.mongodb.net/roomBookingdb",{useNewUrlParser: true, useUnifiedTopology: true});
var connection=mongoose.connection;
connection.on('error',()=>
{
 console.log("Mongodb connection failed")
});
connection.on('connected',()=>
{
 console.log("Mongodb connection successful")
});
        
   
module.exports={mongoose};
