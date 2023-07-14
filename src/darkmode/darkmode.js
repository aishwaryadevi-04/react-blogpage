import React from 'react';
import './darkmode.css'
const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
