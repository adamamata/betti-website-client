import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = ['about', 'work', 'contact'];

const ResponsiveAppBar = () => {
  return (
    <AppBar position="fixed" elevation={0} style={{background: 'transparent'}}>
      <Container maxWidth="7xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'flex-end' } }}>
              <Button sx={{ my: 2, color: 'black', display: 'block', '&:hover': {background: '#FFD9DA'}, margin: 2}}>
                <Link style={{textDecoration: 'none', color: 'black'}} to={`/`}>HOME</Link>
              </Button>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: 'black', display: 'block', '&:hover': {background: '#FFD9DA'}, margin: 2}}>
                <Link style={{textDecoration: 'none', color: 'black'}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;