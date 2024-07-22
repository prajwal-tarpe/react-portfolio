import React from 'react';
import { Arrow } from '../components';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

function About() {
  const { theme } = useThemeContext();

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen p-5 ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className={`flex-col font-bold mb-4 mt-32 md:mt-20 ${theme==='light'?'text-gray-900':'text-gray-100'}`}>
        <p className='text-lg text-center'>Get to know more</p>
        <h1 className='text-5xl text-center'> About me
          <p className={`${theme==='light'?'bg-gray-900':'bg-white'} h-0.5 mt-2`}></p>
        </h1>
      </div>
      <div className={`max-w-3xl text-xl font-semibold leading-relaxed border-3 p-8 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <p>
          Hi, I'm Prajwal Tarpe, a final-year IT ( Information Techonology ) student at Prof. Ram Meghe Institute of Technology & Research, Badnera, Amravati. I'm deeply passionate about <span className={theme === 'dark' ? 'text-customBlue' : 'text-blue-700'}>Full Stack Development</span>, blending strong theoretical knowledge with practical skills in <span className={theme === 'dark' ? 'text-customBlue' : 'text-blue-700'}>Data Structures and Algorithms</span>.
        </p>
        <p className='mt-4'>
          I thrive on creating innovative applications and am excited to contribute to the dynamic world of software development. Let's collaborate and create something extraordinary together!
        </p>
      </div>
      <div className='flex mt-4'>
        <NavLink to='/' className='mr-4'><Arrow direction={<IoIosArrowDropleft />} /></NavLink>
        <NavLink to='/skills'><Arrow direction={<IoIosArrowDropright />} /></NavLink>
      </div>
    </div>
  );
}

export default About;
