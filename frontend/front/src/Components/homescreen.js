import React,{useEffect,useState} from 'react'
import axios from "axios";
import Rooms from './rooms';
import "./navbar.css"
// import { StyleProvider } from '@ant-design/cssinjs';
import moment from 'moment/moment';
import Loader from './loader';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
 function Homescreen() {

   const [rooms,setrooms] =useState([]);
   const [loading,setloading]=useState();
   const[error,seterror]=useState();
   const [duplicaterooms,setduplicaterooms]=useState([]);
   useEffect(()=>{
   ( async() =>{   
        try{
          setloading(true)
          const data= (await axios.get("/api/rooms/getallrooms")).data;
          setrooms(data)
          setduplicaterooms(data);
          setTimeout(()=>{setloading(false)},1000)
        }catch(error)
        {
          seterror(true);
          setloading(false);
        }
      }) ()
      // getrooms();
    },[])

  const[fromdate,setfromdate]=useState();
  const[todate,settodate]=useState();
  const[searchkey,setsearchkey]=useState();
  const[type,settype]=useState(["all"]);
    function filterByDate( Dates)
    {
    setfromdate((Dates[0]).format("DD-MM-YYYY"));
    settodate((Dates[1]).format("DD-MM-YYYY"));
    console.log(fromdate);
    var start =(Dates[0]).format("DD-MM-YYYY");
    var end =(Dates[1]).format("DD-MM-YYYY");
     var tempromms=[];






     var availability=true;
     for(const values of duplicaterooms)
     {

      if(values.currentbookings.length>0)
        {
          for(const currbooking of values.currentbookings)
          {
            // console.log("hello from date filter")
            if(((moment(start).isBetween(currbooking.fromdate,currbooking.todate)))||((moment(end).isBetween(currbooking.fromdate,currbooking.todate))))
            {
              
                availability=false
              
            }
            else if((start===currbooking.fromdate)||(start===currbooking.todate)||(end===currbooking.fromdate)||(end===currbooking.todate))
              {
                availability=false;
        
              }
              
           
          }
        }
        if(availability===true||values.currentbookings.length===0)
        {
          tempromms.push(values);
        }
      }
      setrooms(tempromms);
      availability=true;
   
    }







  function filterBySearch()
  {
     const temprooms=duplicaterooms.filter((room)=>{
      return room.name.toLowerCase().includes(searchkey.toLowerCase());
    })
    setrooms(temprooms)
  }
 function filterBytype(e)
 {
  if(e!=="All")
  {
    const temprooms=duplicaterooms.filter((room)=>{return room.typeofroom.toLowerCase()===e.toLowerCase()})
    console.log(e)
    console.log(temprooms)
    setrooms(temprooms);
  }
  else
  {
  setrooms(duplicaterooms);
  }
 }


  return (
    
    <div className='wholeroomcardpage'>
      <br></br><br></br>
    <div className='container pt-5 '>
        <div className='row p-3 boxs'>
            <div className='col-md-4 mr-1'>
              <RangePicker format="DD-MM-YYYY" onChange={filterByDate} style={{height:"2.5rem"}}/>
            </div>
           <div className='col-md-3 mr-2'>
            <input type='text' className='form-control' placeholder='search rooms' value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch}/>
           </div>
           
           <select className='col-md-3 ' value={type} onChange={(e)=>{filterBytype(e.target.value)}}  >
            <option value="All"  >All</option>
            <option value="Delux"  >Delux</option>
            <option value="Non-Delux"  >Non-Delux</option>
           </select>
        </div>



        <div className='row   'style={{paddingBlockEnd:"2.5rem"}} >
        {loading?(<h1 style={{marginTop:"20%",marginLeft:"50%"}}><Loader/></h1>)
        :error ?(<h2>error</h2>)
        :(rooms.map(room =>
            {
                return (<div className='col-md-12'>
                    {/* { console.log(room)} */}
                      <Rooms room={room} fromdate={fromdate} todate={todate}/>
                      {/* {console.log(fdate)} */}
                     </div>)

            }))}

        </div>



        </div>
        
        </div>
  )
}

export default Homescreen