import React,{useState} from 'react'
import GridLoader from "react-spinners/GridLoader";
import './navbar.css'

function Loader() {
    
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#abf000");
  return (<div className="sweet-loading loadicon" style={{marginTop:"10%"}}>
      
      <GridLoader
        color={color}
        loading={loading}
        // css={{marginTop:"50%"}}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
 </div>
  )
};

export default Loader;