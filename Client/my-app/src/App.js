
import { Toaster } from 'react-hot-toast';
import Router from './Router';
import axios from 'axios';
import { userContext, } from './Context/Userconext';
import { useEffect, useState} from 'react';
import { movieContext } from './Context/Moviecontext';
import { useContext } from 'react';

function App() {
  const {setUser}=useContext(userContext)
  const {setMovies}=useContext(movieContext)
  const [admin,setAdmin]=useState(false)
  useEffect(()=>{
    var token=localStorage.getItem('usertoken');
    axios.get('http://localhost:8000/getuser',{
      headers:{
        Authorization:token
      }
    }).then((res)=>{
      setUser(res.data.user)
      if(res.data.user.isAdmin){
        setAdmin(true)
      }
      console.log(res.data.user);
      // console.log(res.data.user);
    }).catch((err)=>{
      console.log(err.message);
      
    })
   
    }
    ,[setUser]);
    useEffect(()=>{
      axios.get('http://localhost:8000/admin/getmovies').then((movies)=>{
         setMovies(movies.data)
         console.log(movies.data);
      }).catch((err)=>{
          console.log(err.message);
      })
    },[setMovies])

  return (
    <div className="App">
     
     <Router admin={admin}/>
   <Toaster/>
   
     
   
    </div>
  );
}

export default App;
