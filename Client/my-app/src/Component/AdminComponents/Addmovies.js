import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom';
function Addmovies() {
    const navigate=useNavigate()
   const [name ,setname]=useState('')
   const [year ,setyear]=useState('')
   const [review ,setreview]=useState('')
   const [language ,setlanguage]=useState('')
   const [genre ,setgenre]=useState('')
   const [image, setimage]=useState(null)
   const[subtitle,setsubtitle]=useState(null)


   function nameHandler(e){
    setname(
   
     e.target.value,


    )
   }

   
   function yearHandler(e){
    setyear(
   
       
    e.target.value,
       

    )
   }
   
   function reviewHandler(e){
    setreview(
   
        
        e.target.value

    )
   }
   function languageHandler(e){
    setlanguage(
   
        
        e.target.value

    )
   }
   function genreHandler(e){
    setgenre(
   
        
        e.target.value

    )
   }
   let formdata=new FormData()
   formdata.append('name',name)
   formdata.append('year',year)
   formdata.append('genre',genre)
   formdata.append('language',language)
   formdata.append('review',review)
   formdata.append('subtitle',subtitle)
   formdata.append('image',image)

    const formSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/admin/addmovies',
            formdata ).then(res=>{
                console.log('res',res)
                
            })
        //   name:e.target.name.value,
        //   year:e.target.year.value,
        //   review:e.target.review.value,
        //   image:e.target.image.files[0],
        //   subtitle:e.target.subtitle.files[0]
      
        navigate('/viewmovies')
          
    
        }
   
  
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-sm-1 col-md-3"></div>
                <div className="col-sm-10 col-md-6">
                    <div class="container p-5">
                        <form  onSubmit={formSubmit}>
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label>Movie Name</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" name="name" onChange={nameHandler} value={name}/>
                                </div>
                                <label>Movie Relese Year</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="year" onChange={yearHandler} value={year} />

                            </div>
                            <div class="mb-3">
                                <label>Movie Review</label>
                                <textarea rows="4" cols="50" type="text" class="form-control" id="exampleInputPassword1" name="review" onChange={reviewHandler}  value={review} />
                            </div>
                            <div class="mb-3">
                                <label>Language</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" name="language" onChange={languageHandler}  value={language} />
                            </div>
                            <div class="mb-3">
                                <label>Genre</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" name="genre" onChange={genreHandler}  value={genre} />
                            </div>
                            <div class="mb-3">
                                <label>Subtitle</label>
                                <input type="file" class="form-control" id="exampleInputPassword1" name="subtitle" onChange={(e)=> setsubtitle(e.target.files[0])}   />
                            </div>
                            <div class="mb-3">
                                <label>Movie Poster</label>
                                <input type="file" class="form-control" id="exampleInputPassword1" name="image"  onChange={(e)=> setimage(e.target.files[0])}   />
                            </div>



                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-sm-1 col-md-3"></div>
            </div>
        </div>

    )
}

export default Addmovies