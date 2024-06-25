import React from 'react';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

function Footer() {
  const { theme } = useThemeContext();

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className={`bg-${theme === 'dark' ? 'gray-800 text-white' : 'gray-100'} p-4 py-6 flex flex-col items-center`}>
      <div className='flex flex-wrap justify-center gap-4'>
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={`text-lg font-semibold py-2 px-4 rounded transition-colors duration-300 ${theme === 'dark' ? 'hover:text-white hover:bg-gray-700' : 'hover:text-blue-500 hover:bg-gray-200'}`}
            activeClassName={`bg-${theme === 'dark' ? 'gray-700 text-white' : 'gray-200'}`}
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <div className={`mt-5 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        Copyright © 2024 Prajwal Tarpe. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
