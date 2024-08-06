const express = require("express");
const router = express.Router();
const Booking = require("../Database/Models/bookingmodel")
const roomModel = require("../Database/Models/roommodel")
const stripe = require('stripe')("sk_test_51NnFLhSJ2JvofmQkQY2BRURAn5LtQstGV80nGlCLbl4g1t0iJdoGxvdQ5fZAO3BPb6OywQJjVO9x9z2FQwpRim3c00oaoX8LWB")
const { v4: uuidv4 } = require('uuid')

router.post("/getbookingbyuserid",async (req,res)=>{
    const userid=req.body.userid;
    console.log("hello")
   try {
     const data= await Booking.find({userid:userid});
     res.send(data);
   } catch (error) {
    console.log(error)
   }
  });

  router.post("/cancelbooking",async(req,res)=>{
    const room=req.body.room;
    const fromdate=room.fromdate;
    const enddate=room.todate;
    const userid=req.body.userid;
    const roomid=room.roomid;
    const bookingid=room._id;
    try {
      const temprooom = await roomModel.findOne({ _id: roomid });
      
      // res.send("updated");
    } catch (error) {
      console.log(error)
    }
    try {
        const result=await Booking.updateOne({userid:userid,fromdate:fromdate,todate:enddate,roomid:roomid},{statusobject:"Cancelled"});
        // console.log("cancelled  "+roomid+"  "+bookingid+"  "+userid+"   "+fromdate+"    "+enddate);
        res.send(result);
    } catch (error) {
        console.log(error);
    }

  })

router.get("/getallbookings",async(req,res)=>
{
   try {
     const result= await Booking.find();
     console.log(result)
     res.send(result);
   } catch (error) {
    res.send(error)
   }
})



router.post("/bookrooms", async (req, res) => {
    const {
        room,
        roomid,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        token

    } = req.body;

    try {
        // const customer = await stripe.customers.create(
        //     {
        //         email: token.email,
        //         source: token.id
        //     }
        // )
        // const payment = await stripe.charges.create({
        //     amount: totalamount * 100,
        //     // customer: customer.id,
        //     currency: "INR",
        //     receipt_email: token.email
        // },
        //     { idempotencyKey: uuidv4() })

        // res.send("payment successfull! your room is booked")
      
        const paymentIntent = await stripe.paymentIntents.create({
            amount:totalamount*100,
            currency: 'inr',
            payment_method: 'pm_card_visa',
            receipt_email:token.email
           

          });
          res.send("Room booked successfully")
      

        if (paymentIntent.status=='requires_confirmation') {
                 const newbooking = new Booking({
            room,
            roomid,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays,
            transectionid: token.id

        })

            const booking = await newbooking.save();
            // res.send("room booked successfully");
            const temprooom = await roomModel.findOne({ _id: roomid });
            temprooom.currentbookings.push({ bookingid: booking._id, fromdate: fromdate, todate: todate, usrid: userid, status: booking.statusobject });
            await temprooom.save();


        }

    } catch (error) {
        console.log(error)
    }


})

module.exports = router;