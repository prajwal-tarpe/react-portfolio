import React,{useState,useEffect} from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { CiLight, CiDark } from "react-icons/ci";

function Theme() {
    const {theme,setLightMode,setDarkMode} = useThemeContext();
    const [transitionClass, setTransitionClass] = useState('');

  useEffect(() => {
    if (theme) {
      setTransitionClass('transform transition-transform duration-300 ease-in-out rotate-180');
      setTimeout(() => {
        setTransitionClass('');
      }, 300);
    }
  }, [theme]);
  const handleClick = () => {
    if(theme==='light') setDarkMode()
    else setLightMode()
  }
  console.log(theme);

  return (
    <button
      className='text-2xl p-1 font-bold border-2 rounded-full'
      onClick={handleClick}
    >
      {theme === 'light' ? (
        <CiLight className={`${transitionClass}`} />
      ) : (
        <CiDark/>
      )}
    </button>
  )
}

export default Theme