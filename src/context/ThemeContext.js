import { createContext, useContext,useEffect,useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    // const [theme,setTheme] = useState('light');
    const [theme,setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme?storedTheme:'light';
    });


    useEffect(() => {
        localStorage.setItem('theme',theme);
    },[theme])

    const setLightMode = () => setTheme('light');
    const setDarkMode = () => setTheme('dark');
    return <ThemeContext.Provider value={{theme,setLightMode,setDarkMode}}>{children}</ThemeContext.Provider>
}
export const useThemeContext = () => {
    return useContext(ThemeContext);
}
