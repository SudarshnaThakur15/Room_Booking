import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';


function Footer() {
  return (
    <div>
       <MDBFooter className='text-center text-white footerstyle' >
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3' style={{color:"white"}}>Register for free   </span>
            <form action='/Register'>
            <button type='submit' className='btn' style={{color:"white", marginLeft:"5px",backgroundColor:"transparent"}} >
              Sign up!
            </button>
            </form>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright : 
        <a className='text-white' href='/'>
           <p  style={{ display:"inline" }} >  YourRooms.com</p>
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer