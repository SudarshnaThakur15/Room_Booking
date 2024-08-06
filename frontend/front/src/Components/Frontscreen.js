import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Modal,Button } from 'react-bootstrap';
import './frontscreen.css';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Footer from './Footer';
// import Navbar from './navbar';
//  import CarouselTransition from './crousels';
function Frontscreen() {
  return (
      <div className='body' >
          {/* <Navbar/> */}
        {/* <div style={{paddingTop:"0.5rem",paddingLeft:"0%",margin:"0%",backgroundColor:"black", zIndex:"-1"}} >
           
           <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"style={{height:"45rem",width:"100%", marginTop:"-6rem",opacity:"0.9"}}></img>
           </div>
           <div style={{marginTop:"-9rem" ,position:"absolute",zIndex:"12",color:"white", fontFamily:"bitter",textAlign:"center",width:"100%"}}>
            <h1 style={{ fontFamily: "'Lobster', cursive", color: "white" }}>Designed for your pleasure</h1>
            <h3 >Let us pamper you with world-class facilities and impeccable attention to detail.</h3>
            <p >Let us pamper you with world-class</p>

          </div>  */}
          {/* //CArds */}
        {/* <CarouselTransition/> */}
        <Carousel slide={false} >
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="heightofcarouselimage"
        />
        <Carousel.Caption>
          <h3 style={{ fontFamily: "'Lobster', cursive", color: "white" }}>Designed for your pleasure</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="heightofcarouselimage"
        />
        <Carousel.Caption>
          <h3 style={{ fontFamily: "'Lobster', cursive", color: "white" }}> Experience true tranquility</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="heightofcarouselimage"
        />
        <Carousel.Caption>
          <h3 style={{ fontFamily: "'Lobster', cursive", color: "white" }}>Impeccable attention to detail</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* <div style={{textAlign:"center",backgroundColor:"white", display:"inline-block", position:"absolute" ,zIndex:"2",width:"20rem",height:"20rem",borderRadius:"100%",marginLeft:"-39rem",marginTop:"-25rem",fontFamily:" 'Bitter', serif",opacity:"0.5"}}>
            <br/><br/><br/><br/><br/><h1 style={{}}>Activities</h1>
            <p style={{ }}>Discover<br></br>Quinta dos emerald</p>
           </div>
          <hr style={{marginTop:"-15rem", marginBottom:"30rem",border:"solid 3px black",position:"absolute",zIndex:"1",width:"30%",opacity:"0.8",marginLeft:"4rem"}}></hr>
           */}
           <div style={{paddingTop:"0.5rem",paddingLeft:"0%",margin:"0%",marginTop:"2rem",marginBottom:"2rem"}} >
           
           <img src={require("./images/something2.png")}style={{height:"15rem",width:"100%",paddingTop:"0px",opacity:""}}></img>
           </div>
           <div style={{margin:"20px" ,position:"absolute",zIndex:"12",color:"white", fontFamily:"bitter",textAlign:"center",width:"100%"}}>
          </div> 
           <div style={{textAlign:"left",backgroundColor:"white", display:"inline-block", position:"absolute" ,zIndex:"1",width:"15rem",height:"auto",marginLeft:"-25rem",marginTop:"-4rem",fontFamily:" 'Bitter', serif"}}>
            <h1 style={{paddingLeft:"1rem",paddingLeft:"0.8rem"}}>Facilities</h1>
            <p style={{ paddingLeft:"1rem",color:"rgb(83, 83, 86)"}}>Discover<br></br>Quinta dos emerald</p>
           </div>
            <div className='row 'style={{marginLeft:"8rem",marginRight:"1rem"}}>
                <div className='col-lg-3'>
                  {/* <img src='https://cdn.pixabay.com/photo/2017/05/23/07/37/hotel-2336469_1280.jpg' /> */}
                  <img src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"style={{height:"25rem",width:"100%",paddingTop:"0px",opacity:""}}></img>
                </div>
                <div className='col-lg-8'style={{}}>
                <img src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2560&q=80"style={{height:"25rem",width:"100%",opacity:""}}></img>
                  {/* <img src='https://cdn.pixabay.com/photo/2017/05/23/07/37/hotel-2336469_1280.jpg' /> */}
                </div>
            </div>
            <div className='row ' style={{margin:"1rem",marginLeft:"8rem",marginBottom:"2rem"}}>
                <div className='col-lg-4'style={{}}>
                <img src="https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"style={{height:"25rem",width:"100%",opacity:""}}></img>
                  {/* <img src='https://cdn.pixabay.com/photo/2017/05/23/07/37/hotel-2336469_1280.jpg' /> */}
                </div>
                <div className='col-lg-3'>
                  {/* <img src='https://cdn.pixabay.com/photo/2017/05/23/07/37/hotel-2336469_1280.jpg' /> */}
                  <img src="https://images.unsplash.com/photo-1694717476815-f750d916212f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"style={{height:"25rem",width:"100%",paddingTop:"0px",opacity:""}}></img>
                </div>
                <div className='col-lg-4'>
                  {/* <img src='https://cdn.pixabay.com/photo/2017/05/23/07/37/hotel-2336469_1280.jpg' /> */}
                  <img src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2940&q=80"style={{height:"25rem",width:"100%",paddingTop:"0px",opacity:""}}></img>
                </div>
            </div>
            <div style={{textAlign:"left",backgroundColor:"white", display:"inline-block", position:"absolute" ,zIndex:"1",width:"15rem",height:"auto",marginLeft:"13rem",marginTop:"-4rem",fontFamily:" 'Bitter', serif"}}>
            <h1 style={{paddingLeft:"1rem",paddingLeft:"0.8rem"}}>Activities</h1>
            <p style={{ paddingLeft:"1rem",color:"rgb(83, 83, 86)"}}>Discover<br></br>Quinta dos emerald</p>
           </div>
            <div style={{paddingTop:"0.5rem",paddingLeft:"0%",margin:"0%",marginTop:"2rem",marginBottom:"2rem"}} >
           
           <img src={require("./images/something.png")}style={{height:"18rem",width:"100%",paddingTop:"0px",opacity:""}}></img>
           </div>
           <div className='cardfrontscreen container'>
              <div className='row'>
                  <div className='col-sm-4'>
                      <MDBCard className='size'>
                          <MDBCardImage src='https://cdn.pixabay.com/photo/2020/12/24/19/11/hotel-room-5858069_640.jpg' position='top' alt='...' />
                          <MDBCardBody>
                              <MDBCardTitle style={{ fontFamily: "'Lobster', cursive", color: "white" }}>Designed for your pleasure</MDBCardTitle>
                              <MDBCardText style={{ fontFamily: "'Bitter', serif", }}>
                                  Let us pamper you with world-class facilities and impeccable attention to detail.
                              </MDBCardText>
                              {/* <MDBBtn href='#'>Button</MDBBtn> */}
                          </MDBCardBody>
                      </MDBCard>

                  </div>

                  <div className='col-sm-4'>
                      <MDBCard className='size'>
                          <MDBCardImage src='https://cdn.pixabay.com/photo/2017/05/23/07/37/hotel-2336469_1280.jpg' position='top' alt='...' />
                          <MDBCardBody >
                              <MDBCardTitle style={{ fontFamily: "'Lobster', cursive", color: "white" }}> Always Best For You!</MDBCardTitle>
                              <MDBCardText style={{ fontFamily: "'Bitter', serif" }}>
                                  Ignite your wanderlust with a stay at our uniquely designed, exquisitely furnished hotel.
                              </MDBCardText>
                              <form action='/home'>
                              <button href='/home' className='btnfrontscreen'style={{borderStyle:"none"}}>Explore Now</button>
                              </form>
                          </MDBCardBody>
                      </MDBCard>

                  </div>


                  <div className='col-sm-4'>
                      <MDBCard className='size'>
                          <MDBCardImage src='https://cdn.pixabay.com/photo/2020/12/24/19/08/hotel-room-5858067_640.jpg' position='top' alt='...' />
                          <MDBCardBody>
                              <MDBCardTitle style={{ fontFamily: "'Lobster', cursive ", color: "white" }}>Modest Location</MDBCardTitle>
                              <MDBCardText style={{ fontFamily: "'Bitter', serif" }}>
                                  Experience true tranquility and first-class service in the heart of destination.
                              </MDBCardText>
                              {/* <MDBBtn href='#'>Button</MDBBtn> */}
                          </MDBCardBody>
                      </MDBCard>

                  </div>


              </div>
          </div>
          <div><Footer/></div>

      </div>
  )
}

export default Frontscreen