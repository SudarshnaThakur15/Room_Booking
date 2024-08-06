import React,{useEffect,useState} from 'react'
import "./navbar.css"
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from './loader';
import moment from 'moment';
import swal from 'sweetalert';
import StripeCheckout from "react-stripe-checkout"
import BookingCard from './BookingCard';
// import Profile from './profile.tsx';
// import Profile from './profile';

 function Bookingscreen(parameter) {
    const [days,setdays] =useState("1");
 const { roomid,fromdate,todate } = useParams();
//  const {fromdate}=useParams();
 const [room,setroom] =useState();
const [loading,setloading]=useState([true]);
var start =moment(fromdate,"DD.MM.YYYY");
    var end =moment(todate,"DD.MM.YYYY");
const totaldays=end.diff(start,"days");
// console.log(diffrenceindays);
const[error,seterror]=useState();
  useEffect(()=>{
   ( async() =>{   
        try{
            setloading(true)
            // setTimeout(()=>{},5000)
            const data= (await axios.post("/api/rooms/getroombyid",{roomid : roomid})).data;
            setroom(data)

         
            setTimeout(()=>{setloading(false)},1000)
            
        }catch(error)
        {
            seterror(error);
            setloading(false);
        }
    }) ()
    // getrooms();
  },[])


//   function Handle(event)
//   {
      
//      setdays(event.target.value);
//      console.log(days)
//       // console.log("hello")
//   }
async function onToken(token)
{
    console.log(token);
    const bookingDetails={
        room:room.name,
        roomid:room._id,
        userid:JSON.parse(localStorage.getItem("currentuser"))._id,
        fromdate,
        todate,
        totalamount:totaldays*room.rentpernight,
        totaldays,
        token

    }
    try {
        setloading(true)
        const result=await axios.post("/api/bookings/bookrooms",bookingDetails);
        console.log(result)
        setloading(false)
        swal("congratulations","your room booked successfully!","success").then( ()=>{ window.location.href="/Profile"
            
        })
       

       
        
    } catch (error) {
        setloading(false)
        swal("Oops","Something went wrong!","error")
        console.log("some error occured");
    }
}


return(<div className='wholeroomcardpage'>
    <br/><br/>
    <br/>
    {loading?(<h1><Loader/></h1>):error?(<h1>{error}</h1>):(<div className='container'>
       <div className='bookingpage'>
       <div className='row eachrowBookingpage justify-content-left'>
           <div className='col-lg-6'>
            <p className='eachcolBooking' style={{margin:"5px"}}>{room.discription}</p>
            <img src={require(`${room.imageurls[0]+".jpg"}`)} alt='this is a image' className='bimg' style={{ width:" 28rem",
                height: "25rem",marginBottom:"8px",marginTop:"8px",float:"left"}} /><br></br>
            
                   
           </div>
           <div className='col-lg-6 eachcolBooking' style={{float:"right",textAlign:"right"}}>
               {/* <h3>{room.name}</h3> */}
               <p>Name  :        {JSON.parse(localStorage.getItem("currentuser")).firstname}</p>
               <p>Capacity:    {room.maxcount}</p>
               <p>Cost per day:{room.rentpernight}</p>
               <p><bold>From:</bold> {fromdate}</p>
               <p>To: {todate}</p>
               {/* <div style={{display:"inline-block"}} >
               <p style={{display:"inline"}}>No.of days of booking: <input type='textfield' name='noofdays' onChange={Handle} style={{display:"inline"}} /> </p>
               <button type='submit' value='submit' onClick={Handle}>click here</button>
               </div> */}
               <br></br><br></br>
               <p ><span>Total Cost:{totaldays*room.rentpernight}</span></p>
               <StripeCheckout
                    token={onToken}
                    amount={totaldays*room.rentpernight*100}
                    currency='INR'
                    stripeKey="pk_test_51NnFLhSJ2JvofmQkoo1Uw4uS02yqr89vfyKXMEUGvnqZNHcfeY9zjZRTzd5VZGScAz6tEKNJgKDZlokaKmhTMmNS00QS6fpDly"
                >
               <button type="submit"className='btn2'>Pay Now</button>
                </StripeCheckout>
           </div>
      </div>
   <p className='eachcolBooking' style={{color:"rgb(8, 8, 50)",textAlign:"center",fontSize:"1.5rem",marginTop:"1rem"}}>{room.name}</p>
   </div>
      </div>)}
   
</div>)
}
export default Bookingscreen