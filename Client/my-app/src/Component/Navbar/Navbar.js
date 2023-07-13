import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import { Link } from 'react-router-dom'

import { useNavigation } from 'react-router-dom';
import { userContext } from '../../Context/Userconext';


function Navbar() {
  const {user}=useContext(userContext)
  const logout = () => {
    localStorage.clear()
  }
  
 

 
  return (

      <nav class="navbar navbar-expand-lg bg-dark fixed-top">
  <div class="container-fluid">
    <h1 class="navbar-brand" href="#">Msub</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="#navbarNav"  aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item-active">
          <Link to='/' class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        
        <li class="nav-item-active">
          <Link to='/submovies' class="nav-link" >Subtitles</Link>
        </li>
        <li class="nav-item-active">
        <Link to='/contact' class="nav-link" href="#">Contact Us</Link>
        </li>
        
        
        {/* <li class="nav-item" id='loginn'>
          <button class='btn btn-secondary ' type='submit'>Login</button>
        </li> */}
      
      {/* /* <div class="d-flex">
        <Link to='/login' class="btn btn-light"     type="submit">Login</Link>
      </div> */ }
    
    <li className='Drop-down'>
      {user?
    <Dropdown>
      <Dropdown.Toggle className='btn-btn primary' id="dropdown-basic">
        {user.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  className='btn-btn primary' onClick={logout}>Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown> 
  :
    <div class="d-flex">
        <Link to='/login' class="btn btn-light"     type="submit">Login</Link>
      </div>  
}
      </li>
    </ul>
    </div>
  </div>
</nav>

  
  )
    }

export default Navbar