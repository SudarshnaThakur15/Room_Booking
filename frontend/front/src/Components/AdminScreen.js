import React, { useEffect, useState } from 'react'
import { Tabs } from "antd";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Loader from './loader';
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
function AdminScreen() {
  return (
    <div> 
        <br/>
        <br/><br/><br/><br/><Tabs
    defaultActiveKey="1"
    onChange={callback}
    tabBarStyle={{ color: "#8D949C" }}
    style={{ width: "90%",marginLeft:"2rem" }}
  >
    
    
    <TabPane
      tab="Booking"
      key="1"
      // style={{ backgroundColor: "red", color: "#000" }}
      style={{textAlign:"left",fontSize:"2rem",marginLeft:"1rem"}}
    >
    <Booking/> 
    </TabPane>




    <TabPane tab="Rooms" key="2">
     <Rooming/>
    </TabPane>
       




    <TabPane tab="AddRooms" key="3">
      <h1>Rooms adding</h1>
    </TabPane>




    <TabPane tab="Users" key="4">
     <User/>
    </TabPane>
   
    
  </Tabs>
  </div>
  )
}

export default AdminScreen

export function Booking()
{
    var count=1;
    const [bookings,setbookings]=useState();
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState();
    useEffect(()=>{
        ( async() =>{   
             try{
               setloading(true)
               const data= (await axios.get("/api/bookings/getallbookings")).data;
               console.log(data)
               setbookings(data)
            //    setduplicaterooms(data);
               setTimeout(()=>{setloading(false)},1000)
             }catch(error)
             {
               seterror(true);
               setloading(false);
             }
           }) ()
           
         },[])
    return(<div style={{fontSize:"1rem"}}>
       {loading?(<Loader/>):(
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Bookingid</th>
          <th>userid</th>
          <th>roomname</th>
          <th>from</th>
          <th>to</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
      {/* <tr> */}
      {(bookings.length)&&(bookings.map((book)=>
      {return(
      <>
        <tr>
        <td>{count++}</td>
          <td>{book._id}</td>
          <td>{book.userid}</td>
          <td>{book.room}</td>
          <td>{book.fromdate}</td>
          <td>{book.todate}</td>
          <td>{book.statusobject}</td>
        </tr>
        
      </>)}))}
      {/* </tr> */}
      </tbody>
    </Table>)}
    </div>)
}
export function Rooming()
{
    var count=1;
    const [rooms,setrooms]=useState();
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState();
    useEffect(()=>{
        ( async() =>{   
             try{
               setloading(true)
               const data= (await axios.get("/api/rooms/getallrooms")).data;
               console.log(data)
               setrooms(data)
            //    setduplicaterooms(data);
               setTimeout(()=>{setloading(false)},1000)
             }catch(error)
             {
               seterror(true);
               setloading(false);
             }
           }) ()
           
         },[])
    return(<div style={{fontSize:"1rem"}}>
       {loading?(<Loader/>):(
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Roomid</th>
          <th>roomname</th>
          <th>Rent</th>
          <th>Capacity</th>
          <th>Type</th>
          {/* <th>status</th> */}
        </tr>
      </thead>
      <tbody>
      {/* <tr> */}
      {(rooms.length)&&(rooms.map((book)=>
      {return(
      <>
        <tr>
        <td>{count++}</td>
          <td>{book._id}</td>
          <td>{book.name}</td>
          <td>{book.rentpernight}</td>
          <td>{book.maxcount}</td>
          <td>{book.typeofroom}</td>
          {/* <td>{book.statusobject}</td> */}
        </tr>
        
      </>)}))}
      {/* </tr> */}
      </tbody>
    </Table>)}
    </div>)
}


export function User()
{
    var count=1;
    const [users,setusers]=useState();
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState();
    useEffect(()=>{
        ( async() =>{   
             try{
               setloading(true)
               const data= (await axios.get("/api/users/getallusers")).data;
               console.log(data)
               setusers(data)
            //    setduplicaterooms(data);
               setTimeout(()=>{setloading(false)},1000)
             }catch(error)
             {
               seterror(true);
               setloading(false);
             }
           }) ()
           
         },[])
    return(<div style={{fontSize:"1rem"}}>
       {loading?(<Loader/>):(
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Userid</th>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          {/* <th>Type</th> */}
          {/* <th>status</th> */}
        </tr>
      </thead>
      <tbody>
      {/* <tr> */}
      {(users.length)&&(users.map((book)=>
      {return(
      <>
        <tr>
        <td>{count++}</td>
          <td>{book._id}</td>
          <td>{book.firstname+book.lastname}</td>
          <td>{book.contactno}</td>
          <td>{book.Email}</td>
          {/* <td>{book.typeofroom}</td> */}
          {/* <td>{book.statusobject}</td> */}
        </tr>
        
      </>)}))}
      {/* </tr> */}
      </tbody>
    </Table>)}
    </div>)
}
