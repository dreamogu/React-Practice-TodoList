import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function updateDarkMode(darkMode) {
  if (darkMode) {
    //darkmode 인 경우에 html 태그에 dark class 추가하기
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    console.log(localStorage.theme);
  } else {
    console.clear();
    console.log(localStorage.theme);
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
