import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

function Skill({ name, image }) {
  const { theme } = useThemeContext();

  return (
    <div className={`rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3 m-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <img src={image} alt={name} className='w-full h-28 rounded-lg mb-4 aspect-square object-contain' />
      <div className={`text-center font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{name}</div>
    </div>
  );
}

export default Skill;
