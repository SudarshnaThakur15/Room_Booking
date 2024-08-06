import React ,{useState} from 'react'
//import * from'./images' 
import { Link } from 'react-router-dom';
import './navbar.css'
import { Modal,Button,Carousel } from 'react-bootstrap';
function Rooms({room,fromdate,todate}) {
  const ra=room.imageurls[0]+".jpg";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row eachrow  ">
      <div className='col-md-4 eachimgcol'>
     <img src={require(`${room.imageurls[0]+".jpg"}`)} alt = " yt"  width="100" height="100" className='simg' />
      </div>
      <div className='col-md-8 eachcol'>
      <p><span>{room.name}</span> </p>
       <p>Capacity :{room.maxcount}</p>
       <p>Type  :{room.typeofroom}</p>
       <p>Cost:{room.rentpernight}</p>
       <div>


        {(fromdate)&&(todate)&&
        (
        <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
       <button type="submit" className='btn btn-outline-success my-2 my-sm-0 bookButton'>BOOK NOW</button>
        </Link>

        )}
       <button type="submit" className='btn btn-outline-success my-2 my-sm-0 bookButton'onClick={handleShow}>View Details</button>
       </div>
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <div className='Modal'>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel='' >

            {room.imageurls.map(url=>{
               return(
               <Carousel.Item>
                 
                 <img className='d-block w-100 bigimg' src={require(`${url+".jpg"}`)} />
                 
               </Carousel.Item>)
            }
            
              )}
           
           
            
          </Carousel>
          <p>{room.discription}</p>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='closebutton' onClick={handleClose}>
             Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default Rooms;
