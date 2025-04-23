import React, { createContext, useState, useEffect } from 'react';

// Theme definitions
export const themes = {
  dark: {
    name: 'dark',
    background: '#121212',
    backgroundSecondary: '#1E1E1E',
    glassBackground: 'rgba(30, 30, 30, 0.7)',
    glassBackgroundHover: 'rgba(40, 40, 40, 0.8)',
    text: '#F8F9FA',
    textSecondary: '#ADB5BD',
    accent: '#61DAFB', // React blue
    accent2: '#764ABC', // Redux purple
    accentRGB: '97, 218, 251', // React blue in RGB
    accent2RGB: '118, 74, 188', // Redux purple in RGB
    gridColor: '97, 218, 251',
    dotsColor: '118, 74, 188',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
    navBackground: 'rgba(18, 18, 18, 0.8)',
    cardBackground: 'rgba(30, 30, 30, 1)',
    codeBackground: '#2D2D2D',
    scrollbarTrack: '#2D2D2D',
    scrollbarThumb: '#444444',
    scrollbarThumbHover: '#555555',
  },
  light: {
    name: 'light',
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    glassBackground: 'rgba(248, 249, 250, 0.7)',
    glassBackgroundHover: 'rgba(248, 249, 250, 0.9)',
    text: '#212529',
    textSecondary: '#6C757D',
    accent: '#007BFF', // Primary blue
    accent2: '#6610F2', // Secondary purple
    accentRGB: '0, 123, 255', // Primary blue in RGB
    accent2RGB: '102, 16, 242', // Secondary purple in RGB
    gridColor: '0, 123, 255',
    dotsColor: '102, 16, 242',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    navBackground: 'rgba(255, 255, 255, 0.8)',
    cardBackground: 'rgba(255, 255, 255, 1)',
    codeBackground: '#F1F3F5',
    scrollbarTrack: '#F1F3F5',
    scrollbarThumb: '#CED4DA',
    scrollbarThumbHover: '#ADB5BD',
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('theme') || 'dark'
  );
  
  const theme = themes[themeMode];
  
  const toggleTheme = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  useEffect(() => {
    // Apply theme variables to CSS root
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}; 