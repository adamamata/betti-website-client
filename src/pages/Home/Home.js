import React from 'react';
import Box from '@mui/material/Box';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <div>
        {/* SMALL SCREENS */}
        <Box sx={{display: {xs: 'flex', md: 'none'}}}>

        </Box>
        {/* NORMAL - LARGE SCREENS */}
        <Box sx={{display: {xs: 'none', md: 'flex'}}} className='home-first-section-large' >
          <h1 style={{fontSize: '8vw', color: 'white', marginLeft: '5vw'}}>Betti Angyan</h1>
        </Box>
      </div>
    </div>
  )
}

export default Home