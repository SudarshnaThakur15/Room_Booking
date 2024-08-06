import React, { useState } from 'react'
import './navbar.css'
// import { json } from 'express';
function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  function logout() {
    localStorage.removeItem("currentuser");
    // user=0;
    window.location.href = "/Login";
  }

  var user1 = 0;
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-inverse navbaroutline" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{textDecoration:"none"}}>Your<span className='navbar-brand spanofnav'>Rooms</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ><i class="fa fa-bars" style={{ fontSize: "30px", color: "hotpink" }}></i></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {(user) ? (
                <>
                <li className="nav-item active">
                   <li className="nav-item" style={{display:'inline-block',fontFamily:'Bitter',marginLeft: "6rem"}} >
                    <a className="nav-link btnnavbar"style={{fontFamily:'-moz-initial'}} href="/home">Explore</a>
                  </li>

                  <li class="dropdown" style={{display:'inline'}}>
                    <button type="button" class="btnnavbar  dropdown-toggle" style={{ fontFamily: "-moz-initial", padding: "0.6rem", marginLeft: "2rem" }} data-toggle="dropdown">
                    <i class="fa fa-user"style={{ fontSize: "40px", color: "white",marginRight:"8px" }}></i> {user.firstname}
                    </button>
                    
                    <div class="dropdown-menu" >
                      <a class="dropdown-item" style={{ fontFamily: 'Bitter', fontSize: "auto" }} href="/Profile">Profile </a>
                      {/* <a class="dropdown-item" style={{ fontFamily: "fantasy", fontSize: "auto",color:"red" }} href="#">WishList</a> */}
                      <a class="dropdown-item" style={{ fontFamily: 'Bitter', fontSize: "auto"}} href="#" onClick={logout}>Logout</a>
                    </div>
                   </li>
                  
                </li>
                </>
              ) :
                (<>
                  <li className="nav-item active">
                    <a className="nav-link btnnavbar" style={{marginLeft:"10rem",fontFamily:"Bitter"}} href="/Login">Login <span class="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btnnavbar" href="/Register">Register</a>
                  </li>
                </>)}

            </ul>
                {/* <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form> 
                */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar