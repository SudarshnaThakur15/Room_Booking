import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";
// import "antd/dist/antd.css";
// import "./index.css";
import Navbar from "./navbar";
import { Tabs } from "antd";
import BookingCard from "./BookingCard";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function demiGod(){
const user=JSON.parse(localStorage.getItem("currentuser"));
if(!user)
{
  window.location.href="/Login";
}

return (
 <div>
  {/* <Navbar/> */}
  <br/><br/><br/>
  <Tabs
    defaultActiveKey="1"
    onChange={callback}
    tabBarStyle={{ color: "#8D949C" }}
    style={{ width: "90%",marginLeft:"2rem" }}
  >
    <TabPane
      tab="Profile"
      key="1"
      // style={{ backgroundColor: "red", color: "#000" }}
      style={{textAlign:"left",fontSize:"2rem",marginLeft:"1rem"}}
    >
      {/* <Card body style={{margin:"2rem",width:"40%",textAlign:"left"}} className='card1'> */}
      <div className="row">
        <div className="col-md-4">
      <img src={require('./images/profile.jpg')}className="" style={{borderRadius:"50%",height:"15rem",width:"15rem"}}></img>
      </div>
      <div className="col-md-6">
      <span className="bookingshowcard" style={{textAlign:"left"}}> {user.firstname +"   "+user.lastname}</span><br></br>
      <span className="bookingshowcard" style={{textAlign:"left"}}>email: {user.Email}</span><br/>
      </div>
      {/* <span className="bookingshowcard" style={{textAlign:"left"}}>: {user.firstname}</span>     */}
      {/* </Card> */}
     </div>
    </TabPane>
    <TabPane tab="Booking" key="2">
      <BookingCard/>
    </TabPane>
   
    
  </Tabs>
  </div>
)
}
// ReactDOM.render(<Demo />, document.getElementById("container"));
export default demiGod;
