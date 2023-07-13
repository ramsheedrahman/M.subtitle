import React, { useContext} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Viewmovie.css'
import { movieContext } from '../../Context/Moviecontext';

function Viewmovies() {
  const {movies}=useContext(movieContext)
  console.log(movies);
 
    
  return (
   
    <div style={{marginTop:'100px',color:'white'}} class="container ">
      <div className="row">
      <div className="button ">
      <Link to="/admin/addmovies "> <button className="btn btn-success">Add Movies</button> </Link>
      </div>
      </div>
  
     

     <div className="row m-3">
      <div className="col-md-12 col-xs-12" >
  <table className="table"  >
    
    <thead >
      <tr>
        <th className='table-light' scope="col">No</th>
        <th className='table-light' scope="col">Name</th>
        <th className='table-light' scope="col">Year</th>
        <th className='table-light' scope="col">Language</th>
        <th className='table-light' scope="col">Review</th>
        <th className='table-light' scope="col">Genre</th>
        <th className='table-light' scope="col">Image</th>
        <th className='table-light' scope="col">Edit</th>
        <th className='table-light' scope="col">Delete</th>
        
        
        
         
      </tr>
    </thead>
        <tbody >
            
                {movies.map((Movies,index)=>{
                  return(
                    <tr>
                    <td className='table-dark'>{index+1}</td>         
                    <td className='table-dark' style={{maxWidth:'100px'}}>{Movies.name}</td>
                    <td className='table-dark'>{Movies.year}</td>
                    <td className='table-dark'>{Movies.language}</td>
                    <td className='table-dark review' style={{maxWidth:'250px'}}>{Movies.review}</td>
                    <td className='table-dark' style={{maxWidth:'100px'}}>{Movies.genre}</td>
                    <td className='table-dark' ><img style={{width:'60px',height:'80px',border:'none'}} src={"http://localhost:8000/admin/image/"+Movies._id} alt="" /></td>
            
                    <td  className='table-dark' style={{border:'none'}}><a href={'/admin/editmovies/'+Movies._id}><button className='btn btn-primary'>Edit</button></a></td>
                    <td className='table-dark' > <button onClick={()=>{
                      axios.delete("http://localhost:8000/admin/deletemovie/"+Movies._id)
                    }}  className='btn btn-danger'> Delete</button></td>
           
                    
                    </tr>
                  )
               
            })}
        </tbody>
  </table>
  </div>
  </div>
  </div>
  )
}

export default Viewmovies