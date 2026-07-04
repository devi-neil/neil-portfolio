import React, { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isGameMode, setIsGameMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isGameMode) {
      root.classList.add('game-mode');
      document.body.classList.add('game-mode');
    } else {
      root.classList.remove('game-mode');
      document.body.classList.remove('game-mode');
    }
  }, [isGameMode]);

  const toggleGameMode = () => {
    setIsGameMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isGameMode, toggleGameMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
