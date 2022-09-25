import React from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import './Home.css';

function Home() {
  const work = useRef(null);
  const top = useRef(null);

  const scroll = (e) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <div className='Home'>
        {/* SMALL SCREENS */}
        {/* TOP SECTION */}
        <Box sx={{display: {xs: 'flex', md: 'none'}}} className='home-top-small'>
        </Box>

        {/* NORMAL - LARGE SCREENS */}
        {/* TOP SECTION */}
        <Box sx={{display: {xs: 'none', md: 'flex'}}} className='home-top-large' ref={top}>
          <div className='top-contents'> 
            <motion.div 
            style={{marginLeft: '5vw'}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ ease: "easeOut", duration: 2 }}
            >
              <h1 style={{fontSize: '8vw', color: 'white', margin: 0}}>Betti Angyan</h1>
              <h2 style={{fontSize: '3vw', color: 'white', marginLeft: '5vw', paddingBottom: '5vw'}}>Helping clients realize how beautiful they really are.</h2>
            </motion.div>
          </div>
          <div>
          <IconButton sx={{'&:hover': {background: 'white'}, marginBottom: 1}} onClick={() => scroll(work)}>
            <ArrowDownwardIcon/>
          </IconButton>
          </div>
        </Box>
        
        {/* WORK SECTION */}
        <Box sx={{display: {xs: 'none', md: 'flex'}}} className='home-work-large' ref={work}>
          <div className='work-contents'>
            <h1 style={{fontSize: '8vw', color: 'white', marginRight: '5vw'}}>My Portfolio</h1>
          </div>
          <div>
            <IconButton sx={{'&:hover': {background: 'white'}, marginBottom: 1}} onClick={() => scroll(top)}>
              <ArrowUpwardIcon/>
            </IconButton>
          </div>
        </Box>
    </div>
  )
}

export default Home