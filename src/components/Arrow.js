import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

function Arrow({ direction }) {
  const {theme} = useThemeContext();
  return (
    <button className={`text-4xl my-8 mx-1 ${theme==='dark'?'text-gray-700':'text-gray-400'} hover:text-gray-800 focus:outline-none`}>
      {direction}
    </button>
  );
}

export default Arrow;
