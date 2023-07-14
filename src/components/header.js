import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home'
import '../darkmode/darkmode.css'
const PrimarySearchAppBar = ({ isDarkMode, toggleDarkMode }) => {

  const navigator = useNavigate();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });
 
  const handleClick = () => {
   
    navigator('/add');
  };


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2 }}
              onClick={() => navigator('/')}
            >
              <HomeIcon />
            </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: {  sm: 'block' } }}
          >
           MY  BLOG APP 
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="large" color="inherit" onClick={handleClick}>
            <AddCircleOutlineIcon />
          </IconButton>
        
          <button className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
       
        </Toolbar>
      </AppBar>
     
    
    </Box>
    </ThemeProvider>
   
  );
 
};

export default PrimarySearchAppBar;
