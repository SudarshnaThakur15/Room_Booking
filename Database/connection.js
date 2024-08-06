
const mongoose =require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/roomBookingdb",{useNewUrlParser: true, useUnifiedTopology: true});
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
// async function con() {
//   try {
//       await mongoose.connect("mongodb://127.0.0.1:27017/roomBookingdb");
//       // console.log(await db.Employee.find({}));
//       console.log("success");
//     } catch (error) {
//       console.log(error);
//     }
// }