import React, { useState } from 'react'
import './signin.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 
function Signin(){
  const [userinfo,setUserinfo]=useState()
  const navigate=useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit=(data)=>{
  axios.post('http://localhost:8000/register',data)
  toast.success('Registartion Success')
  navigate('/login')
 setUserinfo(data)
}
console.log(errors);
  return(
    <div className="container-fluid">
      <div className="form row d-flex justify-content-center">
      <div className="col-md-4 col-xs-1"></div>
        <div className="col-md-4 col-xs-10 form-div">
          <div className="form-div"></div>
        <form action="/signup" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
        <label>Name</label>
        <input type="text" class="form-control" id="exampleInputPassword1" name="name"
         {...register("name", {
           required:'name is required', minLength:{value:3,message:'name must be more than 3 charaters'}, maxLength:{value:20,message:'name must be less than 20 charaters'}})}/>
         {errors.name &&
          <div className='text-danger'>{errors.name.message}</div>
           }
      </div>
        <div className="mb-3">
        <label>Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" 
        {...register("email", { required: true } )}/>
        {errors.email &&
      <div className='text-danger'>This field is required </div>
       }
        </div>
        <div className="mb-3">
        <label>Mobile Number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="mobilenumber"
        {...register("mobilenumber", { required: true })}/>

{errors.mobilenumber &&
      <div className='text-danger'>This field is required </div>
       }
        </div>
      
      <div class="mb-3">
        <label>Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name="password"
        {...register("password", { required:'This field is required',minLength:{value:8,message:'password must be minium 8 characters'}})}/>
         {errors.password &&
      <div className='text-danger'>{errors.password.message} </div>
       }
      </div>
     
       
    
        
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        </div>
        <div className="col-md-4 col-xs-1"></div>
      </div>
    </div>
  )
}
  


  

    


export default Signin