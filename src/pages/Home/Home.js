import React from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
        {/* SMALL SCREENS */}
        <Box sx={{display: {xs: 'flex', md: 'none'}}}>

        </Box>

        {/* NORMAL - LARGE SCREENS */}
        <Box sx={{display: {xs: 'none', md: 'flex'}}} className='home-first-section-large' >
          <div style={{marginLeft: '5vw'}}> 
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ ease: "easeOut", duration: 2 }}
            >
              <h1 style={{fontSize: '8vw', color: 'white', margin: 0}}>Betti Angyan</h1>
              <h2 style={{fontSize: '3vw', color: 'white', marginLeft: '5vw', paddingBottom: '5vw'}}>Makeup Artist.</h2>
            </motion.div>
          </div>
          <div>
            <motion.div whileHover={{scale: 1.3}}>
              <IconButton>
                  <ArrowDownwardIcon/>
                </IconButton>
              </motion.div>
          </div>
        </Box>
    </div>
  )
}

export default Home