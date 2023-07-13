import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Messages.css'
function Messages() {
  const [messages,setMessages]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/admin/getmessages').then((res)=>{
      setMessages(res.data)
    })
  },[])
  console.log(messages);
  return (
    <div className='container' style={{marginTop:'150px'}}>
        <div className="row">
            <div className="col-md-6 col-xs-12">
                
            
 
      {messages.map((Message,index)=>{
        return(
          <div className='message-box'>
         <div className="name">
          {Message.name}
         </div>
         <div className="email">
         {Message.email}
         </div>
         <div className="message">
          {Message.message}
         </div>
         <div className="date-time">
         <i> {Message.date},{Message.time}</i>
         </div>
         </div>
        )
      })}
 
  
 
                
            </div>

        </div>

    </div>
  )
}

export default Messages