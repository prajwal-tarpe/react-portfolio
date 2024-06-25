import React from 'react';
import Button from './Button';
import { useThemeContext } from '../context/ThemeContext';

function Project({ title, description, techonologies, screenshot, liveDemo, sourceCode }) {
  const { theme } = useThemeContext();

  return (
    <div className={`flex flex-col items-center p-4 shadow-lg rounded-lg w-full h-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'}`}>
      <img className="w-full h-48 object-cover rounded-t-lg" src={screenshot} alt={title} />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <ul className="mb-4">
          {techonologies.map((tech, index) => (
            <li key={index} className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex">
          <a className="text-blue-500 hover:underline" href={liveDemo} target="_blank" rel="noopener noreferrer"><Button prop={'Live Demo'} /></a>
          <a className="text-blue-500 hover:underline" href={sourceCode} target="_blank" rel="noopener noreferrer"><Button prop={'Source Code'} /></a>
        </div>
      </div>
    </div>
  );
}

export default Project;
