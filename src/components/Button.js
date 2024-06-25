import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

function Button({ prop }) {
  const { theme } = useThemeContext();

  return (
    <button 
      className={`font-semibold text-sm md:text-lg py-1 px-3 md:px-4 rounded-lg my-3 mx-1 border-2 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-customBlue text-gray-900 border-white' 
          : 'bg-blue-600 text-white border-blue-300 hover:bg-blue-700 hover:border-blue-500'
      }`}
    >
      {prop}
    </button>
  );
}

export default Button;
