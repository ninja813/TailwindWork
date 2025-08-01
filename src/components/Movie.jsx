import React from 'react'
import {BiAddToQueue} from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom'




import {MdLibraryAddCheck} from 'react-icons/md'



const Movie = ({item,id}) => {
    const[like,setLike]=useState(false)
    const[saved,setSaved]=useState(false)
   
  return (
    <>
    <div className='one-movie w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2' >
              <Link to='/redirect'><img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}
                /></Link>  
                <div className='save'>
                    <p>
                        {!like? <BiAddToQueue className='absolute top-4 left-4 text-gray-300'/>:<MdLibraryAddCheck className='absolute top-4 left-4 text-gray-300'/>}
                    </p>
                </div>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title.length>10?`${item?.title.substring(0,15)}...`:item?.title}</p>
        </div>      
    </>
  )
}

export default Movie