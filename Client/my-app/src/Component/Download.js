import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../Component/Download.css'
import DownloadButton from './DownloadButton'
function Download() {
    const [subMovies,setSubmovies]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        axios.get('http://localhost:8000/downloadpage/'+id).then((response)=>{
           setSubmovies(response.data)
        })
    },[id])

  return (
   <div className="container main">
    <div className="row  ">
        <div className="col-xs-1 col-md-2"></div>
        <div class="col-sm-10 col-md-8 d-flex justify-content-center ">
            <div className="moviediv">
         <div className="movieimg d-flex justify-content-center m-3">
         <img style={{width:'460px',height:'480px'}} src={"http://localhost:8000/admin/image/"+id} alt="" />
         </div>
         <div className='moviename d-flex justify-content-center m-3'>
         <h2>{subMovies.name}({subMovies.year})</h2>
         </div>
         <div className="moviereview d-flex justify-content-center m-3">
            <p>{subMovies.review}</p>
         </div>
            <div className="downloadbutton">
               <DownloadButton subid={id}></DownloadButton>
        
            </div>
            
            </div>
        
        
    </div>
    <div className="col-xs-1 col-md-2"></div>
   </div>
   </div>

  )
}

export default Download