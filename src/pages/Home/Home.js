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
          <h1 id='home-title-large'>Betti Angyan</h1>
        </Box>
      </div>
    </div>
  )
}

export default Home