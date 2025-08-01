import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import './Row.css'

const Row = ({title, fetchURL,rowid}) => {

    const[movies,setMovies]=useState([])
   

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        }) 
    },[fetchURL])
    // console.log(movies)
    const slideLeft=()=>{
        var slider=document.getElementById('slider'+ rowid)
        slider.scrollLeft=slider.scrollLeft-500
    }
    const slideRight=()=>{
        var slider=document.getElementById('slider' + rowid)
        slider.scrollLeft=slider.scrollLeft+500
    }
return (
      <div className='row'>
       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
       <div className="relative flex items-center">
           <FaChevronLeft 
           onClick={slideLeft}
           />
        <div id={'slider' + rowid} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,id)=>(
                <Movie item={item} key={item.id}/>   
        ))}
        </div>
        <FaChevronRight onClick={slideRight}/>
    </div>
    <hr />
    </div>
  )
}

export default Row