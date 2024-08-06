import React,{useState} from 'react';
import logoforlogin from "./images/logoforlogin.jpg";
import baglogo from "./images/baglogo.png";
import { Link, json } from 'react-router-dom';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './loginscreen.css'
import Errorcp from './error';
import Success from './Success';
function Login() {
  
  const[email,setemail]=useState();
  const[pass,setpass]=useState();
  const [loading,setloading]=useState(false);
// const[success,setsuccess]=useState(false);
const[error,seterror]=useState();
 async function handle(){
  
    try {
      setloading(true);
      const data=(await axios.post("/api/users/login",{Email:email,password:pass})).data;
      if(data!="failed")
      {
        localStorage.setItem("currentuser",JSON.stringify(data));
      
      setemail('');
      setpass('');
      setloading(false);
      window.location.href='/home';
    }
      else if(data=="failed"){
        seterror(true);
      }
      // alert(data);
    } catch (error) {
      seterror(true);
    }
    
   

  }
  return (
    <div>
      <br/><br/><br/>
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={logoforlogin}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Welcome! </h4>
              
            </div>
             
            <p>Please login to your account</p>

            
             <lable for="Name">Email</lable>
            <input wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>{setemail (e.target.value) }}/>
            <lable for="Name">Password</lable>
            <input wrapperClass='mb-4' label='Password' id='form2' type='password'onChange={(e)=>{setpass(e.target.value)}}/>


            <div className="text-center pt-1 mb-5 pb-1">

            {error&&(<Errorcp message="Invalid credentials. Please enter correct information or Register"/>)}
              <button className="mb-4 w-100 gradient-custom-2 btn bg-pink-500" onClick={handle}>Sign in</button>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              < Link to="/Register">
              <button outline className='mx-2 btn btn1 ' color='success' on>
                Register
              </button>
              </Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='4' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 textofregisterpage">

            <div className="text-white px-3 py-4 p-md-3 mx-md-2">
              <img className='image1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOduJbRfgypjhPCFY56PJR9x_ftv8F7RYAg&usqp=CAU" style={{width: '185px',borderRadius:"50%"}} alt="logo"/><br/>
              <br/><h4 class="mb-4 "style={{fontSize:"1.6rem"}}>Unlock Your Getaway: Book Your Stay Today!</h4>
              <p class="small mb-0 text-white"style={{fontSize:"1rem"}} >Sometimes, the best you can do is lock yourself in a hotel room by yourself.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
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

export default Login;