import React from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { Arrow, Project, projectData } from '../components';
import { useThemeContext } from '../context/ThemeContext';

function Projects() {
  const { theme } = useThemeContext();

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className={`flex-col font-bold mt-32 md:mt-24 ${theme==='light'?'text-gray-900':'text-gray-100'}`}>
        <p className='text-lg text-center'>Browse My</p>
        <h1 className='text-5xl text-center'> Projects
          <p className={`${theme==='light'?'bg-gray-900':'bg-white'} h-0.5 mt-2`}></p>
        </h1>
      </div>

      <div className='flex flex-wrap justify-center mt-9'>
        {projectData.map((project) => (
          <div key={project.id} className='w-full md:w-1/2 lg:w-1/3 p-2'>
            <Project 
              title={project.title} 
              description={project.description} 
              techonologies={project.techonologies} 
              screenshot={project.screenshot} 
              liveDemo={project.liveDemo} 
              sourceCode={project.sourceCode}
            />
          </div>
        ))}
      </div>
      <div className='flex'>
        <NavLink to='/skills' className='flex-1 flex justify-center'>
          <Arrow direction={<IoIosArrowDropleft />} />
        </NavLink>
        <NavLink to='/contact' className='flex-1 flex justify-center'>
          <Arrow direction={<IoIosArrowDropright />} />
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
