import React from 'react';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import Theme from './Theme';

function Nav() {
  const { theme } = useThemeContext();

  return (
    <div className='flex justify-center z-50 w-full fixed top-5'>
      <div className={`flex flex-wrap justify-center items-center text-lg sm:text-xl font-bold gap-3 sm:gap-5 p-3 sm:p-4 border-2 w-11/12 sm:w-2/3 lg:w-1/3 rounded-full shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? `${theme === 'dark' ? 'text-white' : 'text-blue-500'}` : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-blue-500'} transition-colors duration-300`
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? `${theme === 'dark' ? 'text-white' : 'text-blue-500'}` : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-blue-500'} transition-colors duration-300`
          }
        >
          About
        </NavLink>
        <NavLink
          to='/skills'
          className={({ isActive }) =>
            isActive ? `${theme === 'dark' ? 'text-white' : 'text-blue-500'}` : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-blue-500'} transition-colors duration-300`
          }
        >
          Skills
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? `${theme === 'dark' ? 'text-white' : 'text-blue-500'}` : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-blue-500'} transition-colors duration-300`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? `${theme === 'dark' ? 'text-white' : 'text-blue-500'}` : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-blue-500'} transition-colors duration-300`
          }
        >
          Contact
        </NavLink>
        <Theme />
      </div>
    </div>
  );
}

export default Nav;
