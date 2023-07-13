import React from 'react'
import { Navigate } from 'react-router-dom';

function UserProtected({User,children}) {
  
  if (!User) {
    return <Navigate replace to="/login"></Navigate>
  }
    else{
      return children
    }
  
    
  
}

export default UserProtected