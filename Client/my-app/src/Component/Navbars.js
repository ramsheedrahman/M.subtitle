import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../Context/Userconext'
import AdminNavbr from './AdminComponents/AdminNavbr'
import Navbar from './Navbar/Navbar'
import axios from 'axios'
function Navbars() {
  const [admin,setAdmin]=useState()
  useEffect(()=>{
    var token=localStorage.getItem('usertoken');
    axios.get('http://localhost:8000/getuser',{
      headers:{
        Authorization:token
      }
    }).then((res)=>{
      if(res.data.user.isAdmin){
        setAdmin(true)
      }
      console.log(res.data.user);
      // console.log(res.data.user);
    }).catch((err)=>{
      console.log(err.message);
      
    })
   
    })
if(admin){
  return(
    <div>
     <AdminNavbr/>
    
    </div>
    )
}
else{
  return(
    <div>
     <Navbar/>
    
    </div>
    )
}



 


  
  

}

export default Navbars