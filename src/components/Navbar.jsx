import React, {useState} from 'react';
import Logo from "../assets/logo.png"

import {Link} from'react-scroll';

const Navbar = () => {

    const [nav, setNav]=useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

  
    const handleClick=() => setNav(!nav)
    
  return (
    <div className='flex justify-between items-center  h-24 bg-[#3D5A73]  mx-auto px-4 text-white uppercase'>


        <ul className=' hidden md:flex '>

            <li className='p-4'><Link onClick={handleClick} to="home" smooth={true} duration={400}> home </Link></li>
            <li className='p-4'><Link onClick={handleClick} to="about" smooth={true} duration={400}> about us </Link></li>
            <li className='p-4'><Link onClick={handleClick} to="team" smooth={true} duration={400}> team </Link></li>
            <li className='p-4'><Link onClick={handleClick} to="merchandise" smooth={true} duration={400}> merchadise </Link></li>
            <li className='p-4'><Link onClick={handleClick} to="contact" smooth={true} duration={400}> contact </Link></li>
        </ul>



        <div className='p-4'> <img   src={Logo} alt="Logo" style={{ width: "50px" }} />

  

        </div>
        <ul className={nav ? 'fixed md:hidden left-0 text-black top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFF] ease-in-out duration-500 ' : 'ease-in-out   duration-500 fixed left-[-100%]'}>
              <li className='p-4 border-b border-black'><Link onClick={handleClick} to="home" smooth={true} duration={400}> home </Link></li>
              <li className='p-4 border-b border-black'><Link onClick={handleClick} to="about" smooth={true} duration={400}> about </Link></li>
              <li className='p-4 border-b border-black'><Link onClick={handleClick} to="team" smooth={true} duration={400}> team </Link></li>
              <li className='p-4 border-black'><Link onClick={handleClick} to="merchandise" smooth={true} duration={400}> merchandise </Link></li>
              <li className='p-4'><Link onClick={handleClick} to="page" smooth={true} duration={400}> contact </Link></li>
            </ul>
 

        </div>
        



    
  )
}

export default Navbar