import React, { useState } from 'react'
import './Login.css';
import axios from 'axios'
import { useForm } from "react-hook-form";
import {useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const [errmsg,setErrmsg]=useState('')
  const navigate=useNavigate()
  const { register, handleSubmit} = useForm();
  const onSubmit=(data)=>{
  
    axios.post('http://localhost:8000/login',data).then((res)=>{
      const token=res.data.token
      if(token){
        localStorage.setItem("usertoken",token)
        console.log(res);
        navigate('/')
      }
      else{
       setErrmsg(res.data.message);
       toast.error(errmsg)
      }
     

  })
  }
 
  return (
  
    <div class='logincontainer'>

        <div className="row">
          <div className="col-xs-1 col-md-4"></div>

            <div className="col-xs-10 col-md-4 mx-3">
              <div className="head d-flex justify-content-center ">
               <h1>Login Form </h1>
              </div>
            <div class="loginform">
               <form onSubmit={handleSubmit(onSubmit)}>
               <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
    {...register('email',{required:true})}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password"
    {...register('password',{required:true})}/>
  </div>
  
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<div>

</div>

<div class="sign">
    <p>Not a Member? <a href="/signup">Sign Up</a></p>
</div>
            
        </div>
        <div className="col-xs-1 col-md-4"></div>
        
    </div>
    
 
</div>
              
               
  )
}

export default Login