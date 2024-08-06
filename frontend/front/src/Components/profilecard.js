 import React,{useEffect,useState} from 'react'
 import axios from 'axios';
 function ProfileCard() {
  const [prod,setprod]=useState();
let headers={Authentication:"Bearer ca5153513e191743cac77494ec9828321bb2b62d58b92a2938b46e91da6f7fe5761e8a670a129fbb821d34168949de602ecddb7dfc8f95bc296fa64e6d29c1b02a44aff12ae55a5c518c69c357b365176d800a2207ec453effd3cd2fb01a91f7e83367b59585d4d83bee1b7ff7d819d22dbed9ac33ebf621557995794c71a2d0"}
  
useEffect(()=>{
  (async()=>{
    
    try {
      const res = (await axios.get('http://localhost:1337/api/products?populate=*')).data
      console.log(res.data)
      // const repo = await JSON.stringify(res.data);
      await setprod(res);
      console.log(prod)
    } 
    catch (error) {
      console.log(error)    
    }
    
    
}) ()
},[])

   return (
     <div>hii</div>
   )
 }
 
 export default ProfileCard