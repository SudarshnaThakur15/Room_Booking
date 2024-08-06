import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import "./frontscreen.css"
import axios from 'axios'
// import e from 'express'
// import { handle } from 'express/lib/application'
const user=JSON.parse(localStorage.getItem("currentuser"));
function BookingCard(props) {
  const [rooms,setrooms]=useState();
  useEffect(()=>{
    (async()=>{
   try {
     const room=(await axios.post("api/bookings/getbookingbyuserid",{userid : user._id})).data;
     setrooms(room);
     console.log(room);
   } catch (error) {
     console.log(error)
   }
  }) ()
 
},[])

async function handle(room) {
  const result=(await axios.post("/api/bookings/cancelbooking",{userid : user._id,room:room}));
  // const room1=(await axios.post("/api/bookings/getbookingbyuserid",{userid : user._id})).data;
  // setrooms(room1);
  // alert(e.target.value);
}
  return (
    <div>
      {
       (rooms)?( rooms.map((room)=>
        {
         return (<div className='row'>
          <div className='col-lg-12'>
         <Card body style={{margin:"2rem",width:"40%",textAlign:"left",alignSelf:"center"}} className='card1'>
         <span className='bookingshowcard' style={{color:"#010d30",fontWeight:"700"}}>{room.room}</span>      <br></br>
          <span className='bookingshowcard'>Check In:</span> {room.fromdate}<br></br>
          <span className='bookingshowcard'>Check Out:</span>   {room.todate}<br></br>
         <span className='bookingshowcard'> Status:</span>  {room.statusobject=='booked'?(<span style={{color:"green"}}>Confirmed</span>):(<span style={{color:"red"}}>Canceled</span>)}<br></br>
         {room.statusobject=='booked'?( <button  onClick={()=>{handle(room)}} className='cancelButton'>Cancel Booking</button>):(<></>)}
        
          </Card></div></div>);
        })):(<h1>No Bookings Yet</h1>)
      }


    </div>
  )
}

export default BookingCard