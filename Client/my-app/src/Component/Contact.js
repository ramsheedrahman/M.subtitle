import React, { useState } from 'react'
import axios from 'axios'
function Contact() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')
  const onChangeName=(e)=>{
    setName(e.target.value)
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onChangeSubject=(e)=>{
    setSubject(e.target.value)
  }
  const onChangeMessage=(e)=>{
    setMessage(e.target.value)
  }

const formSubmit=(e)=>{
    e.preventDefault();
   axios.post('http://localhost:8000/contact',{
    name,
    email,
    subject,
    message
   })
}

  return (
    <div style={{marginTop:'150px'}} class="row ">

    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" method="POST" >

           
            <div class="row">

              
                <div classNmae="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name"  onChange={onChangeName} value={name} class="form-control"/>
                        <label >Your name</label>
                    </div>
                </div>
               

               
                <div className="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" value={email} onChange={onChangeEmail} class="form-control"/>
                        <label >Your email</label>
                    </div>
                </div>
               

            </div>
            

           
            <div className="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" value={subject} onChange={onChangeSubject} class="form-control"/>
                        <label >Subject</label>
                    </div>
                </div>
            </div>
          
       
            <div class="row">

              
                <div class="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" value={message} rows="2" onChange={onChangeMessage} class="form-control md-textarea"></textarea>
                        <label >Your message</label>
                    </div>

                </div>
            </div>
            <div class="text-center text-md-left">
            <button type='submit' class="btn btn-primary" onClick={formSubmit}>Send</button>
        </div>
        <div class="status"></div>
          
        </form>
       
      
    </div>
  

    
    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Kannur,Kerala</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+919633864688</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>ramsheedk06@gmail.com</p>
            </li>
        </ul>
    </div>
 

</div>
  )

}

export default Contact