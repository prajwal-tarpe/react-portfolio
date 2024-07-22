import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Button, Arrow } from '../components/index';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

function Home() {
  const { theme} = useThemeContext();
  const [text] = useTypewriter({
    words: ['frontend developer', 'DSA enthusiast'],
    loop: 0,
  });

  return (
    <div className={`flex flex-col md:flex-row justify-between items-center min-h-screen p-5 ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className={`fixed top-1/3 left-2 flex flex-col gap-3 md:gap-4 p-2 md:p-3 ml-2 ${theme === 'dark' ? 'bg-gray-800 shadow-gray-700' : 'bg-white shadow-lg'} rounded-lg border-2`}>
        <a className='text-2xl md:text-3xl cursor-pointer' href='https://github.com/prajwal-tarpe'><FaGithub /></a>
        <a className='text-2xl md:text-3xl cursor-pointer' href='https://www.linkedin.com/in/prajwal-tarpe'><FaLinkedin /></a>
        <a className='text-2xl md:text-3xl cursor-pointer' href='https://www.instagram.com/tarpe_prajwal/'><FaInstagram /></a>
      </div>
      <div className='flex flex-col justify-center items-center flex-grow mt-20 md:mt-8'>
        <p className='text-xl sm:text-2xl font-semibold mb-2 text-center'>Hello, I am</p>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${theme === 'dark' ? 'text-white' : 'text-blue-600'} font-bold mb-4 text-center`}>Prajwal Tarpe</h1>
        <div className='text-lg sm:text-xl font-semibold mb-4 text-center'>
          And I'm a <span className={theme === 'dark' ? 'text-customBlue' : 'text-blue-500'}><span>{text}</span><Cursor /></span>
        </div>
        <p className='text-center text-base sm:text-lg max-w-2xl'>
          Ambitious & versatile technology enthusiast with a passion for exploring new tech stacks. 
          Skilled in web development, with a focus on problem-solving and a desire to innovate.
        </p>
        <div className='flex gap-4'>
          <Button prop={'Resume'} />
          <NavLink to='/contact'><Button prop={'Contact'} /></NavLink>
        </div>
        <div className='flex gap-4 mt-4'>
          <NavLink to='/contact'><Arrow direction={<IoIosArrowDropleft />} /></NavLink>
          <NavLink to='/about'><Arrow direction={<IoIosArrowDropright />} /></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
