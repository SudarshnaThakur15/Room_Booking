import React ,{useEffect,useState} from 'react'
import Loader from './loader';
import axios from 'axios';
function Hotelscreen() {
    const [hotel,sethotel]=useState([]);
    const[loading,setloading]=useState();
    const [error,seterror]=useState();
    useEffect(()=>{
        ( async() =>{   
             try{
               setloading(true)
                              const data= (await axios.get("/api/hotels/getallhotels")).data;
               sethotel(data)
               
               setTimeout(()=>{setloading(false)},1000)
             }catch(error)
             {
               seterror(true);
               setloading(false);
             }
           }) ()
           
         },[])
   

  return (
    <div>
        {loading?(<h1 style={{marginTop:"20%",marginLeft:"50%"}}><Loader/></h1>)
        :error ?(<h2>error</h2>)
        :(hotel.map(hotelone =>
            {
                return (<div className='col-md-12'>
                    
                      <div style={{marginTop:"20%",marginLeft:"50%",fontFamily:"cursive",height:"20rem",width:"20rem",border:"solid black 7px"}}>{hotelone.hotel_name}</div>
                     </div>)
                    

            }))}
    </div>
  )
}

export default Hotelscreen