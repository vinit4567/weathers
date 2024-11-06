import React, { useState } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
   <div
   style={{
    height : '100vh',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    backgroundColor : darkMode ? '#000' : '#fff',
    color : darkMode ? '#fff' : '#000'

   }}
   >
     <h1>Toggle to {darkMode ? 'Dark' : 'Light'}</h1>
     <button onClick={toggleTheme} style={{width : '100px' , height : '30px' , fontSize : '20px' }}>{darkMode ? 'Dark' : 'Light'}</button>
   </div>
  )
}

export default ThemeSwitcher;
