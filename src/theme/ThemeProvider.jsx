import React,{createContext,useState} from 'react'


    // ThemeContext.js
export const ThemeContext = createContext();

const ThimeProvider = ({children}) => {

  const [theme, setTheme] = useState('light');

  function toggleTheme(){
  setTheme(prev => prev == 'light' ? 'dark' : 'light');
  }

    

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export default ThimeProvider
