import React from 'react';
import { Arrow, Skill, skillsData} from '../components';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { useThemeContext } from '../context/ThemeContext';

function Skills() {
  const { theme } = useThemeContext();

  const problemSolvingData = [
    {
      name: 'Leetcode',
      image: '/Leetcode.webp',
      path: 'https://leetcode.com/u/CodeQuester_23/'
    },
    {
      name: 'GFG',
      image: '/gfg.png',
      path: 'https://www.geeksforgeeks.org/user/prajwalhx8n/'
    },
    {
      name: 'HackerRank',
      image: '/hackerRank.webp',
      path: 'https://leetcode.com/u/CodeQuester_23/'
    }
  ]

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

        <div className='flex flex-col items-center gap-4 mt-8 w-full'>
          <p className={`font-bold text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            Problem Solving (DSA)
            <p className={`${theme==='light'?'bg-gray-900':'bg-white'} h-0.5 mt-2`}></p>
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            {problemSolvingData.map((platform) => (
              <a
                key={platform.name}
                href={platform.path}
                aria-label={platform.name}
                className={`rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg p-3 m-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  className='w-full h-28 rounded-lg mb-4 aspect-square object-contain'
                />
                <div className={`text-center font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {platform.name}
                </div>
              </a>
            ))}
          </div>
        </div>
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