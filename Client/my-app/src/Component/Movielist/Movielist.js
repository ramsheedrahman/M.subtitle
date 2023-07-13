import React, { useState } from 'react'
import './movielist.css'
import { userContext } from '../../Context/Userconext'
import { useContext } from 'react'
import { Link, useNavigation } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { movieContext } from '../../Context/Moviecontext'
function Movielist() {
 const {movies}=useContext(movieContext)
 const [currentPage,setcurrentPage]=useState(1)
 const recordsPerpage=8;
 const lastIndex=currentPage * recordsPerpage;
 const firstIndex=lastIndex - recordsPerpage;
 const records=movies.slice(firstIndex,lastIndex);
 const numberofPage=Math.ceil(movies.length/recordsPerpage);
 const numbers=[...Array(movies+1).keys()].slice(1)

 console.log(movies);
 const keys=["name","year"]
const [key,setKey]=useState('')
const keyChangeEvent=(e)=>{
    setKey(e.target.value)
  }
 const searchMovies= records.filter((movie)=>{
if(key===""){
    return movie
  }else{
    return Object.keys(movie).some(keys=>{
      return movie[keys].toString().toLowerCase().includes(key.toLowerCase())
    })
  }
 })
  const Prepage=()=>{
    if(currentPage !== firstIndex){
      setcurrentPage(currentPage-1)
    }
  }
  const Nextpage=()=>{
    if(currentPage !== lastIndex){
      setcurrentPage(currentPage+1)
    }
  }
  const changeCurrentpage=(n)=>{
     setcurrentPage(n)
  }
  return (
  
    <div className="container-fluid movielist">
      <div style={{marginTop:'6%'}} className="row d-flex justify-content-end" >
      <div className='col-md-4 col-xs-12'>
     
        <input class="form-control me-2" onChange={keyChangeEvent} type="text" value={key} name='key' placeholder="Search" aria-label="Search"/>
       
      
     </div>
      </div>
     
    <div className="row">

      {searchMovies.map((Movies,index)=>{
        return(
          <div className="col-md-3">
          <div class="card">
            <Link to={'/subdownloadpage/'+Movies._id}> <img class="card-img-top"src={"http://localhost:8000/admin/image/"+Movies._id} alt="Card cap" /></Link> 
              <div class="card-body">
    
                <p class="card-text">{Movies.name} ({Movies.year})</p>
    
              </div>
            </div>
          </div>
        )
      
      })}

<nav aria-label="Page navigation example " className='m-5'>
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" onClick={Prepage}>Prev</a></li>
    {
      numbers.map((n,i)=>(
        <li class={`page-item ${currentPage===n? 'active' : ''}`}>
          <a class="page-link" href="#" onClick={changeCurrentpage(n)}>{n}</a></li>
      ))
    }
    
    <li class="page-item"><a class="page-link" href="#" onClick={Nextpage}>Next</a></li>
  </ul>
</nav>
      
    </div>
   </div>


  )
}

export default Movielist