// IMPORTS 
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

// GLOBAL VARIABLES 
const pages = ['about', 'contact'];

// NAVBAR
const ResponsiveAppBar = () => {

  //STATES
  const [open, setOpen] = useState(false); 

  return (
    <AppBar position="fixed" elevation={0} style={{background: 'transparent'}}>
      <Container maxWidth="7xl">
        <Toolbar disableGutters>
          {/* SMALL SCREENS */}
          <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton>
              <MenuIcon style={{fill: 'white'}} fontSize='large' onClick={() => setOpen(true)}/>
            </IconButton>
            <SwipeableDrawer anchor='left' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <IconButton>
                    <ChevronLeftIcon onClick={() => setOpen(false)}/>
                  </IconButton>
                </div>
                <Button sx={{ my: 2, color: 'black', display: 'block', '&:hover': {background: '#FFD9DA'}, margin: 2}}>
                  <Link style={{textDecoration: 'none', color: 'black'}} to={`/`}>HOME</Link>
                </Button>
                {pages.map((page) => (
                  <Button key={page} sx={{ my: 2, color: 'black', display: 'block', '&:hover': {background: '#FFD9DA'}, margin: 2}}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to={`/${page}`}>{page}</Link>
                  </Button>
            ))}
            </SwipeableDrawer>
          </Box>
          {/* NORMAL - LARGE SCREENS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end'}}}>
              <Button sx={{ my: 2, color: 'black', display: 'block', '&:hover': {background: 'black'}, margin: 2}}>
                <Link style={{textDecoration: 'none', color: 'white'}} to={`/`}>HOME</Link>
              </Button>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: 'black', display: 'block', '&:hover': {background: 'black'}, margin: 2}}>
                <Link style={{textDecoration: 'none', color: 'white'}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;