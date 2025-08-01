import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import {FaTimes,FaBars} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
  
  return (
    <div className='navbar flex items-center justify-between p-4 z-[100] w-full absolute'>
       <Link to='/'><h1 className='text-black-600 text-4xl font-bold cursor-pointer'>NETLFIX MOVIES</h1></Link>         
        
    </div>
  )
}

export default Navbar