import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    
    <nav className=' mb-20 flex item-center justify-between py-6'>
        <div className='flex flex-shrink-0 item-center'>
            <img className='m-2 w-10' src={logo} alt="" />

            
        </div> 

        <div className='m-8 flex items-center justify-center text-2xl gap-4'>
            <FaLinkedin/>
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar