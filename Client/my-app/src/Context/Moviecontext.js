import {  createContext, useState } from "react";
export const movieContext=createContext()

export default function Moviecontext({children}){
   const [movies,setMovies]=useState([])
    return(
        <movieContext.Provider value={{movies,setMovies}}>
          {children}
        </movieContext.Provider>
    )
}