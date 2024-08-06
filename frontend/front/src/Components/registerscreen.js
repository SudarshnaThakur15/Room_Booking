import React from 'react';
import axios from 'axios';
import logoforlogin from "./images/logoforlogin.jpg";
import Loader from './loader'
import Success from './Success';
// import baglogo from "./images/baglogo.png";
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './loginscreen.css'
import { useState } from 'react';

function Register() {

const[fname,setfname]=useState();
const[lname,setlname]=useState();
const[contact,setcontact]=useState();
const[email,setemail]=useState();
const[pass,setpass]=useState();
const [loading,setloading]=useState(false);
const[success,setsuccess]=useState(false);
const[error,seterror]=useState();
 async function handle(){
  try {
       setloading(true);
       const data=await axios.post("/api/users/register",{firstname:fname,lastname:lname,contactno:contact,Email:email,password:pass});
       alert(data.data);
       setsuccess(true);
       setloading(false);
       setcontact("");
       setemail("");
       setfname("");
       setlname("");
       setpass("");
  } catch (error) {
    seterror(true);
    console.log(error);
  }
  }
  function reset(){
    setcontact("");
    setemail("");
    setfname("");
    setlname("");
    setpass("");
  }
  return (
   <div> 
    {loading && (<Loader/>)}
    <br/><br/><br/><br/>
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5 text-left">

            <div className="text-left">
              <img src={logoforlogin}
                style={{width: '40px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Welcome! </h4>
            </div>

            <p className='p'>Please enter correct account detail</p>

            <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='text' value={fname} onChange={(e)=>{setfname (e.target.value) }}/>
            <MDBInput wrapperClass='mb-4' label='Last Name' id='form2' type='text' value={lname} onChange={(e)=>{setlname (e.target.value) }}/>
            <MDBInput wrapperClass='mb-4' label='Contact Number' id='form3' type='text' value={contact} onChange={(e)=>{setcontact (e.target.value) }}/>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form4' type='email'value={email} onChange={(e)=>{setemail (e.target.value) }}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form5' type='password' value={pass} onChange={(e)=>{setpass (e.target.value) }}/>
           

            <div className="text-center pt-1 mb-5 pb-1">
              <button className="mb-4 w-100 gradient-custom-2 btn" onClick={handle}>Register</button>
              {success&&(<Success/>)}
              {/* <button className="mb-4 w-100 gradient-custom-2 btn" onClick={reset}>Reset</button> */}
              {/* <a className="text-muted" href="#!">Forgot password?</a> */}
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0 p">Already have an account?</p>
             < Link to="/Login">
              <button outline className='mx-2 btn1 btn ' color='success'>
                Login
              </button>
              </Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='4' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 textofregisterpage">

            <div className="text-white px-3 py-4 p-md-3 mx-md-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOduJbRfgypjhPCFY56PJR9x_ftv8F7RYAg&usqp=CAU" style={{width: '185px',borderRadius:"50%"}} alt="logo"/><br/>
              <br/><h4 class="mb-4"style={{fontSize:"1.4"}}>Book. Stay. Enjoy. Repeat</h4>
              <p class="small mb-0 text-white" style={{fontSize:"1rem"}}>Sometimes, the best you can do is lock yourself in a hotel room by yourself.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    
    </div>
  );
}

export default Register;