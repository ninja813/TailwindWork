import React, { useEffect } from 'react'
import { useState } from 'react'
import requests from '../Requests'
import axios from 'axios';
// import { UserAuth } from '../context/AuthContext';
import {arrayUnion, doc, updateDoc} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';


const Main = () => {
const [movies,setMovies]=useState([]);
const[saved,setSaved]=useState(false)


const movie= movies[Math.floor(Math.random()*movies.length)]
// const movie2=movies[Math.floor(Math.random()*movies.length)]
console.log(movie)

useEffect(()=>{
  // setPending(true)
    axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results)
    })
  // setPending(false)
},[])

  return (
    <>
      
    <div className='hero w-full h-[550px]  text-white'>
       <div className='hero2 w-full h-full'>
         <div className='overlay'></div>
            <img
            className='w-full h-full object-cover' 
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
            alt={movie?.title}
            />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div>
        <Link to='/redirect'><button className='border bg-black-100 text-white border-gray-300 py-2 px-5'>Play</button></Link>
         <button className='border text-white border-gray-300 py-2 px-5 ml-4'
        //  onClick={()=>saveShow(movie)}
         >Save Movie</button>
       </div>
       <p className='text-black-400 text-sm'>Released: {movie?.release_date}</p>
       <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{movie?.overview}</p>
    </div>
  </div>
</div>
    
</>
    
  )
}

export default Main