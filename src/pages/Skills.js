import React from 'react';
import { Arrow, Skill, skillsData } from '../components';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { useThemeContext } from '../context/ThemeContext';

function Skills() {
  const { theme } = useThemeContext();

  return (
    <div className={` min-h-screen flex flex-col justify-center items-center p-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className={`flex-col font-bold mt-28 md:mt-20 ${theme==='light'?'text-gray-900':'text-gray-100'}`}>
        <p className='text-lg text-center'>Explore my</p>
        <h1 className='text-5xl text-center'> Skills
          <p className={`${theme==='light'?'bg-gray-900':'bg-white'} h-0.5 mt-2`}></p>
        </h1>
      </div>
      <div className='w-full max-w-5xl flex flex-wrap justify-center gap-6 p-4 mt-24 md:mt-12'>
        {skillsData.map((skill) => (
          <Skill key={skill.id} name={skill.name} image={skill.image} />
        ))}
      </div>

      <div className='flex mt-8'>
        <NavLink to='/about' className='mr-4'>
          <Arrow direction={<IoIosArrowDropleft />} />
        </NavLink>
        <NavLink to='/projects'>
          <Arrow direction={<IoIosArrowDropright />} />
        </NavLink>
      </div>
    </div>
  );
}

export default Skills;