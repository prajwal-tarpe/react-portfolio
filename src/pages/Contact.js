import React from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Arrow } from '../components';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

function Contact() {
  const { theme } = useThemeContext();

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className={`flex-col font-bold mb-8 md:mb-12 ${theme==='light'?'text-gray-900':'text-gray-100'}`}>
        <p className='text-lg text-center'>Get in touch
        </p>
        <h1 className='text-5xl text-center'> Contact me
          <p className={`${theme==='light'?'bg-gray-900':'bg-white'} h-0.5 mt-2`}></p>
        </h1>
      </div>
      <div className={`flex flex-col gap-6 items-center py-6 px-6 sm:px-10 rounded-lg border-2 ${theme==='dark'?'border-customBlue':'border-blue-500'} max-w-2xl`}>
        <div className='flex items-center gap-3'>
          <MdEmail className='text-2xl sm:text-3xl' />
          <a href='mailto:prajwaltarpe8@gmail.com'><span className='text-lg sm:text-xl hover:underline'>prajwaltarpe8@gmail.com</span></a>
        </div>
        <div className='flex items-center gap-3'>
          <FaLinkedinIn className='text-2xl sm:text-3xl' />
          <a href='https://www.linkedin.com/in/prajwal-tarpe/'><span className='text-lg sm:text-xl cursor-pointer hover:underline'>Linkedin</span></a>
        </div>
      </div>
      <div className='flex mt-8'>
        <NavLink to='/projects' className='flex-1 flex justify-center'>
          <Arrow direction={<IoIosArrowDropleft className='text-3xl sm:text-4xl' />} />
        </NavLink>
        <NavLink to='/' className='flex-1 flex justify-center'>
          <Arrow direction={<IoIosArrowDropright className='text-3xl sm:text-4xl' />} />
        </NavLink>
      </div>
    </div>
  );
}

export default Contact;
